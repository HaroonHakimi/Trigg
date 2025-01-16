"use client";
import Image from "next/image";
import React from "react";
import Tag from "./landing-components/tag";

type Props = {};

const Showcase = (props: Props) => {
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Tag>How Trigg works</Tag>
          <div className="relative w-full aspect-video mt-8 border-gradient rounded-2xl overflow-hidden">
            <video
              className="w-full h-full object-contain"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/landing-page-video/showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
