export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  coverImage: string;
  category: string;

  overview: {
    problem: string;
    purpose: string;
  };

  responsibilities: string[];

  techStack: {
    frontend: string[];
    backend: string[];
    tools: string[];
    ai?: string[];
  };

  keyFeatures: Feature[];

  screenshots: Screenshot[];

  challenges: Challenge[];

  outcome: {
    type: string;
    metrics: string[];
  };

  futureImprovements: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Screenshot {
  url: string;
  caption: string;
}

export interface Challenge {
  challenge: string;
  learning: string;
}
