// resume.ts

export interface Resume {
    name: string;
    contact: Contact;
    summary: string;
    skills: Skill[];
    experiences: Experience[];
    education: Education[];
    projects: Project[];
    version: ResumeVersion;
}

export interface Contact {
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
}

export interface Experience {
    jobTitle: string;
    company: string;
    startDate: string; // YYYY-MM-DD format
    endDate?: string; // YYYY-MM-DD format or null
    description?: string;
}

export interface Education {
    degree: string;
    institution: string;
    graduationYear: number;
}

export interface Skill {
    skillName: string;
    proficiency: string; // e.g., "beginner", "intermediate", "advanced"
}

export interface Project {
    title: string;
    description: string;
    link?: string;
    technologies: string[];
}

export interface ResumeVersion {
    versionNumber: number;
    dateCreated: string; // YYYY-MM-DD format
    lastModified: string; // YYYY-MM-DD format
}