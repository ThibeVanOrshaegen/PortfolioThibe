// src/App.tsx
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { MapPin } from "@/components/animate-ui/icons/map-pin";
import { FaLinkedin } from "react-icons/fa";
import { Github } from "lucide-react";
import { RadialIntro } from "@/components/animate-ui/components/community/radial-intro";
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

// List of PNGs for radial orbit
import C from "./assets/C.png";
import CPlusPlus from "./assets/CPlusPlus.png";
import CSharp from "./assets/CSharp.png";
import Java from "./assets/Java.png";
import JavaScript from "./assets/JavaScript.png";
import LabVIEW from "./assets/LabVIEW.png";

const ITEMS = [
  { id: 1, src: C },
  { id: 2, src: CPlusPlus },
  { id: 3, src: CSharp },
  { id: 4, src: Java },
  { id: 5, src: JavaScript },
  { id: 6, src: LabVIEW },
];

export function App() {
  return (
    <CursorProvider>
      <TooltipProvider delayDuration={200}>
        <div className="relative w-full min-h-screen bg-black overflow-hidden">

          {/* ================= Bubble Background ================= */}
          <BubbleBackground className="fixed inset-0" interactive={true} />

          {/* ================= Main Section ================= */}
          <div className="relative z-10 flex flex-col items-center px-8 py-16 text-white gap-12">

            {/* ================= Hero: Image + Text ================= */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-start justify-center gap-12">
              
              {/* Profile Image */}
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

              {/* Text Section */}
              <div className="flex flex-col justify-start text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Thibee</h1>

                {/* Location */}
                <div className="flex items-center gap-2 mt-2 text-lg max-w-md justify-center md:justify-start">
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
                  <br />
                </p>

                {/* Social Icons */}
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
me                  <Tooltip>
                  </Tooltip>
                </div>
              </div>
            </div>

            {/* ================= Radial Orbit ================= */}
            <div className="mt-12 w-full flex justify-center">
              <RadialIntro
                orbitItems={ITEMS.map(item => ({
                  id: item.id,
                  name: `item-${item.id}`,
                  src: item.src,
                }))}
                stageSize={500}  // bigger stage for many items
                imageSize={80}
              />
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