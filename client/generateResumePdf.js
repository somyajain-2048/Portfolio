import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesRomanItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  // Standard A4 dimensions: 595.28 x 841.89
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();
  const margin = 38;
  let y = height - 36;

  const darkColor = rgb(0.08, 0.08, 0.08);
  const grayColor = rgb(0.25, 0.25, 0.25);
  const lightGray = rgb(0.65, 0.65, 0.65);
  const blueColor = rgb(0.06, 0.22, 0.72);

  // Helper to draw solid bullet
  const drawSolidBullet = (bx, by) => {
    page.drawCircle({
      x: bx,
      y: by + 3.2,
      size: 2,
      color: darkColor,
    });
  };

  // Helper to draw hollow circle bullet
  const drawHollowBullet = (bx, by) => {
    page.drawCircle({
      x: bx,
      y: by + 3.2,
      size: 1.6,
      borderWidth: 0.8,
      borderColor: darkColor,
      color: rgb(1, 1, 1),
    });
  };

  // Helper to draw section header with horizontal line
  const drawSectionHeader = (title) => {
    y -= 8;
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 11,
      font: timesRomanBold,
      color: darkColor,
    });
    y -= 3.5;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.75,
      color: lightGray,
    });
    y -= 11;
  };

  // Helper to wrap text into multiple lines
  const wrapText = (text, maxWidth, font, size) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  };

  // ==================== HEADER ====================
  page.drawText('Somya Jain', {
    x: margin,
    y,
    size: 22,
    font: timesRomanBold,
    color: darkColor,
  });

  const rightMargin = width - margin;
  const emailText = 'Email: somyajain20048@gmail.com';
  page.drawText(emailText, {
    x: rightMargin - timesRoman.widthOfTextAtSize(emailText, 9.5),
    y: y + 8,
    size: 9.5,
    font: timesRoman,
    color: darkColor,
  });

  const mobileText = 'Mobile: +91-7970026328';
  page.drawText(mobileText, {
    x: rightMargin - timesRoman.widthOfTextAtSize(mobileText, 9.5),
    y: y - 5,
    size: 9.5,
    font: timesRoman,
    color: darkColor,
  });

  y -= 15;
  page.drawText('LinkedIn: somya-jain', {
    x: margin,
    y,
    size: 9.5,
    font: timesRoman,
    color: darkColor,
  });

  y -= 12;
  page.drawText('Github: somyajain-2048', {
    x: margin,
    y,
    size: 9.5,
    font: timesRoman,
    color: darkColor,
  });

  y -= 15;

  // ==================== EDUCATION ====================
  drawSectionHeader('Education');

  drawSolidBullet(margin + 2, y);
  page.drawText('Indira Gandhi Government Engineering College, Sagar', {
    x: margin + 14,
    y,
    size: 10.5,
    font: timesRomanBold,
    color: darkColor,
  });

  const eduLoc = 'MP, India';
  page.drawText(eduLoc, {
    x: rightMargin - timesRoman.widthOfTextAtSize(eduLoc, 10),
    y,
    size: 10,
    font: timesRoman,
    color: darkColor,
  });
  y -= 13;

  page.drawText('Bachelor of Technology - Information Technology', {
    x: margin + 14,
    y,
    size: 10,
    font: timesRomanItalic,
    color: darkColor,
  });

  const eduDates = 'Oct 2022 – June 2026';
  page.drawText(eduDates, {
    x: rightMargin - timesRoman.widthOfTextAtSize(eduDates, 9.5),
    y,
    size: 9.5,
    font: timesRoman,
    color: darkColor,
  });
  y -= 13;

  page.drawText('Courses: Data Structures, DBMS, Networking, Object Oriented Programming, Software Engineering, Agile Methodologies', {
    x: margin + 14,
    y,
    size: 9,
    font: timesRomanItalic,
    color: grayColor,
  });
  y -= 15;

  // ==================== SKILLS ====================
  drawSectionHeader('Skills');

  const skillsData = [
    { label: 'Languages: ', val: 'Java ,C++,JavaScript, TypeScript, HTML, CSS, SQL' },
    { label: 'Tech Stack: ', val: 'React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT Authentication' },
    { label: 'Tools: ', val: 'Git, GitHub, Postman, Prisma, Linux, Redis,LangChain, LangGraph, RAG' },
    { label: 'Platforms: ', val: 'Netlify, Render, Vercel, Docker' },
  ];

  skillsData.forEach(({ label, val }) => {
    drawSolidBullet(margin + 2, y);
    page.drawText(label, {
      x: margin + 14,
      y,
      size: 9.5,
      font: timesRomanBold,
      color: darkColor,
    });
    const labelW = timesRomanBold.widthOfTextAtSize(label, 9.5);
    page.drawText(val, {
      x: margin + 14 + labelW,
      y,
      size: 9.5,
      font: timesRoman,
      color: darkColor,
    });
    y -= 13;
  });
  y -= 4;

  // ==================== EXPERIENCE ====================
  drawSectionHeader('Experience');

  // Experience 1: Madquick
  drawSolidBullet(margin + 2, y);
  page.drawText('MERN Stack Developer Intern – Madquick Pvt. Limited', {
    x: margin + 14,
    y,
    size: 10.5,
    font: timesRomanBold,
    color: darkColor,
  });
  page.drawText('Onsite', {
    x: rightMargin - timesRoman.widthOfTextAtSize('Onsite', 10),
    y,
    size: 10,
    font: timesRoman,
    color: darkColor,
  });
  y -= 13;

  page.drawText('Intern', {
    x: margin + 14,
    y,
    size: 9.5,
    font: timesRomanItalic,
    color: darkColor,
  });
  const exp1Dates = 'Dec 2025 – April 2026';
  page.drawText(exp1Dates, {
    x: rightMargin - timesRomanItalic.widthOfTextAtSize(exp1Dates, 9.5),
    y,
    size: 9.5,
    font: timesRomanItalic,
    color: darkColor,
  });
  y -= 12;

  const exp1Bullets = [
    'Built and shipped backend APIs for products including the Lisstify Chrome Extension and a Disposable Mail System.',
    'Developed new features and integrated third-party APIs, improving overall workflow efficiency.',
    'Collaborated with a team of developers on feature development, bug fixing, and performance testing before deployment.',
  ];

  exp1Bullets.forEach((bullet) => {
    drawHollowBullet(margin + 18, y);
    page.drawText(bullet, {
      x: margin + 26,
      y,
      size: 9,
      font: timesRoman,
      color: darkColor,
    });
    y -= 12;
  });
  y -= 5;

  // Experience 2: GirlScript Summer of Code
  drawSolidBullet(margin + 2, y);
  page.drawText('GirlScript Summer of Code', {
    x: margin + 14,
    y,
    size: 10.5,
    font: timesRomanBold,
    color: darkColor,
  });
  page.drawText('Remote', {
    x: rightMargin - timesRoman.widthOfTextAtSize('Remote', 10),
    y,
    size: 10,
    font: timesRoman,
    color: darkColor,
  });
  y -= 13;

  page.drawText('Open Source Contributor', {
    x: margin + 14,
    y,
    size: 9.5,
    font: timesRomanItalic,
    color: darkColor,
  });
  const exp2Dates = 'July 2025 – Oct 2025';
  page.drawText(exp2Dates, {
    x: rightMargin - timesRomanItalic.widthOfTextAtSize(exp2Dates, 9.5),
    y,
    size: 9.5,
    font: timesRomanItalic,
    color: darkColor,
  });
  y -= 12;

  const exp2Bullets = [
    'Contributed 6+ merged pull requests across multiple open-source repositories, implementing new features and fixing bugs.',
    'Practiced Git-based version control workflows while collaborating with maintainers on real-world codebases.',
    'Investigated and resolved reported issues by navigating large, unfamiliar codebases and debugging production-level code.',
  ];

  exp2Bullets.forEach((bullet) => {
    drawHollowBullet(margin + 18, y);
    page.drawText(bullet, {
      x: margin + 26,
      y,
      size: 9,
      font: timesRoman,
      color: darkColor,
    });
    y -= 12;
  });
  y -= 5;

  // ==================== PROJECTS ====================
  drawSectionHeader('Projects');

  const maxBulletWidth = width - margin - (margin + 26);

  // Project 1: CortexAI
  drawSolidBullet(margin + 2, y);
  page.drawText('CortexAI – Multi-Agent AI SaaS Platform', {
    x: margin + 14,
    y,
    size: 10.5,
    font: timesRomanBold,
    color: darkColor,
  });
  page.drawText('GitHub', {
    x: rightMargin - timesRoman.widthOfTextAtSize('GitHub', 10),
    y,
    size: 10,
    font: timesRoman,
    color: blueColor,
  });
  y -= 13;

  const p1Bullets = [
    'Developed a microservices-based AI SaaS platform with RAG, AI agents, and secure authentication, improving modularity and scalability by 60%.',
    'Built context-aware AI workflows using LangChain, LangGraph, Qdrant, and Redis caching, reducing API response latency by 45% and enabling intelligent document-based conversations.',
    'Containerized services with Docker and integrated Razorpay subscriptions with credit-based usage tracking for scalable deployment and secure monetization.',
    'Tech Stack: React.js, Node.js, MongoDB, Redis, Docker, LangChain, LangGraph,,Razorpay',
  ];

  p1Bullets.forEach((bullet) => {
    const lines = wrapText(bullet, maxBulletWidth, timesRoman, 9);
    drawHollowBullet(margin + 18, y);
    lines.forEach((line) => {
      page.drawText(line, {
        x: margin + 26,
        y,
        size: 9,
        font: timesRoman,
        color: darkColor,
      });
      y -= 11.5;
    });
  });
  y -= 4;

  // Project 2: Price Tracker
  drawSolidBullet(margin + 2, y);
  page.drawText('Price Tracker — Full-Stack Product Monitoring Platform', {
    x: margin + 14,
    y,
    size: 10.5,
    font: timesRomanBold,
    color: darkColor,
  });
  page.drawText('GitHub', {
    x: rightMargin - timesRoman.widthOfTextAtSize('GitHub', 10),
    y,
    size: 10,
    font: timesRoman,
    color: blueColor,
  });
  y -= 13;

  const p2Bullets = [
    'Developed a full-stack product price tracking platform with a Chrome extension, monitoring prices across 2+ e-commerce platforms with 80% scraping accuracy.',
    'Implemented automated email alerts, competitor price comparison, and price history visualization, reducing manual price tracking effort by 80%.',
    'Built secure REST APIs and optimized Puppeteer based scraping workflows, improving data collection efficiency by 50%.',
    'Tech Stack: React.js, Node.js, Express.js, MongoDB, Puppeteer, JWT Authentication, Nodemailer, Recharts',
  ];

  p2Bullets.forEach((bullet) => {
    const lines = wrapText(bullet, maxBulletWidth, timesRoman, 9);
    drawHollowBullet(margin + 18, y);
    lines.forEach((line) => {
      page.drawText(line, {
        x: margin + 26,
        y,
        size: 9,
        font: timesRoman,
        color: darkColor,
      });
      y -= 11.5;
    });
  });
  y -= 4;

  // Project 3: Commute
  drawSolidBullet(margin + 2, y);
  page.drawText('Commute — Real-Time Community Discussion Platform', {
    x: margin + 14,
    y,
    size: 10.5,
    font: timesRomanBold,
    color: darkColor,
  });
  page.drawText('GitHub', {
    x: rightMargin - timesRoman.widthOfTextAtSize('GitHub', 10),
    y,
    size: 10,
    font: timesRoman,
    color: blueColor,
  });
  y -= 13;

  const p3Bullets = [
    'Built a real-time community discussion platform with community management, personalized feeds, and live messaging using Socket.io, improving user engagement by 45%.',
    'Implemented post interactions (likes, comments, saves) and secure JWT-based authentication, reducing unauthorized access by 100%.',
    'Designed scalable REST APIs for authentication, communities, and post management, improving API response performance by 35%.',
    'Tech Stack: Next.js, React.js, Tailwind CSS, Node.js, Express.js, PostgreSQL, Prisma ORM, Socket.io, Zustand,',
  ];

  p3Bullets.forEach((bullet) => {
    const lines = wrapText(bullet, maxBulletWidth, timesRoman, 9);
    drawHollowBullet(margin + 18, y);
    lines.forEach((line) => {
      page.drawText(line, {
        x: margin + 26,
        y,
        size: 9,
        font: timesRoman,
        color: darkColor,
      });
      y -= 11.5;
    });
  });
  y -= 4;

  // ==================== CERTIFICATES ====================
  drawSectionHeader('Certificates');

  const certs = [
    'Completion of 4.0 Technologies – Edunet Foundation',
    'Completion of Web Development Training Program – Octanet Foundation',
    'Open Source Contributor Certificate – GirlScript Summer of Code (2025)',
  ];

  certs.forEach((cert) => {
    drawSolidBullet(margin + 2, y);
    page.drawText(cert, {
      x: margin + 14,
      y,
      size: 9.5,
      font: timesRoman,
      color: darkColor,
    });
    y -= 12.5;
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve(__dirname, 'public', 'resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('✅ Generated resume.pdf successfully at', outputPath, `(y remaining: ${y})`);
}

createResume().catch(console.error);
