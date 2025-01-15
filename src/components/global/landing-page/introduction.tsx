import React from "react";
import Tag from "./landing-components/tag";

type Props = {};

const Introduction = (props: Props) => {
  const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing Trigg</Tag>
        </div>
        <div className="text-4xl text-center font-medium mt-10">
          <span>Your Creative process deserves better.</span>
          <span className="text-white/15">{text}</span>
          <span className="">That&apos;s why we build Trigg.</span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
