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
        "This DM automation platform has revolutionized how I manage my social media accounts. The AI-powered responses are fast, accurate, and incredibly helpful in engaging with my audience. It’s a must-have for any creator!",
      name: "Ashwin Santiago",
      title: "Content Creator",
      image: "/testimonial-images/ashwin-santiago.jpg",
    },
    {
      quote:
        "Automating DMs has saved me countless hours every week. The platform seamlessly integrates with my social media profiles, and the AI-powered replies feel personal and professional. Highly recommend it!",
      name: "Alec Whitten",
      title: "Social Media Manager",
      image: "/testimonial-images/alec-whitten.jpg",
    },
    {
      quote:
        "The AI-powered tier for advanced reply automation is a game changer. It enables me to handle inquiries quickly and keeps my audience engaged while I focus on creating content. I can’t imagine managing DMs without it.",
      name: "Rene Wells",
      title: "Digital Marketer",
      image: "/testimonial-images/rene-wells.jpg",
    },
    {
      quote:
        "This platform has been a lifesaver for my social media workflow. The automated replies are spot on, and the customization options make it a perfect fit for my brand. It’s intuitive and easy to use—highly recommended!",
      name: "Mollie Hall",
      title: "Influencer",
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
                  layout="position"
                  className="flex gap-2 md:flex-col "
                >
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
