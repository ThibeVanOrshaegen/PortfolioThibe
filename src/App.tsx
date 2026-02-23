// src/App.tsx
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
import { MapPin } from "@/components/animate-ui/icons/map-pin";
//import {IconButton} from "@/components/animate-ui/components/buttons/icon"
import { FaLinkedin } from "react-icons/fa";
import { Github } from "lucide-react";
//import { ScrollProgress } from "./ScrollProgress";
import {
  Cursor,
  CursorProvider,
  CursorFollow,
} from "@/components/animate-ui/primitives/animate/cursor";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/animate-ui/primitives/radix/tooltip";
import me from "./assets/me.png";
import Home from "./home";
import { useState } from "react";


export function App() {
  const [showHome, setShowHome] = useState(false);

  if (showHome) {
    return <Home />;
  }
  return (
    <CursorProvider>
      <TooltipProvider delayDuration={200}>
        <div className="relative w-full h-screen bg-black overflow-hidden">

          {/* ================= Bubble Background ================= */}
          <BubbleBackground className="fixed inset-0" interactive={true} />

          {/* ================= Hero Section (Centered) ================= */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 text-white gap-12">

            {/* ================= Profile Image ================= */}
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  src={me}
                  alt="Thibe"
                  className="w-80 h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent
                side="top"
                align="center"
                sideOffset={8}
                className="bg-white text-black px-3 py-1 rounded-md shadow-lg"
              >
                This is me!
              </TooltipContent>
            </Tooltip>



            {/* ================= Text Section ================= */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4">Hi, I'm Thibe</h1>

              {/* Location */}
              <div className="flex items-center gap-2 mt-4 text-lg max-w-md justify-center md:justify-start">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="cursor-pointer">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="center"
                    sideOffset={8}
                    className="bg-white text-black px-2 py-1 rounded-md shadow-lg"
                  >
                    Location: Brussels
                  </TooltipContent>
                </Tooltip>
                <span>Borgloon, Belgium</span>
              </div>

              {/* Description */}
              <p className="text-lg max-w-md mt-4 leading-relaxed">
                Welcome to my portfolio website. I am an informatics and
                electronic/embedded systems student.
                <br />
                I hope you can learn more about me through this website.
              </p>

          <div className="flex gap-4 mt-12 justify-center md:justify-start">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/ThibeVanOrshaegen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <Github className="w-6 h-6 text-white hover:text-gray-400 transition-colors" />
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                align="center"
                sideOffset={8}
                className="bg-white text-black px-3 py-1 rounded-md shadow-lg"
              >
                My GitHub
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/thibe-van-orshaegen-91b164329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <FaLinkedin className="w-6 h-6 text-white hover:text-blue-400 transition-colors" />
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                align="center"
                sideOffset={8}
                className="bg-white text-black px-3 py-1 rounded-md shadow-lg"
              >
                My LinkedIn
              </TooltipContent>
            </Tooltip>
          </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <RippleButton onClick={() => setShowHome(true)}>
                      Learn more about me
                    </RippleButton>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="center"
                    sideOffset={8}
                    className="bg-white text-black px-3 py-1 rounded-md shadow-lg"
                  >
                    Get to know about me
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* ================= Custom Cursor ================= */}
          <Cursor color="white">{null}</Cursor>
          <CursorFollow>{null}</CursorFollow>
        </div>
      </TooltipProvider>
    </CursorProvider>
  );
}
export default App;