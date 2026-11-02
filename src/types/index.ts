export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface PinLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  university: string;
  chapterName: string;
  membersCount: string;
  status: string;
  isMainHub?: boolean;
  activeBootcamps: number;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export interface TrackItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  technologies: string[];
  color: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Cloud' | 'AI' | 'Mobile' | 'DevOps' | 'Hackathon';
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  speaker: string;
  speakerRole: string;
  description: string;
  spotsLeft: number;
  totalSpots: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  color: string;
}
