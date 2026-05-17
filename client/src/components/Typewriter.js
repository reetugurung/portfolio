'use client';
import { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 30 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {

    setDisplayedText(''); 
    
    const timer = setInterval(() => {
      setDisplayedText((prev) => {

        if (prev.length < text.length) {
          return prev + text.charAt(prev.length);
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse font-semibold text-purple-500">|</span>
    </span>
  );
}