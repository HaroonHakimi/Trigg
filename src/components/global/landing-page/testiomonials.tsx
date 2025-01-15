"use client";

import React, { useState } from "react";
import SectionBorder from "./landing-components/section-border";
import SectionContent from "./landing-components/section-content";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

type Props = {};

export const Testimonials = (props: Props) => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
      name: "Ashwin Santiago",
      title: "Operations Manager",
      image: "/testimonial-images/ashwin-santiago.jpg",
    },
    {
      quote:
        "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
      name: "Alec Whitten",
      title: "Lead Developer",
      image: "/testimonial-images/alec-whitten.jpg",
    },
    {
      quote:
        "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
      name: "Rene Wells",
      title: "Customer Success Manager",
      image: "/testimonial-images/rene-wells.jpg",
    },
    {
      quote:
        "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
      name: "Mollie Hall",
      title: "Product Designer",
      image: "/testimonial-images/mollie-hall.jpg",
    },
  ];

  const SELECTED_TESTIMONIAL_INDEX = 0;

  return (
    <section className="">
      <div className="container">
        <SectionBorder className="border-t">
          <SectionContent>
            <LayoutGroup>
              <motion.div
                layout
                className="border-gradient rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative  flex flex-col md:flex-row  gap-12 md:mx-10 lg:mx-20"
              >
                <Quote className="absolute size-20 text-orange-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2" />
                <AnimatePresence mode="wait" initial={false}>
                  {testimonials.map((testimonial, index) =>
                    testimonialIndex === index ? (
                      <motion.blockquote
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ duration: 0.5 }}
                        layout
                        key={testimonial.name}
                        className="flex flex-col lg:flex-row gap-12"
                      >
                        <p className="text-xl md:text-2xl font-medium">
                          {testimonial.quote}
                        </p>
                        <cite className="not-italic lg:text-right">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={112}
                            height={112}
                            className="rounded-xl size-28 max-w-none"
                          />
                          <div className="font-bold mt-4">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-2">
                            {testimonial.title}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ) : null
                  )}
                </AnimatePresence>
                <motion.div
                layout='position'
                className="flex gap-2 md:flex-col ">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className="size-6 relative isolate inline-flex items-center justify-center cursor-pointer"
                      onClick={() => setTestimonialIndex(index)}
                    >
                      {testimonialIndex === index && (
                        <motion.div
                          className="absolute border-orange-600 border size-full rounded-full"
                          layoutId="testimonial-dot"
                        ></motion.div>
                      )}
                      <div className="size-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;
