import Contact from '../models/Contact.js';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

// Create reusable transporter (Gmail SMTP)
// EMAIL_PASS must be a Gmail App Password — NOT your regular Gmail password.
// Generate one at: myaccount.google.com → Security → App Passwords
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Notification email HTML — sent TO Somya
const buildNotificationEmail = ({ name, email, subject, message }) => ({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
  to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
  subject: `📬 New Contact: ${subject}`,
  html: `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f0b08;color:#f5f5f5;border-radius:12px;overflow:hidden;border:1px solid #2e2820;">
      <div style="background:linear-gradient(135deg,#8b5e3c,#d4a373);padding:28px 32px;">
        <h1 style="margin:0;font-size:22px;font-weight:700;color:#0f0b08;">📬 New Portfolio Message</h1>
        <p style="margin:6px 0 0;font-size:13px;color:rgba(0,0,0,0.65);font-family:monospace;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
      </div>
      <div style="padding:28px 32px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:10px 0;color:#d4a373;font-family:monospace;width:90px;vertical-align:top;">FROM</td><td style="padding:10px 0;color:#f5f5f5;font-weight:600;">${name}</td></tr>
          <tr style="border-top:1px solid #2e2820;"><td style="padding:10px 0;color:#d4a373;font-family:monospace;">EMAIL</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#d4a373;text-decoration:none;">${email}</a></td></tr>
          <tr style="border-top:1px solid #2e2820;"><td style="padding:10px 0;color:#d4a373;font-family:monospace;">SUBJECT</td><td style="padding:10px 0;color:#f5f5f5;">${subject}</td></tr>
          <tr style="border-top:1px solid #2e2820;"><td style="padding:10px 0;color:#d4a373;font-family:monospace;vertical-align:top;">MESSAGE</td><td style="padding:10px 0;color:#c9c9c9;line-height:1.6;white-space:pre-wrap;">${message}</td></tr>
        </table>
      </div>
      <div style="padding:16px 32px 24px;border-top:1px solid #2e2820;">
        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;background:linear-gradient(135deg,#8b5e3c,#d4a373);color:#0f0b08;font-weight:700;font-size:13px;padding:10px 22px;border-radius:8px;text-decoration:none;">↩ Reply to ${name}</a>
      </div>
      <div style="padding:12px 32px;background:#0a0806;text-align:center;">
        <p style="margin:0;font-size:11px;color:#555;font-family:monospace;">Somya Jain · Portfolio Contact System</p>
      </div>
    </div>
  `,
});

// Auto-reply HTML — sent TO the person who filled the form
const buildAutoReplyEmail = ({ name, email, subject }) => ({
  from: `"Somya Jain" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: `Re: ${subject} — Got your message! 👋`,
  html: `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:560px;margin:0 auto;background:#0f0b08;color:#f5f5f5;border-radius:12px;overflow:hidden;border:1px solid #2e2820;">
      <div style="background:linear-gradient(135deg,#8b5e3c,#d4a373);padding:24px 28px;">
        <h1 style="margin:0;font-size:20px;font-weight:700;color:#0f0b08;">Hey ${name}! 👋</h1>
      </div>
      <div style="padding:24px 28px;font-size:14px;line-height:1.75;color:#c9c9c9;">
        <p style="margin:0 0 14px;">Thanks for reaching out via my portfolio — I received your message about <strong style="color:#d4a373;">"${subject}"</strong>.</p>
        <p style="margin:0 0 14px;">I typically reply within <strong style="color:#f5f5f5;">24–48 hours</strong>. Looking forward to connecting!</p>
        <p style="margin:0 0 4px;">— Somya Jain</p>
        <p style="margin:0;font-size:12px;color:#555;font-family:monospace;">Full Stack Developer · somyajain20048@gmail.com</p>
      </div>
      <div style="padding:12px 28px;background:#0a0806;text-align:center;">
        <p style="margin:0;font-size:11px;color:#555;font-family:monospace;">This is an automated reply — please don't reply to this email directly.</p>
      </div>
    </div>
  `,
});

/**
 * Handle new contact message submission
 * POST /api/contact
 */
export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Anonymous';
    const userAgent = req.headers['user-agent'] || 'Unknown';

    let savedContact = null;

    // 1. Persist to MongoDB if connected
    if (mongoose.connection.readyState === 1) {
      savedContact = await Contact.create({ name, email, subject, message, ip: clientIp, userAgent });
    } else {
      console.log('📝 Contact message received (MongoDB offline):', { name, email, subject });
    }

    // 2. Send email notifications (non-blocking — won't fail the API response)
    const transporter = createTransporter();
    if (transporter) {
      try {
        await Promise.all([
          transporter.sendMail(buildNotificationEmail({ name, email, subject, message })),
          transporter.sendMail(buildAutoReplyEmail({ name, email, subject })),
        ]);
        console.log(`✅ Emails sent — notification to Somya, auto-reply to ${email}`);
      } catch (emailError) {
        console.error('⚠️  Email sending failed (message still saved):', emailError.message);
      }
    } else {
      console.warn('⚠️  Email not configured. Add EMAIL_USER and EMAIL_PASS to .env to enable.');
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. I will get back to you shortly.',
      data: {
        id: savedContact ? savedContact._id : 'msg_' + Date.now(),
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error processing contact message:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process your message. Please try again or email directly.',
    });
  }
};

/**
 * Check Contact API health and status
 * GET /api/contact/health
 */
export const getContactHealth = async (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Offline / Standalone';
  const emailConfigured = !!(process.env.EMAIL_USER && process.env.EMAIL_PASS);
  let messageCount = 0;

  if (mongoose.connection.readyState === 1) {
    try { messageCount = await Contact.countDocuments(); } catch (e) { /* ignore */ }
  }

  res.status(200).json({
    status: 'OK',
    service: 'Contact API Service',
    database: dbStatus,
    emailNotifications: emailConfigured ? 'Configured ✅' : 'Not configured ⚠️',
    totalMessagesLogged: messageCount,
    timestamp: new Date().toISOString(),
  });
};


/**
 * Handle new contact message submission
 * POST /api/contact
 */
export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Anonymous';
    const userAgent = req.headers['user-agent'] || 'Unknown';

    let savedContact = null;

    // If MongoDB is connected, persist to database
    if (mongoose.connection.readyState === 1) {
      savedContact = await Contact.create({
        name,
        email,
        subject,
        message,
        ip: clientIp,
        userAgent,
      });
    } else {
      console.log('📝 Contact message received in memory (MongoDB not active):', {
        name,
        email,
        subject,
        message: message.substring(0, 50) + '...',
        receivedAt: new Date().toISOString(),
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully.',
      data: {
        id: savedContact ? savedContact._id : 'mem_' + Date.now(),
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process your message. Please try again later or email directly.',
    });
  }
};

/**
 * Check Contact API health and status
 * GET /api/contact/health
 */
export const getContactHealth = async (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Offline / Standalone';
  let messageCount = 0;

  if (mongoose.connection.readyState === 1) {
    try {
      messageCount = await Contact.countDocuments();
    } catch (e) {
      // Ignore count error
    }
  }

  res.status(200).json({
    status: 'OK',
    service: 'Contact API Service',
    database: dbStatus,
    totalMessagesLogged: messageCount,
    timestamp: new Date().toISOString(),
  });
};
