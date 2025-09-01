export interface TeamEntry {
    company: string;
    period?: string; 
    description: string;
    superscripts?: {
      text: string;
      position: number;
    }[];
  }
  
  export const teamData: TeamEntry[] = [
    {
      company: "Repixelx Studio",
      period: "2025",
      description: "Working as Senior Full-Stack Developer."
    },
    {
      company: "Agrofix",
      period: "2025",
      description: "Worked as Full-stack intern. i leanred to build full-stack features & helped to fix bugs."
    },
   
  ];