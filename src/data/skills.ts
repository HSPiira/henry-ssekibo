export interface Skill {
  name: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'C# / .NET Core' },
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'Python' },
      { name: 'Node.js' },
      { name: 'REST APIs' }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML / CSS' },
      { name: 'JavaScript' }
    ]
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'Windows Server' },
      { name: 'Active Directory' },
      { name: 'Hyper-V' },
      { name: 'Azure' },
      { name: 'PowerShell' },
      { name: 'Networking' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Power BI' },
      { name: 'Veeam Backup' },
      { name: 'VS Code' },
      { name: 'Jira' },
      { name: 'Docker' }
    ]
  }
]
