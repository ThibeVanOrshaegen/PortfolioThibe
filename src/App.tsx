// src/App.tsx
import { StarsBackground   } from "@/components/animate-ui/components/backgrounds/stars";

export function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Bubble Background */}
      <StarsBackground className="absolute inset-0" />
      {/* Your content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Thibe</h1>
        <img
          src="/berg.jpg"
          alt="Thibe"
          className="w-44 h-44 rounded-full mb-4"
        />
        <p className="text-lg max-w-xl">
          Welcome to my portfolio website built with React + Vite!
        </p>
      </div>
    </div>
  );
}

export default App;