export interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  features: string[]
  github: string
  demo: string
  image: string
  status: 'completed' | 'development' | 'concept'
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TaskMaster",
    description: "Automated insurance workflow alert system that monitors policy deadlines and sends notifications.",
    fullDescription: "TaskMaster is a .NET Worker Service that automates insurance workflow alerts. It monitors policy deadlines, claim events, and client notifications across multiple tenants, sending configurable alerts via email and SMS. The system includes dynamic templates, comprehensive logging, and audit trails to ensure no critical deadlines are missed, improving operational efficiency and reliability.",
    technologies: ["C#", ".NET Core", "Oracle SQL", "PostgreSQL", "PowerShell (optional scripting)"],
    features: [
      "Automated policy deadline and event monitoring",
      "Multi-channel notification system (Email, SMS) with dynamic templates",
      "Tenant-aware scheduling and alert escalation paths",
      "Comprehensive logging, auditing, and observability",
      "Integration with internal policy and client management systems",
      "Background worker service for reliable, asynchronous execution"
    ],
    github: 'Private / minet_uganda repo',
    demo: 'Internal use only',
    image: '/taskmaster.jpg',
    status: 'completed'
  },
  {
    id: 2,
    title: "Timeline",
    description: "Event-centric system for modeling subjects, events, and their relationships over time.",
    fullDescription:
      "Timeline is a domain-driven platform for modeling real-world entities as subjects and capturing all changes as immutable events. It enables clear historical reconstruction, relationship tracking, and auditability across complex domains such as insurance, contracts, policies, payments, and claims. The system emphasizes correctness, traceability, and simplicity for non-technical users while preserving strong domain rules under the hood.",
    technologies: ["Python", "PostgreSQL", "SQLite", "JSON Schema"],
    features: [
      "Subject-based domain modeling (clients, policies, payments, claims, etc.)",
      "Immutable event timeline with full historical reconstruction",
      "Explicit subject-to-subject relationship modeling",
      "Audit-first design with timestamps, actors, and event types",
      "State transitions derived from events, not mutable records",
      "Extensible event taxonomy with validation rules",
      "Separation of domain logic from persistence and presentation",
      "Designed for clarity and usability by non-technical users"
    ],
    github: 'https://github.com/HSPiira/timeline.git',
    demo: 'None',
    image: '/timeline.jpg',
    status: 'concept'
  },
  {
    id: 3,
    title: "Employee Assistance Program",
    description: "Enterprise-grade mental wellness portal with secure authentication, scheduling, and analytics.",
    fullDescription: "A comprehensive mental wellness portal built with Next.js and Prisma, designed for enterprise use. The system supports secure user authentication, role-based access, appointment scheduling, and calendar integration. It also includes detailed reporting and analytics dashboards for tracking utilization and outcomes. Designed to be mobile-responsive with dark mode, the platform enables organizations to provide confidential, accessible, and modern mental health support to employees.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Upstash Redis"],
    features: [
      "Secure user authentication with role-based access control",
      "Appointment scheduling and calendar integration",
      "Comprehensive reporting and analytics dashboards",
      "Audit trail and encrypted data handling for confidentiality",
      "Configurable client onboarding workflows and parameters",
      "Integration with internal organizational systems for seamless data flow"
    ],
    github: 'Private / minet_ug repo',
    demo: 'Internal use only',
    image: '/eap.jpg',
    status: 'completed'
  },
  {
    id: 4,
    title: 'VM Management Tool',
    description: 'PowerShell-based virtualization management tool for Hyper-V environments.',
    fullDescription: 'A PowerShell-based virtualization management tool for Hyper-V environments, automating VM provisioning, monitoring, and backup operations. Designed to streamline infrastructure management and improve operational efficiency.',
    technologies: ['PowerShell', 'Hyper-V', 'Windows Server', 'Veeam'],
    features: [
      'Automated VM provisioning and configuration',
      'Resource monitoring and alerting',
      'Automated backup scheduling',
      'Performance optimization recommendations'
    ],
    github: '#',
    demo: '#',
    image: '',
    status: 'concept'
  },
  {
    id: 5,
    title: 'Asset Register',
    description: 'Personal finance management application with expense categorization and budget tracking.',
    fullDescription: 'A personal finance management application with expense categorization, budget tracking, and financial insights dashboard. Built with Next.js and TypeScript, it helps users manage their finances effectively.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Chart.js'],
    features: [
      'Expense categorization and tagging',
      'Budget tracking and alerts',
      'Financial insights and trends',
      'Export capabilities for tax purposes'
    ],
    github: '#',
    demo: '#',
    image: '',
    status: 'concept'
  },
  {
    id: 6,
    title: 'HMS Ultra',
    description: 'Comprehensive hospital management system concept with patient records and appointment scheduling.',
    fullDescription: 'A comprehensive hospital management system concept featuring patient records, appointment scheduling, billing, and inventory management. Designed to streamline healthcare operations and improve patient care delivery.',
    technologies: ['C#', '.NET Framework', 'SQL Server', 'Crystal Reports'],
    features: [
      'Patient registration and medical records',
      'Appointment scheduling system',
      'Billing and insurance management',
      'Inventory and pharmacy management'
    ],
    github: '#',
    demo: '#',
    image: '/hms.jpg',
    status: 'development'
  }
]
