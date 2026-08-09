/**
 * Selected work.
 *
 * Stacks and technical detail are taken from the source repositories, which
 * are the ground truth:
 *   TaskMaster  /Users/piira/Developer/minet/taskmaster
 *   Evexía      /Users/piira/Developer/sandbox/eap
 *   Timeline    /Users/piira/Developer/sandbox/infra
 *
 * NOTE: the 2026 CV disagrees with the code on all three, and the code is
 * right. The CV lists TaskMaster as "SQL Server, Azure" (it is PostgreSQL and
 * Oracle), and both Evexía and Timeline as ".NET / SQL Server" (both are
 * Python and FastAPI). The CV needs updating to match this file.
 *
 * Two rules this file enforces by shape rather than by discipline:
 *
 * 1. `links` is a list. A private system has an empty list, so the UI renders
 *    no button at all. There is no way to express "a link that goes nowhere".
 * 2. Every project here has been built. Concepts and unstarted ideas do not
 *    belong on a portfolio; they make the real work look less real.
 */

export type ProjectStatus = 'shipped' | 'in-progress'

export interface ProjectLink {
  label: string
  href: string
}

export interface Outcome {
  value: string
  label: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  /** Where it was built, e.g. "Minet Uganda". */
  context: string
  /** Period. Omitted when there is no reliable one. */
  year?: string
  status: ProjectStatus
  /** Drives the "Private system" badge and the absence of links. */
  access: 'public' | 'private'
  role: string
  stack: string[]
  /** Heading over `stack`. Not every piece of work is described by a tech list. */
  stackLabel?: string
  image?: string
  links: ProjectLink[]
  /** One or two sentences for the card. */
  summary: string
  /** Case study body. */
  problem: string
  approach: string[]
  outcomes: Outcome[]
  notes?: string
}

export const projects: Project[] = [
  {
    slug: 'taskmaster',
    title: 'TaskMaster',
    tagline: 'Multi-market insurance automation across 3,000+ active policies',
    context: 'Minet Uganda',
    year: '2023 to present',
    status: 'shipped',
    access: 'private',
    role: 'Sole engineer: architecture, build, deployment, operation',
    stack: [
      '.NET 9',
      'C#',
      'EF Core',
      'PostgreSQL',
      'Oracle',
      'Next.js 16',
      'React 19',
      'Azure Entra',
    ],
    image: '/taskmaster.png',
    links: [],
    summary:
      'A .NET 9 worker service running thirteen independently schedulable alert services, paired with a Next.js dashboard that lets operations staff edit email templates and watch every run. It replaced a manual daily process.',
    problem:
      'Policy renewal alerts, claims notifications and finance reports were driven by hand across more than 3,000 active policies, in more than one country. The review was daily, it was somebody’s morning, and a missed date carried real cost: lapsed cover for the client, a remediation conversation for the brokerage. Worse, the parts that had been automated were opaque. When something did not send, nobody could say whether it had failed, been skipped, or never been configured in the first place.',
    approach: [
      'Split the work into thirteen independently schedulable services covering renewals (daily, monthly, group life, one-off), claims, revenue, allocation, aged debtors, income summaries and access reviews, so one failing job cannot take the rest down with it.',
      'Gave every service a prerequisite gate that blocks execution and raises a structured warning to the dashboard when it is not fully configured, which turns a silent 3am no-op into a visible, actionable state.',
      'Moved all client-facing email copy into Fluid (Liquid) templates stored in PostgreSQL, editable live through a split-pane CodeMirror editor with auto-updating preview, so operations changes wording without a deployment or an engineer.',
      'Built a durable PostgreSQL-backed outbox for renewal reminders that retries transient Microsoft Graph failures, enforces a TTL, and supports manual approval before anything reaches a client.',
      'Scoped every database query and API call by tenant, with country-specific configuration for Uganda and Zambia, so opening a new market is configuration rather than a fork.',
      'Logged every run with status, duration, row counts and error detail, surfaced in the dashboard as per-service health cards with live readiness checks.',
      'Kept the layering strict: the Core and Application projects carry no infrastructure dependencies, so the domain is testable without a database, and covered both the worker and the API with xUnit suites.',
    ],
    outcomes: [
      { value: '3,000+', label: 'Active policies under continuous monitoring' },
      { value: '40%', label: 'Reduction in manual processing time' },
      { value: '13', label: 'Independently schedulable alert services' },
    ],
    notes:
      'Built and operated inside Minet Uganda. The source is not public and no demo can be shared: it runs against live client policy data.',
  },
  {
    slug: 'eap-enterprise-portal',
    title: 'EAP Enterprise Portal',
    tagline: 'Multi-tenant employee assistance platform, confidential by construction',
    context: 'Minet Uganda',
    year: '2023 to present',
    status: 'shipped',
    access: 'private',
    role: 'Architect and lead engineer: design, delivery, rollout',
    stack: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'React',
      'TanStack Start',
      'TypeScript',
      'Tailwind CSS',
    ],
    image: '/eap.png',
    links: [],
    summary:
      'Evexía, a multi-tenant platform managing employee assistance programmes end to end: clients, contracts, sessions, documents and KPIs, with isolated data per organisation. In active use across the HR and Wellness team.',
    problem:
      'An employee assistance programme has two audiences whose needs pull against each other. Counsellors need session records to do their work. Executives need utilisation numbers to justify the spend. Serve both from one unguarded view and the confidentiality the service depends on is gone, which is the fastest way to make staff stop using it. Add multiple client organisations to the same deployment and the isolation question stops being a preference and becomes the whole design.',
    approach: [
      'Made tenancy a property of the data model rather than a filter applied later, so each client organisation’s records are isolated by construction instead of by remembering to add a WHERE clause.',
      'Separated the codebase into domain, application and infrastructure layers, with entities, value objects, events and repositories in the domain, so the access rules live in one reviewable place.',
      'Wired single sign-on through Microsoft Entra using MSAL, so access follows the organisation’s existing directory rather than a second set of credentials to manage and revoke.',
      'Modelled the full programme rather than just bookings: organisational clients with hierarchy, employees and their dependents, service providers, contracts with billing and renewals, a service catalogue, sessions and scheduling.',
      'Added document management with versioning, and sanitised all untrusted HTML on the way in, so uploaded and authored content cannot become an injection path.',
      'Kept a complete audit trail over access to sensitive records, so any later compliance question about who saw what has an answer.',
      'Built the whole request path async, FastAPI through SQLAlchemy to asyncpg, and ran accessibility assertions in the front-end test suite rather than treating them as a launch checklist.',
    ],
    outcomes: [
      { value: 'Multi-tenant', label: 'Isolated data per client organisation' },
      { value: 'Entra SSO', label: 'Access follows the existing directory' },
      { value: 'In active use', label: 'Across the HR and Wellness team' },
    ],
    notes:
      'Built for Minet Uganda. Private repository, and the running instance holds confidential wellness records, so it cannot be demonstrated.',
  },
  {
    // Not on the 2026 CV. Added from Henry's own account of the programme.
    slug: 'ai-adoption-programme',
    title: 'AI Adoption Programme',
    tagline: 'From EXCO proposal to organisation-wide user training',
    context: 'Minet Uganda',
    year: 'March 2026 to present',
    status: 'in-progress',
    access: 'private',
    role: 'Programme lead: proposal, process discovery, training',
    stackLabel: 'Scope',
    stack: [
      'Executive proposal',
      'Policy & manual audit',
      'Process discovery',
      'User training',
    ],
    image: '/ai-programme.png',
    links: [],
    summary:
      'An organisation-wide programme to work out where AI actually helps. It started as a proposal to the executive committee in March 2026, became an audit of company manuals and policies, and is now in user training.',
    problem:
      'AI arrives in an organisation as pressure rather than as a plan. Everyone has heard it changes everything, nobody can say which of their own processes it should touch, and the default outcome is a tool that gets bought, announced, and quietly unused. The first question worth answering is not which model to adopt. It is which of our processes would genuinely be better with AI in them, and which only look like they would.',
    approach: [
      'Wrote the proposal to EXCO, making the case at executive level before any tooling decision, so the programme had a mandate rather than a champion.',
      'Audited the organisation’s manuals and policies as the source of truth for how work is actually specified, rather than relying on how teams describe it in a workshop.',
      'Identified the processes where AI carries real benefit and, just as usefully, the ones where it does not, so effort concentrates where it pays back.',
      'Moved to user training, on the view that adoption fails at the desk rather than in the architecture.',
    ],
    outcomes: [
      { value: 'EXCO', label: 'Programme mandated at executive level' },
      { value: 'Org-wide', label: 'Manuals and policies audited for AI-suitable processes' },
      { value: 'In training', label: 'Currently rolling out to users' },
    ],
    notes:
      'An internal programme at Minet Uganda, currently in progress. The specific processes identified are not public.',
  },
  {
    slug: 'timeline',
    title: 'Timeline',
    tagline: 'Multi-tenant event sourcing with tamper-evident history',
    context: 'Personal project',
    status: 'in-progress',
    access: 'public',
    role: 'Author',
    stack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Redis',
      'JSON Schema',
      'OpenTelemetry',
      'React',
    ],
    image: '/timeline.png',
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/hspiira/timeline' },
    ],
    summary:
      'An event sourcing API where history is hash-chained and countersigned by an RFC 3161 timestamp authority, so records are not merely immutable by policy but tamper-evident to a third party.',
    problem:
      'Insurance and compliance systems get asked backward-looking questions constantly. What did this policy look like in March? Who changed the sum insured, and on whose authority? Systems that store current state and overwrite it cannot answer those questions, and bolting an audit log onto a mutable table produces two sources of truth that disagree under pressure. There is a harder version of the problem too: an audit trail your own database administrator can rewrite is not evidence, it is a claim.',
    approach: [
      'Made events the only way state changes, and derived current state from the event stream, which removes the class of bug where the log and the table disagree.',
      'Hash-chained the event history so each record commits to the one before it, making any retrospective edit detectable rather than merely discouraged.',
      'Submitted the chain tip to an RFC 3161 timestamp authority and stored the returned token, so the history carries third-party proof of when it existed, independent of anyone holding database credentials.',
      'Validated the event taxonomy with JSON Schema, keeping the domain extensible without letting it drift into untyped dictionaries.',
      'Enforced tenancy in the domain layer, keeping entities and value objects free of persistence concerns so the rules stay testable without a database.',
      'Instrumented the whole path with OpenTelemetry across FastAPI, SQLAlchemy and Redis, exporting over OTLP, so a slow request can be traced rather than guessed at.',
      'Put a React front end over it so non-technical users can follow a subject’s history without reading the schema.',
    ],
    outcomes: [
      { value: 'RFC 3161', label: 'History countersigned by a timestamp authority' },
      { value: 'Full replay', label: 'Any historical state reconstructable from events' },
      { value: 'Public', label: 'Source available on GitHub' },
    ],
    notes:
      'An active personal project. Reading the code is the fastest way to see how I think about domain modelling.',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
