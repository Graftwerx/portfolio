import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import sketch from "../public/tech-icons/sketch.svg";
import nextjs from "../public/tech-icons/nextjs.svg";
import ai from "../public/tech-icons/ai.svg";
import figma from "../public/tech-icons/figma.svg";
import chatgpt from "../public/tech-icons/chatgpt.svg";
import cloud from "../public/tech-icons/creativecloud.svg";
import framer from "../public/tech-icons/framer.svg";
import github from "../public/tech-icons/github.svg";
import stripe from "../public/tech-icons/stripe.svg";
import slack from "../public/tech-icons/slack.svg";
import postgresql from "../public/tech-icons/postgresql.svg";
import youtube from "../public/tech-icons/youtube.svg";
import tailwindcss from "../public/tech-icons/tailwindcss.svg";
import chrome from "../public/tech-icons/chrome.svg";
import prisma from "../public/tech-icons/prisma.svg";
import ps from "../public/tech-icons/ps.svg";
import sanity from "../public/tech-icons/sanity.svg";
import react from "../public/tech-icons/react.svg";
import ae from "../public/tech-icons/ae.svg";
import vercel from "../public/tech-icons/vercel.svg";
import twitter from "../public/twitter.svg";
import insta from "../public/insta.svg";
import linkedin from "../public/linkedin.svg";
import { Button } from "./ui/button";

const socials = [
  {
    id: 1,
    icon: insta,
    name: "Instagram",
    handle: "@graftwerx",
    link: "http://localhost:3000",
  },
  {
    id: 2,
    icon: twitter,
    name: "X",
    handle: "@graftwerx",
    link: "http://localhost:3000",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    handle: "@graftwerx",
    link: "http://localhost:3000",
  },
];

const icons = [
  sketch,
  nextjs,
  ai,
  figma,
  chatgpt,
  cloud,
  framer,
  github,
  slack,
  postgresql,
  youtube,
  chrome,
  prisma,
  stripe,
  tailwindcss,
  ps,
  sanity,
  react,
  ae,
  vercel,
];

export function SectionTwo() {
  return (
    <div className=" mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Image Column */}
        <div className="w-full relative col-span-1">
          <Image
            src="/square.svg"
            alt="square"
            width={300}
            height={300}
            className="object-cover rounded-2xl w-full h-auto"
          />
        </div>

        {/* Card Column */}
        <div className="flex flex-col w-full col-span-2 gap-4">
          <Card className="bg-gray-100 border-none w-full">
            <CardHeader>
              <CardTitle>Explore my stack</CardTitle>
              <CardDescription>The tools I use frequently</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              {icons.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="icon"
                  width={56}
                  height={56}
                />
              ))}
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
            {socials.map((item) => (
              <Card
                key={item.id}
                className="p-2 flex flex-col items-center sm:items-start bg-gray-100 border-none"
              >
                <Image
                  src={item.icon}
                  alt="social icons"
                  width={48}
                  height={48}
                />
                <h1 className="text-2xl font-medium">{item.name}</h1>
                <p className="text-muted-foreground">{item.handle}</p>
                <Button className="mt-4" size={"sm"} asChild>
                  <a href={item.link}>follow</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
