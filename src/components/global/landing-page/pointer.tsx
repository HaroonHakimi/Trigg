import { twMerge } from "tailwind-merge";

type Props = {
    name?: string;
    colour?: string;
}

export default function Pointer({ name, colour }: Props) {

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer text-violet-500 size-5"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>
      <div className="absolute top-6 left-6">
        <div
          className={
            twMerge(
              "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none",
            colour === "red" && "bg-red-500")
          }
        >
          {name}
        </div>
      </div>
    </div>
  );
}