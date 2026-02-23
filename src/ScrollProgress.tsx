// app/components/ScrollProgress.tsx
'use client';

import { useState, useEffect } from 'react';
import { Progress, ProgressIndicator } from './progress'; // make sure path is correct

export function ScrollProgress() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollValue((scrollTop / docHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Progress value={scrollValue} className="fixed top-0 left-0 w-full h-2 z-50">
      <ProgressIndicator className="h-full bg-primary" />
    </Progress>
  );
}