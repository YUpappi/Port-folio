export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  project: string;
  message: string;
}
