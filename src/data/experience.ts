export interface Experience {
  title: string
  company: string
  location: string
  period: string
  type: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  description: string
}

export const experiences: Experience[] = [
  {
    title: 'Digital Transformation Specialist',
    company: 'Minet Uganda',
    location: 'Kampala, Uganda',
    period: '2023 - Present',
    type: 'Full-time',
    achievements: [
      'Led digital transformation initiatives resulting in 25% increase in operational efficiency',
      'Implemented automated workflow systems that reduced manual processing time by 60%',
      'Developed data integration solutions connecting multiple business systems',
      'Mentored teams on digital adoption and change management processes'
    ],
    technologies: ['Power BI', 'Python', 'SQL Server', 'Azure', 'PowerShell', 'Data Integration']
  },
  {
    title: 'IT Operations Engineer',
    company: 'Minet Uganda',
    location: 'Kampala, Uganda',
    period: '2021 - 2023',
    type: 'Full-time',
    achievements: [
      'Improved infrastructure reliability by 30% through proactive monitoring and maintenance',
      'Reduced system downtime by 45% by implementing automated backup solutions',
      'Provided technical support to 200+ users across multiple departments',
      'Conducted training sessions for 50+ employees on new systems and processes'
    ],
    technologies: ['Windows Server', 'Active Directory', 'Hyper-V', 'Veeam', 'PowerShell', 'SQL Server']
  },
  {
    title: 'Software Developer',
    company: 'Nmicros',
    location: 'Kampala, Uganda',
    period: '2020 - 2021',
    type: 'Full-time',
    achievements: [
      'Developed enterprise-grade applications using C# and .NET Framework',
      'Built automated workflow systems that reduced manual processing time by 60%',
      'Implemented database optimization strategies improving query performance by 40%',
      'Collaborated with cross-functional teams to deliver 5+ successful projects'
    ],
    technologies: ['C#', '.NET Framework', 'SQL Server', 'ASP.NET', 'JavaScript', 'HTML/CSS']
  }
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Information Systems',
    institution: 'Makerere University',
    location: 'Kampala, Uganda',
    period: '2016 - 2020',
    description: 'Focused on software development, database management, and information systems design'
  }
]

export const certifications: Certification[] = [
  {
    name: 'Huawei HCIA – Routing & Switching',
    issuer: 'Huawei Technologies',
    date: '2021',
    description: 'Certified in network routing and switching technologies'
  },
  {
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2022',
    description: 'Cloud computing fundamentals and Azure services'
  },
  {
    name: 'CompTIA A+',
    issuer: 'CompTIA',
    date: '2020',
    description: 'IT support and hardware troubleshooting'
  },
  {
    name: 'Google IT Support Certificate',
    issuer: 'Google',
    date: '2021',
    description: 'IT support fundamentals and customer service'
  }
]
