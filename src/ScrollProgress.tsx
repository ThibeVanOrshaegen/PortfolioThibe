// src/ScrollProgress.tsx
import * as React from "react";
import { Progress as RadixProgress, ProgressIndicator as RadixProgressIndicator } from "@radix-ui/react-progress";

interface ScrollProgressProps {
  className?: string;
  indicatorClassName?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  className,
  indicatorClassName,
}) => {
  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <RadixProgress
      className={`relative overflow-hidden rounded-full ${className}`}
      value={scroll}
    >
      <RadixProgressIndicator
        className={`absolute left-0 top-0 h-full transition-transform duration-200 ease-out ${indicatorClassName}`}
        style={{ transform: `scaleX(${scroll / 100})`, transformOrigin: "left" }}
      />
    </RadixProgress>
  );
};