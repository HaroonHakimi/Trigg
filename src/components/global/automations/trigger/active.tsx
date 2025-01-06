import { InstagramDuoToneBlue, PlaneBlue } from "@/icons";
import { Instagram } from "lucide-react";
import React from "react";

type Props = {
  type: string;
  keywords: {
    id: string;
    word: string;
    automationId: string | null;
  }[];
};

const ActiveTrigger = ({ type, keywords }: Props) => {
  return (
    <div className="bg-background-80 p-3 rounded-xl w-full">
      <div className="flex items-center gap-x-2 ">
        {type === "COMMENT" ? <InstagramDuoToneBlue /> : <PlaneBlue />}

        <p className="text-lg">
          {type === "COMMENT"
            ? "User Comments on my post"
            : "User sends me a direct message"}
        </p>
      </div>
      <p className="text-text-secondary">
        {type === "COMMENT"
          ? "If the user comments on a video that is set up to listen for keywords, this automation will fire"
          : "If the user sends a direct message that contains a keyword, this automation will fire"}
      </p>

      <div className="flex gap-2 mt-5 flex-wrap">
        {keywords.map((word) => (
          <div
            key={word.id}
            className="bg-gradient-to-br from-[#FF8C00]  to-[#653801]
            flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full cursor-pointer"
          >
            <p>{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTrigger;
