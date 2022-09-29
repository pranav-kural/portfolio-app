export interface ProjectsProp {
  projects: ProjectsContainer;
}

export interface ProjectsContainer {
  projects: ProjectObj[];
}

export interface ProjectObj {
  name: string;
  repo_url: string;
  site_url: string;
  languages: string[];
  category: string[];
  sub_categories: string[];
  screenshot: string;
  description: string;
}
