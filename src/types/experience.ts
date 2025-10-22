export type ExperinceItem = {
  company: string;
  location: string;
  role: string;
  period: string;

  tech: string[];
  links?: Array<{ label: string; href: string }>;
  points: string[];

  work_arrangement:
    | "Full Time"
    | "Part Time"
    | "Working Student"
    | "Vollzeit"
    | "Teilzeit"
    | "Werkstudent";
  mode: "Remote" | "Hybrid" | "On-site";

  company_intro: string | string[];
  details: string | string[];
};
