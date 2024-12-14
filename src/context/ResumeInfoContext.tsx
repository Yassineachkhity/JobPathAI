import { createContext } from "react";

// Define the types for the context data
interface Experience {
    id: number;
    title: string;
    companyName: string;
    city: string;
    state: string;
    startDate: string;
    endDate?: string;
    currentlyWorking: boolean;
    worksummary: string;
}

interface Education {
    id: number;
    universityName: string;
    startDate: string;
    endDate: string;
    degree: string;
    major: string;
    description: string;
}

interface Skill {
    id: number;
    name: string;
    rating: number;
}

export interface ResumeInfoType {
    firstName: string;
    lastName: string;
    jobTitle: string;
    address: string;
    phone: string;
    email: string;
    themeColor: string;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
}


type ResumeContextType = {
    resumeInfo: ResumeInfoType | null;
    setResumeInfo: React.Dispatch<React.SetStateAction<ResumeInfoType | null>>;
};

export const ResumeInfoContext = createContext<ResumeContextType | null>(null);

