import { Section } from "./index";
import type { UIStrings } from "../types";
import type { IconType } from "react-icons"; // <- for typing icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiJirasoftware,
  SiStorybook,
  SiTestinglibrary,
  SiThreedotjs,
  SiMysql,
} from "react-icons/si";
import { LuPackage } from "react-icons/lu";

type TechItem = {
  name: string;
  Icon: IconType; // store the component, not an element
  className: string; // full class string incl. dark variants
};

const techStack: TechItem[] = [
  { name: "HTML", Icon: SiHtml5, className: "text-orange-500" },
  { name: "CSS", Icon: SiCss3, className: "text-blue-500" },
  { name: "JavaScript", Icon: SiJavascript, className: "text-yellow-400" },
  { name: "TypeScript", Icon: SiTypescript, className: "text-blue-400" },
  { name: "ReactJS", Icon: SiReact, className: "text-cyan-400" },
  // neutrals get explicit dark variants so they stay visible
  {
    name: "NextJS",
    Icon: SiNextdotjs,
    className: "text-gray-700 dark:text-gray-500",
  },
  { name: "Tailwind CSS", Icon: SiTailwindcss, className: "text-cyan-400" },
  { name: "Material UI", Icon: LuPackage, className: "text-blue-400" },
  {
    name: "shadcn/ui",
    Icon: SiShadcnui,
    className: "text-gray-700 dark:text-gray-500",
  },
  { name: "Storybook", Icon: SiStorybook, className: "text-pink-500" },
  { name: "Framer Motion", Icon: SiFramer, className: "text-pink-500" },
  {
    name: "Three.js",
    Icon: SiThreedotjs,
    className: "text-gray-700 dark:text-gray-500",
  },
  { name: "Redux", Icon: SiRedux, className: "text-purple-500" },

  { name: "NodeJS", Icon: SiNodedotjs, className: "text-green-500" },
  {
    name: "ExpressJS",
    Icon: SiExpress,
    className: "text-gray-700 dark:text-gray-500",
  },
  { name: "MongoDB", Icon: SiMongodb, className: "text-green-500" },
  { name: "SQL", Icon: SiMysql, className: "text-sky-500" },
  { name: "Docker", Icon: SiDocker, className: "text-blue-400" },
  {
    name: "Vercel",
    Icon: SiVercel,
    className: "text-gray-700 dark:text-gray-500",
  },

  { name: "Git", Icon: SiGit, className: "text-orange-500" },
  {
    name: "GitHub",
    Icon: SiGithub,
    className: "text-gray-700 dark:text-gray-500",
  },
  { name: "Jira", Icon: SiJirasoftware, className: "text-blue-500" },
  { name: "Postman", Icon: SiPostman, className: "text-orange-500" },
  {
    name: "React Testing Library",
    Icon: SiTestinglibrary,
    className: "text-red-500",
  },
  { name: "npm", Icon: SiNpm, className: "text-red-500" },
];

type TechnologiesProps = { t: UIStrings };

export function Technologies({ t }: TechnologiesProps) {
  return (
    <Section id="tech" title={t.techTitle} subtitle={t.techLead}>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {techStack.map(({ name, Icon, className }) => (
          <div
            key={name}
            className="
              flex items-center gap-2
              px-4 py-2 rounded-md text-sm font-medium
              bg-neutral-900 text-white border border-neutral-800
              hover:bg-neutral-800
              dark:bg-neutral-100 dark:text-neutral-900 dark:border-neutral-300
              dark:hover:bg-white
              transition-colors
            "
          >
            <Icon className={className} aria-hidden="true" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
