// src/App.tsx
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
import { MapPin } from "@/components/animate-ui/icons/map-pin";
import { Progress } from "@/components/animate-ui/components/radix/progress";

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
import * as React from "react";

export function App() {
  // Scroll progress state (0-100)
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
    <CursorProvider>
      <TooltipProvider delayDuration={200}>
        {/* ================= Scroll Progress Bar ================= */}
        <Progress
          value={scroll}
          className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800"
        />

        <div className="relative w-full min-h-screen bg-black">

          {/* ================= Bubble Background ================= */}
          <BubbleBackground
            className="fixed inset-0"
            interactive={true} // Enable mouse-follow
          />

          {/* ================= Main Content ================= */}
          <div className="relative z-10 flex flex-col items-center justify-start pt-16 px-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">

              {/* ================= Profile Image ================= */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <img
                    src={me}
                    alt="Thibee"
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
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold mb-4">
                  Hi, I'm Thibee
                </h1>

                {/* Location */}
                <div className="flex items-center gap-2 mt-4 text-lg max-w-md">
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

                {/* ================= Buttons ================= */}
                <div className="mt-8 flex gap-4 flex-wrap">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <RippleButton onClick={() => window.location.href = "/studies"}>
                        Studies
                      </RippleButton>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="center"
                      sideOffset={8}
                      className="bg-white text-black px-3 py-1 rounded-md shadow-lg"
                    >
                      My studies
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <RippleButton onClick={() => window.location.href = "/jobs"}>
                        Jobs
                      </RippleButton>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="center"
                      sideOffset={8}
                      className="bg-white text-black px-3 py-1 rounded-md shadow-lg"
                    >
                      Work experience
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <RippleButton onClick={() => window.location.href = "/projects"}>
                        Projects
                      </RippleButton>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="center"
                      sideOffset={8}
                      className="bg-white text-black px-3 py-1 rounded-md shadow-lg"
                    >
                      Things I've built
                    </TooltipContent>
                  </Tooltip>
                </div>
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