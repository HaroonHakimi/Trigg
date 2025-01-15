"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimate, AnimationPlaybackControls } from "framer-motion";
import Link from "next/link";

const CallToAction = () => {
  const [scope, animate] = useAnimate();
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) animation.current.speed = 0.5;
      else animation.current.speed = 1;
    }
  }, [isHovered]);

  return (
    <section className="py-24 text-white/70">
      <div className="p-4 flex overflow-x-clip">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium
        cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <Link
              key={i}
              href="/dashboard"
              className="no-underline text-inherit"
            >
              <div className="flex items-center gap-16 ">
                <span className="text-[#FF8C00]">&#10038;</span>
                <span
                  className="text-white group-hover:bg-gradient-to-r from-[#FFDBBB] to-[#FF8C00] 
                group-hover:bg-clip-text group-hover:text-transparent pb-3"
                >
                  Try it for free
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
