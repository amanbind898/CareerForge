// Resume data structure types for LaTeX template generation

export interface PersonalInfo {
  name: string;
  phone: string;
  email1: string;
  email2?: string;
  github?: string;
  linkedin?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  startYear: string;
  endYear: string;
}

export interface TechnicalSkills {
  programmingLanguages: string;
  frameworks: string;
  databases: string;
  developerTools: string;
  coursework: string;
}

export interface Project {
  id: string;
  title: string;
  technologies: string;
  year: string;
  links: string;
  description: string[];
}

export interface Certification {
  id: string;
  title: string;
  link: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  technicalSkills: TechnicalSkills;
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const DEFAULT_RESUME_DATA: ResumeData = {
  personalInfo: {
    name: 'John Doe',
    phone: '1234567890',
    email1: 'john.doe@email.com',
    email2: 'john.doe@university.edu',
    github: 'johndoe',
    linkedin: 'johndoe',
  },
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      score: '8.5',
      scoreType: 'CGPA',
      startYear: '2020',
      endYear: '2024'
    }
  ],
  technicalSkills: {
    programmingLanguages: 'C, C++, Python, JavaScript, Java',
    frameworks: 'React.js, Next.js, Node.js, Express.js, TailwindCSS',
    databases: 'MongoDB, PostgreSQL, MySQL, Redis',
    developerTools: 'Git, Docker, VS Code, Postman, Linux',
    coursework: 'Data Structures and Algorithms, Database Management Systems, Computer Networks, Software Engineering',
  },
  projects: [
    {
      id: '1',
      title: 'E-Commerce Web Application',
      technologies: 'React.js, Node.js, MongoDB, Express.js',
      year: '2024',
      links: 'GitHub | Live Demo',
      description: [
        'Built a full-stack e-commerce platform with user authentication and payment integration',
        'Implemented responsive design with modern UI/UX principles',
        'Deployed using Docker and managed CI/CD pipeline'
      ]
    }
  ],
  certifications: [
    {
      id: '1',
      title: 'AWS Certified Developer Associate',
      link: 'https://example.com/certificate'
    }
  ],
  achievements: [
    {
      id: '1',
      title: 'Competitive Programming',
      description: 'Solved 500+ problems on LeetCode, CodeChef, and Codeforces',
      year: '2023'
    }
  ],
};
