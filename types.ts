
export interface Skill {
  name: string;
  icon: string;
}

export interface CaseStudy {
  title: string;
  problem: string;
  solution: string[];
  result: string[];
}

export interface ServicePrice {
  name: string;
  description: string;
  features: string[];
  price: string;
}

export interface ProjectSample {
  type: string;
  name: string;
  status: string;
  link?: string;
}
