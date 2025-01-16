"use client";

import React, { useEffect, useRef, useState } from "react";
import Tag from "./landing-components/tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {};

const Introduction = (props: Props) => {
  const text = `You’re striving to build meaningful connections and grow your online presence, but traditional tools for managing DMs are clunky, time-consuming, and lack the automation needed to scale effectively.`;
  const words = text.split(" ");

  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => setCurrentWordIndex(latest));
  }, [wordIndex]);

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => console.log(latest))
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing Trigg</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your Creative process deserves better.</span>{" "}
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    'transition duration-500 text-white/15',
                    wordIndex < currentWordIndex && "text-white"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-[#FF8C00] block">
              That&apos;s why we built Trigg.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Introduction;
