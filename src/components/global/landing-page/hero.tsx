"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Pointer from "./pointer";
import { motion, useAnimate } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: -50 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: -100, x: -150 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [-100, 16, 0] },
        { duration: 1, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: -0, x: 220 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 75, y: [0, 20, 0] },
        { duration: 1, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      style={{
        cursor: `url('/cursor-you.svg'), auto`,
      }}
      className="text-white/80 py-24 overflow-x-clip"
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            alt="Workspace Image"
            src="/pic1.png"
            width={250}
            height={250}
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="absolute top-96 left-56 hidden lg:block z-100"
        >
          <Pointer name="Haroon" />
        </motion.div>
        <motion.div
          drag
          initial={{ opacity: 0, y: 100, x: 100 }}
          ref={rightDesignScope}
          className="absolute -right-56 -top-16 hidden lg:block"
        >
          <Image
            draggable="false"
            alt="Upgrade Image"
            width={300}
            height={300}
            src="/pic2.png"
          />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 275, x: 300 }}
          className="absolute right-60 -top-4 hidden lg:block"
        >
          <Pointer name="Bob" colour="red" />
        </motion.div>
        <div className="flex flex-col items-center">
          <div
            className="inline-flex py-1 px-3 bg-gradient-to-r from-[#6d60a3] via-[#9434e6] to-[#CC3BD4]
        rounded-full text-neutral-950 font-semibold"
          >
            Contact to fund
          </div>

          <h1 className="text-6xl lg:text-8xl md:text-7xl font-medium text-center mt-6 tracking-tighter">
            ✨Impactful notes, created effortlessly
          </h1>
          <p className="text-center text-xl text-white/50 mt-8 max-w-2xl">
            Note apps shouldn't slow you down. SmartNote combines powerful AI
            with simple note-taking that keeps you in your creative flow
          </p>
          <form
            className="flex justify-between borderColour rounded-full p-2 mt-8 max-w-lg"
            onSubmit={(event) => {
              // event.preventDefault(); // Prevent default form submission
              toast("Message sent"); // Show the toast notification
            }}
          >
            <input
              className="bg-transparent px-4 md:flex-1 rounded-full outline-none"
              type="email"
              placeholder="Send us your email"
            />
            <Button className="h-10" type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;