export type ProjectItem = {
  id: number;
  blurb: string;
  title: string;
  shortDescription: string;

  /** Main showcase image */
  image?: string;
  imageAlt?: string;

  features?: string[];

  extraImages?: string[];

  tech: string[];

  /** Optional GitHub repository link */
  github?: string;

  /** Optional live demo link */
  demo?: string;
};
