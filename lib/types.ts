// Developer types matching Prisma schema
export type ExperienceLevel = 'JUNIOR' | 'MID' | 'SENIOR' | 'LEAD' | 'PRINCIPAL';
export type Availability = 'AVAILABLE_NOW' | 'AVAILABLE_2_WEEKS' | 'AVAILABLE_1_MONTH' | 'NOT_AVAILABLE';
export type WorkType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'FREELANCE';

export interface DeveloperProfile {
  id?: string;
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  timezone?: string;
  title: string;
  bio?: string;
  yearsOfExperience: number;
  experienceLevel: ExperienceLevel;
  skills: string[];
  primarySkills: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  availability: Availability;
  hourlyRate?: number;
  preferredWorkType: WorkType;
  isActive?: boolean;
  isAvailable?: boolean;
  profileComplete?: boolean;
}

export interface ClientInquiryData {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  inquiryType: 'HIRE_DEVELOPER' | 'PROJECT_CONSULTATION' | 'PARTNERSHIP' | 'GENERAL';
  message: string;
  budget?: string;
  timeline?: string;
  requiredSkills?: string[];
  experienceLevel?: ExperienceLevel;
  projectType?: string;
}

export interface DeveloperCardProps {
  developer: DeveloperProfile;
}

export interface FilterOptions {
  skills: string[];
  experienceLevel?: ExperienceLevel;
  availability?: Availability;
  workType?: WorkType;
}

// Technology stack options
export const TECH_STACKS = [
  'React',
  'React Native',
  'Node.js',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'Express',
  'NestJS',
  'GraphQL',
  'REST API',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'AWS',
  'Firebase',
  'Git',
  'Jest',
  'Cypress',
] as const;

export const EXPERIENCE_LEVELS = [
  { value: 'JUNIOR', label: 'Junior (0-2 years)' },
  { value: 'MID', label: 'Mid-Level (2-5 years)' },
  { value: 'SENIOR', label: 'Senior (5-10 years)' },
  { value: 'LEAD', label: 'Lead (10+ years)' },
  { value: 'PRINCIPAL', label: 'Principal/Architect' },
] as const;

export const AVAILABILITY_OPTIONS = [
  { value: 'AVAILABLE_NOW', label: 'Available Now' },
  { value: 'AVAILABLE_2_WEEKS', label: 'Available in 2 Weeks' },
  { value: 'AVAILABLE_1_MONTH', label: 'Available in 1 Month' },
  { value: 'NOT_AVAILABLE', label: 'Not Available' },
] as const;

export const WORK_TYPE_OPTIONS = [
  { value: 'FULL_TIME', label: 'Full-Time' },
  { value: 'PART_TIME', label: 'Part-Time' },
  { value: 'CONTRACT', label: 'Contract' },
  { value: 'FREELANCE', label: 'Freelance' },
] as const;
