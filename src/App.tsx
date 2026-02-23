// src/App.tsx
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
import { MapPin } from "@/components/animate-ui/icons/map-pin";
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

export function App() {
  return (
    <CursorProvider>
      <TooltipProvider delayDuration={200}>
        {/*<div className="relative w-full h-screen overflow-hidden bg-black">*/}
        <div className="relative w-full min-h-screen bg-black">

          {/* ================= Bubble Background ================= */}
          <BubbleBackground
            className="fixed inset-0"
            interactive={true} // Enable mouse-follow
          />

          {/* ================= Main Content ================= */}
          <div className="relative z-10 flex items-center justify-center h-full p-8 text-white">
            <div className="flex flex-row items-center gap-12 max-w-5xl w-full">

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
                <div className="mt-8 flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <RippleButton onClick={() => window.location.href = '/studies'}>
                        Studies
                      </RippleButton>
                    </TooltipTrigger>
                    <TooltipContent
                  side="top"
                  align="center"
                  sideOffset={8}
                  className="bg-white text-black px-3 py-1 rounded-md shadow-lg"
                >
                  This is me!
                </TooltipContent>
                    <TooltipContent side="top"></TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <RippleButton onClick={() => window.location.href = '/jobs'}>
                        Jobs
                      </RippleButton>
                    </TooltipTrigger>
                    <TooltipContent side="top">Work experience</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <RippleButton onClick={() => window.location.href = '/projects'}>
                        Projects
                      </RippleButton>
                    </TooltipTrigger>
                    <TooltipContent side="top">Things I've built</TooltipContent>
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