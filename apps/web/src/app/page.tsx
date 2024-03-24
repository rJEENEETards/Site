import Image from "next/image";
import { Card } from "@repo/ui/card";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? "blur-[32px]" : "blur-[75px]"
      } ${conic ? "bg-glow-conic" : ""} ${className}`}
    />
  );
}

const LINKS = [
  {
    title: "Docs",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-7xl font-mono text-md lg:flex">
        <h2 className="fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          r/JEENEETards
        </h2>
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            href="https://reddit.com/r/JEENEETards"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Reddit</p> 
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center ">
        <div className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0">
          <div className="z-50 flex items-center justify-center w-full">
            <div className="absolute z-50 flex items-center justify-center w-64 h-64">
            </div>
          </div>
          <Gradient
            className="top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]"
            conic
          />
          <div className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6">
            <p className="text-4xl font-semibold">A Reddit Community for JEE & NEET students</p>
          </div>
        </div>
      </div>

      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {LINKS.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}
