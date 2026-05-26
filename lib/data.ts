import { createElement, type ReactNode } from "react";

import MiniUrlVisual from "@/components/project-visuals/MiniUrlVisual";
import TradingVisual from "@/components/project-visuals/TradingVisual";
import MenPackVisual from "@/components/project-visuals/MenPackVisual";
import AlgoVisualVisual from "@/components/project-visuals/AlgoVisualVisual";

export type Project = {
  id: string;
  category: string;
  name: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  visual: ReactNode;
};

export const projects: Project[] = [
  {
    id: "01",

    category: "FULL STACK PLATFORM",

    name: "MiniUrl",

    title: "Production-grade URL shortener infrastructure.",

    description:
      "Built and deployed a scalable full-stack URL shortening platform using Spring Boot, Next.js, Redis, MySQL, AWS EC2, and Nginx with JWT authentication, HTTPS support, caching, and deployment workflows.",

    tags: ["SPRING BOOT", "NEXT.JS", "REDIS", "MYSQL", "AWS"],

    liveUrl: "https://miniurl.com/",

    githubUrl: "https://github.com/dhiraj2105/miniurl",

    visual: createElement(MiniUrlVisual),
  },

  {
    id: "02",

    category: "ALGORITHMIC SYSTEMS",

    name: "Trading Infrastructure",

    title: "Low-latency trading backend systems.",

    description:
      "Developed backend infrastructure for algorithmic trading systems in my current job using Flask, Redis, MySQL, and real-time execution workflows with optimized caching layers.",

    tags: ["FLASK", "PYTHON", "REDIS", "MYSQL", "WS"],

    liveUrl: "https://www.kimbly.in/",

    githubUrl: "/",

    visual: createElement(TradingVisual),
  },

  {
    id: "03",

    category: "DEVELOPER TOOLING",

    name: "Men-Pack",

    title: "Open-source backend boilerplate generator.",

    description:
      "Published an NPM package to automate backend boilerplate generation with reusable modules and CI/CD workflows.",

    tags: ["NODE", "TS", "EXPRESS", "CI/CD"],

    liveUrl: "https://www.npmjs.com/package/men-pack",

    githubUrl: "https://github.com/dhiraj2105/men-pack",

    visual: createElement(MenPackVisual),
  },

  {
    id: "04",

    category: "VISUAL COMPUTING",

    name: "AlgoVisual",

    title: "Interactive algorithm visualization platform.",

    description:
      "Built a modern DSA visualizer with animated algorithm execution, real-time pointer tracking, and interactive learning workflows.",

    tags: ["NEXT.JS", "TS", "TAILWIND", "VERCEL"],

    liveUrl: "https://algovisual-six.vercel.app/",

    githubUrl: "https://github.com/dhiraj2105/algovisual",

    visual: createElement(AlgoVisualVisual),
  },
];
