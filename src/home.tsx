// src/Home.tsx
import { GradientBackground     } from "@/components/animate-ui/components/backgrounds/gradient";
import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
//import { MapPin } from "@/components/animate-ui/icons/map-pin";
import { ScrollProgress } from "./ScrollProgress";
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

export default function Home() {
      return (
    <CursorProvider>
      <TooltipProvider delayDuration={200}>
        <div className="relative w-full h-screen bg-black overflow-hidden">

          {/* ================= Bubble Background ================= */}
          <GradientBackground    className="fixed inset-0" />

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
              <h1 className="text-5xl font-bold mb-4">Hi, I'm Thibee</h1>

              {/* Location */}
              <div className="flex items-center gap-2 mt-4 text-lg max-w-md justify-center md:justify-start">
                <span>yesss, Belgium</span>
              </div>

              {/* Description */}
              <p className="text-lg max-w-md mt-4 leading-relaxed">
                Welcome to my portfolio website. I am an informatics and
                electronic/embedded systems student.
                <br />
                I hope you can learn more about me through this website.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
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

              </div>
            </div>
          </div>

          {/* ================= Scrollable Content Below Hero ================= */}
          <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6 py-16">
            {[...Array(50)].map((_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                lacinia ex nec elit vulputate, sit amet varius sapien fringilla. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Section {i + 1}.
              </p>
            ))}
          </div>

          {/* ================= Floating Scroll Progress Bar ================= */}
          <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-48 h-1 z-50">
            <ScrollProgress
              className="w-full h-full rounded-full bg-gray-800 shadow-lg"
              indicatorClassName="bg-white"
            />
          </div>

          {/* ================= Custom Cursor ================= */}
          <Cursor color="white">{null}</Cursor>
          <CursorFollow>{null}</CursorFollow>
        </div>
      </TooltipProvider>
    </CursorProvider>
  );
}



