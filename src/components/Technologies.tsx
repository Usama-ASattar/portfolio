import { Section } from "./index";
import type { UIStrings } from "../types";
import type { IconType } from "react-icons";
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
import { cn } from "../utils/classNames";

type TechIconToken =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "next"
  | "tailwind"
  | "mui"
  | "shadcn"
  | "storybook"
  | "framer"
  | "three"
  | "redux"
  | "node"
  | "express"
  | "mongo"
  | "sql"
  | "docker"
  | "vercel"
  | "git"
  | "github"
  | "jira"
  | "postman"
  | "rtl"
  | "npm";

type TechItem = {
  name: string;
  Icon: IconType;
  icon: TechIconToken;
};

const techStack: TechItem[] = [
  { name: "HTML", Icon: SiHtml5, icon: "html" },
  { name: "CSS", Icon: SiCss3, icon: "css" },
  { name: "JavaScript", Icon: SiJavascript, icon: "javascript" },
  { name: "TypeScript", Icon: SiTypescript, icon: "typescript" },
  { name: "ReactJS", Icon: SiReact, icon: "react" },
  { name: "NextJS", Icon: SiNextdotjs, icon: "next" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, icon: "tailwind" },
  { name: "Material UI", Icon: LuPackage, icon: "mui" },
  { name: "shadcn/ui", Icon: SiShadcnui, icon: "shadcn" },
  { name: "Storybook", Icon: SiStorybook, icon: "storybook" },
  { name: "Framer Motion", Icon: SiFramer, icon: "framer" },
  { name: "Three.js", Icon: SiThreedotjs, icon: "three" },
  { name: "Redux", Icon: SiRedux, icon: "redux" },
  { name: "NodeJS", Icon: SiNodedotjs, icon: "node" },
  { name: "ExpressJS", Icon: SiExpress, icon: "express" },
  { name: "MongoDB", Icon: SiMongodb, icon: "mongo" },
  { name: "SQL", Icon: SiMysql, icon: "sql" },
  { name: "Docker", Icon: SiDocker, icon: "docker" },
  { name: "Vercel", Icon: SiVercel, icon: "vercel" },
  { name: "Git", Icon: SiGit, icon: "git" },
  { name: "GitHub", Icon: SiGithub, icon: "github" },
  { name: "Jira", Icon: SiJirasoftware, icon: "jira" },
  { name: "Postman", Icon: SiPostman, icon: "postman" },
  { name: "React Testing Library", Icon: SiTestinglibrary, icon: "rtl" },
  { name: "npm", Icon: SiNpm, icon: "npm" },
];

type TechnologiesProps = { t: UIStrings };

export function Technologies({ t }: TechnologiesProps) {
  return (
    <Section id="tech" title={t.techTitle} subtitle={t.techLead}>
      <div className="technologies__list">
        {techStack.map(({ name, Icon, icon }) => (
          <div key={name} className="technologies__chip">
            <Icon
              className={cn("technologies__icon", `technologies__icon--${icon}`)}
              aria-hidden="true"
            />
            <span className="technologies__chip-label">{name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
