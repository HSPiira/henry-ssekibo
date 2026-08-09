/**
 * Capabilities.
 *
 * Grounded in the CV's twenty core competencies, corrected against the source
 * repositories where the two disagree. The CV lists "SQL Server" and "Prisma";
 * the shipped systems use PostgreSQL, Oracle, SQLAlchemy and EF Core. Where
 * only the CV supports an item, it stays; where the code contradicts it, the
 * code wins.
 */

export interface SkillGroup {
  title: string
  /** One line on what this group is actually for. */
  note: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend & services',
    note: 'Where most of my production work lives.',
    items: [
      'C# / .NET 9',
      'Python',
      'FastAPI',
      'ASP.NET Core',
      '.NET Worker Services',
      'REST API design',
      'Domain-driven design',
      'Event sourcing',
    ],
  },
  {
    title: 'Data',
    note: 'Modelling it, moving it, reporting on it.',
    items: [
      'PostgreSQL',
      'Oracle',
      'SQL / T-SQL',
      'EF Core',
      'SQLAlchemy',
      'Redis',
      'Power BI',
      'Data warehousing',
    ],
  },
  {
    title: 'Product surfaces',
    note: 'The interfaces people actually use.',
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'TanStack Start',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Cloud & infrastructure',
    note: 'Six years of keeping systems up.',
    items: [
      'Microsoft Azure',
      'Azure Entra ID',
      'Windows Server',
      'Active Directory',
      'Hyper-V / VMware',
      'Veeam backup',
      'Docker',
      'OpenTelemetry',
    ],
  },
  {
    title: 'Domain & operations',
    note: 'The context the systems are built for.',
    items: [
      'Insurance domain',
      'Process automation',
      'AI adoption programmes',
      'IRA regulatory reporting',
      'EFRIS compliance',
      'OFAC screening',
      'Sage People 300',
    ],
  },
]
