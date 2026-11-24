import React, { useState, useEffect } from 'react';

export const TypewriterTitle = ({
  titles = [
    'Backend Developer',
    'AI Integration Enthusiast',
    'RESTful API Designer',
    'Server-Side Engineer'
  ],
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1800
}) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetTitle = titles[titleIndex];
    let timer;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(targetTitle.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    } else {
      if (displayedText.length < targetTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText(targetTitle.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex, titles, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div
      className="inline-flex items-center min-h-[32px] sm:min-h-[40px]"
      aria-label={`Professional role: ${titles.join(', ')}`}
    >
      <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold accent-gradient-text tracking-tight">
        {displayedText}
      </span>
      {/* Sleek Blinking Terminal Cursor */}
      <span
        className="inline-block w-[3px] h-6 sm:h-7 lg:h-8 ml-1 bg-secondaryAccent rounded-full animate-pulse shadow-glow-cyan"
        aria-hidden="true"
      />
    </div>
  );
};
