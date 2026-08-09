/**
 * Career history, education and certifications.
 *
 * Synced against "Henry Ssekibo - CV 2026.pdf". A recruiter reading both in
 * adjacent tabs is the audience, so dates, titles, employers and technologies
 * match the CV exactly.
 *
 * Certifications list only credentials actually held or actively in progress.
 * Where the CV states no award year, none is shown rather than invented.
 */

export interface Experience {
  title: string
  company: string
  location: string
  start: string
  /** Omitted for a single-period engagement, where only `start` is shown. */
  end?: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  degree: string
  /** Omitted rather than guessed when the CV does not name one. */
  institution?: string
  location?: string
  period: string
  status: 'completed' | 'in-progress'
  description?: string
}

export interface Certification {
  name: string
  issuer: string
  /** A year, when the CV states one. */
  date?: string
  status: 'held' | 'in-progress'
}

export const experiences: Experience[] = [
  {
    // Not on the 2026 CV. Added from Henry's own account of the engagement.
    // TODO: confirm the platform tags below, which read "domain" as Windows
    // Server plus Active Directory.
    title: 'Infrastructure Consultant',
    company: 'Meridian Health Services',
    location: 'Uganda',
    start: '1 to 2 August 2026',
    achievements: [
      'Deployed the domain infrastructure for a healthcare provider, from the server environment through to directory services.',
      'Built out the thin client architecture on DELL Wyse 3040 endpoints, configuring device and session access for end users.',
      'Configured the environment end to end and handed it over running, with no ongoing dependency on me to keep it up.',
    ],
    technologies: [
      'Windows Server',
      'Active Directory',
      'Thin client architecture',
      'DELL Wyse 3040',
    ],
  },
  {
    title: 'Digital Transformation Specialist',
    company: 'Minet Uganda Insurance Brokers Limited',
    location: 'Kampala, Uganda',
    start: 'May 2023',
    end: 'Present',
    achievements: [
      'Engineered TaskMaster, a .NET 9 Worker Service running thirteen schedulable alert services across 3,000+ active insurance policies in multiple markets, with a Next.js operations dashboard, reducing manual processing time by 40%.',
      'Architected and delivered the EAP Enterprise Portal, a multi-tenant employee assistance platform on FastAPI and PostgreSQL with a React front end, Microsoft Entra single sign-on, encrypted records and a full audit trail, now in active use across the HR and Wellness team.',
      'Leading the organisation-wide AI adoption programme since March 2026: authored the proposal to EXCO, audited company manuals and policies to identify the processes that benefit most from AI, and am currently running user training.',
      'Developed Power BI executive dashboards for KPI tracking, contract management and operational insight, used directly by C-level stakeholders for strategic and financial decisions.',
      'Performed IRA regulatory data mining and analysis that met government submission deadlines and prevented material financial penalties to the organisation.',
      'Designed medical utilisation and EAP dashboards for insurer clients, supporting data-driven claims analysis and wellness programme reporting.',
      'Built REST APIs and VM performance monitoring tools, improving system observability and reducing mean incident response time.',
      'Led migration of legacy infrastructure to Windows Server 2019, improving reliability by 30%, and administered the full Azure environment including Azure VPN, Veeam backup, Hyper-V virtualisation, ESET endpoint security and FortiClient perimeter access.',
      'Configured and rolled out Sage People 300 and maintained the Mimi/eGlobal integration ecosystem, including EFRIS compliance monitoring and bi-weekly OFAC screening.',
    ],
    technologies: [
      '.NET 9',
      'C#',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Oracle',
      'Next.js',
      'React',
      'Azure Entra',
      'Power BI',
    ],
  },
  {
    title: 'IT Operations Engineer',
    company: 'Minet Uganda Insurance Brokers Limited',
    location: 'Kampala, Uganda',
    start: 'April 2021',
    end: 'May 2023',
    achievements: [
      'Provided Tier 2/3 technical support and led infrastructure upgrades across the organisation, maintaining 99%+ system uptime for 40+ staff on Microsoft 365, Active Directory and all internal business tools.',
      'Managed server patching cycles, automated Veeam backups and system health monitoring using Hyper-V virtualisation across production and virtual environments.',
      'Reduced electricity costs by 7% by implementing interactive monitoring and reporting dashboards that tracked utilisation trends and exposed waste.',
      'Enforced BitLocker, ESET, OneDrive and FortiClient security standards across all 40+ end-user devices, achieving full endpoint compliance.',
      'Led domain migration, new virtual server environment setup and rollout.',
    ],
    technologies: [
      'Windows Server',
      'Active Directory',
      'Hyper-V',
      'Veeam',
      'Microsoft 365',
      'ESET',
      'FortiClient',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Next Micro Solutions Ltd (Nmicros)',
    location: 'Kampala, Uganda',
    start: 'January 2020',
    end: 'September 2021',
    achievements: [
      'Built and deployed a production Health Information Management System with integrated payment gateways across multiple healthcare facilities, handling patient records, billing and clinical workflows.',
      'Led daily stand-ups, coordinated QA cycles and contributed to backend .NET feature development as part of a cross-functional delivery team.',
      'Delivered end-user training for insurance staff on the deployed system and provided post-launch technical support.',
    ],
    technologies: ['.NET', 'C#', 'SQL Server', 'Payment gateways'],
  },
]

export const education: Education[] = [
  {
    degree: "Master's in Data Science",
    // The CV names no institution for this. Add it here before deploying.
    period: 'In progress',
    status: 'in-progress',
    description:
      'Taken alongside full-time work, to deepen capability in AI-driven process automation and predictive analytics.',
  },
  {
    degree: 'Bachelor of Science in Information Systems',
    institution: 'Makerere University',
    location: 'Kampala, Uganda',
    period: '2016 to 2019',
    status: 'completed',
  },
]

export const certifications: Certification[] = [
  {
    name: 'Huawei Certified ICT Associate (HCIA): Routing & Switching',
    issuer: 'Huawei Technologies',
    status: 'held',
  },
  {
    name: 'AZ-204 Developing Solutions for Microsoft Azure',
    issuer: 'Microsoft',
    date: 'In progress',
    status: 'in-progress',
  },
  {
    name: 'PL-300 Power BI Data Analyst',
    issuer: 'Microsoft',
    date: 'In progress',
    status: 'in-progress',
  },
]
