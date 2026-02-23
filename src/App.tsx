// src/App.tsx
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
import { MapPin } from "@/components/animate-ui/icons/map-pin";
import { Cursor, CursorProvider, CursorFollow } from '@/components/animate-ui/primitives/animate/cursor';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/animate-ui/primitives/radix/tooltip";
import me from './assets/me.png';

export function App() {
  return (
    <CursorProvider>
      <TooltipProvider>
        <div className="relative w-full h-screen overflow-hidden bg-black">

          {/* Bubble Background */}
          <BubbleBackground className="absolute inset-0" />

          {/* Overlay content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white">
            <div className="flex flex-row items-center gap-8 max-w-5xl w-full">

              {/* Profile Image with Tooltip */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer">
                    <img
                      src={me}
                      alt="Thibe"
                      className="w-80 h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  align="center"
                  sideOffset={1}
                  className="bg-white text-black px-3 py-1 rounded-md shadow-lg select-none
                             opacity-0 scale-95 transition-all duration-200
                             data-[state=open]:opacity-100 data-[state=open]:scale-100 pointer-events-none"
                >
                  This is me!
                </TooltipContent>
              </Tooltip>

              {/* Name + Description */}
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Thibee</h1>

                <div className="flex items-center gap-2 mt-4 text-lg max-w-md">
                  {/* MapPin with Tooltip */}
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
                      className="bg-white text-black px-2 py-1 rounded-md shadow-lg select-none
                                 opacity-0 scale-95 transition-all duration-200
                                 data-[state=open]:opacity-100 data-[state=open]:scale-100 pointer-events-none"
                    >
                      Location: Brussels
                    </TooltipContent>
                  </Tooltip>
                  <span>Borgloon, Belgium</span>
                </div>

                <p className="text-lg max-w-md mt-4">
                  Welcome to my portfolio website, i am a informatica and electronic/embedded student. 
                  <br />
                  I hope you can learn more about me through this website
                </p>

                {/* Ripple Button with Tooltip */}
                <div className="mt-6">
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <div className="mt-6 flex gap-4">
                        <RippleButton>
                          Study's
                        </RippleButton>
                        <RippleButton>
                          Jobs
                        </RippleButton>
                        <RippleButton>
                          Projects
                        </RippleButton>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="center"
                      sideOffset={8}
                      className="bg-white text-black px-3 py-1 rounded-md shadow-lg select-none
                                 opacity-0 scale-95 transition-all duration-200
                                 data-[state=open]:opacity-100 data-[state=open]:scale-100 pointer-events-none"
                    >
                      This button triggers an action!
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>

          {/* Cursor and follow text (TypeScript requires children) */}
          <Cursor color="white">{null}</Cursor>
          <CursorFollow>{null}</CursorFollow>
        </div>
      </TooltipProvider>
    </CursorProvider>
  );
}

export default App;