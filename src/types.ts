export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  topics: string[];
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
  } | null;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Full-Stack' | 'AI & ML' | 'Frontend' | 'Mobile & Tools';
  stats?: {
    stars?: number;
    forks?: number;
  };
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // percentage (e.g. 90)
    icon?: string;
  }[];
}
