import { useState, useEffect } from 'react';

/**
 * Custom typewriter hook for rotating text headlines with realistic cursor timing
 */
export function useTypewriter({
  words = [],
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1800,
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const deleteTimeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, deletingSpeed);
      return () => clearTimeout(deleteTimeout);
    } else {
      if (subIndex === words[index]?.length) {
        setIsPaused(true);
        return;
      }

      const typeTimeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(typeTimeout);
    }
  }, [subIndex, index, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseDuration]);

  const currentWord = words[index] || '';
  const displayText = currentWord.substring(0, subIndex);

  return { displayText, isDeleting, isPaused };
}
