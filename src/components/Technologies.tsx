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
  SiPython,
  SiFastapi,
  SiSqlalchemy,
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
  SiPostgresql,
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
  | "python"
  | "fastapi"
  | "sqlalchemy"
  | "mongo"
  | "sql"
  | "postgresql"
  | "docker"
  | "vercel"
  | "git"
  | "github"
  | "jira"
  | "postman"
  | "rtl"
  | "npm";

/** Literal class names per token so Tailwind’s content scan keeps matching rules in production builds. */
const TECH_ICON_CLASS = {
  html: cn("technologies__icon", "technologies__icon--html"),
  css: cn("technologies__icon", "technologies__icon--css"),
  javascript: cn("technologies__icon", "technologies__icon--javascript"),
  typescript: cn("technologies__icon", "technologies__icon--typescript"),
  react: cn("technologies__icon", "technologies__icon--react"),
  next: cn("technologies__icon", "technologies__icon--next"),
  tailwind: cn("technologies__icon", "technologies__icon--tailwind"),
  mui: cn("technologies__icon", "technologies__icon--mui"),
  shadcn: cn("technologies__icon", "technologies__icon--shadcn"),
  storybook: cn("technologies__icon", "technologies__icon--storybook"),
  framer: cn("technologies__icon", "technologies__icon--framer"),
  three: cn("technologies__icon", "technologies__icon--three"),
  redux: cn("technologies__icon", "technologies__icon--redux"),
  node: cn("technologies__icon", "technologies__icon--node"),
  express: cn("technologies__icon", "technologies__icon--express"),
  python: cn("technologies__icon", "technologies__icon--python"),
  fastapi: cn("technologies__icon", "technologies__icon--fastapi"),
  sqlalchemy: cn("technologies__icon", "technologies__icon--sqlalchemy"),
  mongo: cn("technologies__icon", "technologies__icon--mongo"),
  sql: cn("technologies__icon", "technologies__icon--sql"),
  postgresql: cn("technologies__icon", "technologies__icon--postgresql"),
  docker: cn("technologies__icon", "technologies__icon--docker"),
  vercel: cn("technologies__icon", "technologies__icon--vercel"),
  git: cn("technologies__icon", "technologies__icon--git"),
  github: cn("technologies__icon", "technologies__icon--github"),
  jira: cn("technologies__icon", "technologies__icon--jira"),
  postman: cn("technologies__icon", "technologies__icon--postman"),
  rtl: cn("technologies__icon", "technologies__icon--rtl"),
  npm: cn("technologies__icon", "technologies__icon--npm"),
} satisfies Record<TechIconToken, string>;

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
  { name: "Python", Icon: SiPython, icon: "python" },
  { name: "FastAPI", Icon: SiFastapi, icon: "fastapi" },
  { name: "SQLAlchemy", Icon: SiSqlalchemy, icon: "sqlalchemy" },
  { name: "NodeJS", Icon: SiNodedotjs, icon: "node" },
  { name: "ExpressJS", Icon: SiExpress, icon: "express" },
  { name: "PostgreSQL", Icon: SiPostgresql, icon: "postgresql" },
  { name: "SQL", Icon: SiMysql, icon: "sql" },
  { name: "MongoDB", Icon: SiMongodb, icon: "mongo" },
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
            <Icon className={TECH_ICON_CLASS[icon]} aria-hidden="true" />
            <span className="technologies__chip-label">{name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
