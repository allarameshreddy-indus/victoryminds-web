export const company = {
  name: 'Victory Minds',
  tagline: 'We for all…',
  founded: 2010,
  email: 'info@victoryminds.com',
  phone: '+91-9030589639',
  phoneHref: 'tel:+919030589639',
  emailHref: 'mailto:info@victoryminds.com',
  address: 'Plot #260, Krishi Allure, Kavuri Hills, Hyderabad — 500081',
  site: 'https://victoryminds.in/',
}

export const socials = [
  { name: 'X', href: 'https://x.com/victoryminds', icon: 'x' },
  { name: 'Facebook', href: 'https://www.facebook.com/victorymindsin/', icon: 'facebook' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/victorymindsin/home/', icon: 'linkedin' },
  { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=919030589639', icon: 'whatsapp' },
]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/technologies', label: 'Technologies' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export const values = [
  {
    title: 'Clarity before code',
    body: 'We spend time on the business problem, the user, and the constraint. Architecture follows that conversation — not a fashionable stack.',
  },
  {
    title: 'Craft in the delivery',
    body: 'Reviewed code, visible progress, and environments stakeholders can actually use. Shipping is a habit, not a ceremony at the end.',
  },
  {
    title: 'Security as a default',
    body: 'Identity, encryption, least privilege, and secrets kept out of source. Protection is designed with the first story, not patched in at launch.',
  },
  {
    title: 'Systems that can grow',
    body: 'Cloud-native foundations and modular services so a successful pilot is not thrown away when traffic, teams, or markets expand.',
  },
  {
    title: 'Honest partnership',
    body: 'Direct communication, realistic estimates, and a team that stays after go-live — to operate, improve, and hand over when you are ready.',
  },
  {
    title: 'Local depth, wide reach',
    body: 'A Hyderabad IT studio that designs software for Indian networks and operations — and for clients who sell beyond them.',
  },
]

export const capabilities = [
  {
    title: 'Custom software',
    body: 'Web applications and enterprise portals shaped around your workflows — not a template you have to live around.',
  },
  {
    title: 'Mobile app development',
    body: 'iOS and Android applications with store-ready quality: offline behaviour, push, payments, and the APIs your software actually needs.',
  },
  {
    title: 'IT services',
    body: 'Integration, application support, and managed delivery so the software we build — or the systems you already run — stays healthy.',
  },
  {
    title: 'Cloud platforms',
    body: 'Azure, AWS, and GCP for hosting, identity, data, and scale — designed for cost as well as uptime.',
  },
  {
    title: 'Data & intelligence',
    body: 'Pipelines, warehouses, and dashboards that turn operational noise into decisions your teams can act on the same week.',
  },
  {
    title: 'DevOps & quality',
    body: 'CI/CD, automated tests, observability, and release discipline so updates land without drama.',
  },
]

export const services = [
  {
    slug: 'custom-software',
    title: 'Custom software development',
    kicker: 'From brief to production',
    summary:
      'End-to-end software engineering — discovery, experience, architecture, build, launch, and iteration — so what ships is what the business actually needs.',
    image: '/photos/team.jpg',
    details: [
      'Discovery workshops that define users, jobs-to-be-done, and a release plan you can fund with confidence.',
      'Experience design for web and mobile: information architecture, interface systems, and prototypes teams can build from.',
      'Full-stack engineering of MVPs and production platforms — APIs, data models, admin consoles, and customer-facing applications.',
      'Release engineering, analytics, and a backlog cadence so the software keeps improving after the first launch.',
    ],
    stack: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Azure / AWS', 'Figma'],
  },
  {
    slug: 'it-services',
    title: 'IT services',
    kicker: 'Support, integration & delivery',
    summary:
      'Software is only useful if it stays reliable. We integrate systems, support production applications, and run delivery so your IT team is not left holding a black box.',
    image: '/photos/support.jpg',
    details: [
      'Application support and incident response for software we built — or systems you already operate.',
      'API and system integration across ERPs, CRMs, payments, identity, and internal tools.',
      'Cloud operations: environments, monitoring, backups, and cost-aware hosting on Azure, AWS, or GCP.',
      'Dedicated or co-sourced engineering capacity when you need more delivery without hiring a whole department.',
    ],
    stack: ['Azure', 'AWS', 'APIs', 'Monitoring', 'ITIL-style support', 'CI/CD'],
  },
  {
    slug: 'ios',
    title: 'iOS app development',
    kicker: 'Native Apple software',
    summary:
      'Swift-built software for iPhone and iPad — fast, accessible, and ready for TestFlight and the App Store.',
    image: '/photos/ios.jpg',
    details: [
      'Native Swift and SwiftUI, with UIKit where it still earns its place.',
      'Secure auth, push, offline caches, and deep links that behave like a first-class iOS citizen.',
      'App Store submission, TestFlight programmes, and versioning that respects review cycles.',
      'Integration with existing APIs, payments, maps, Health, and enterprise MDM when required.',
    ],
    stack: ['Swift', 'SwiftUI', 'UIKit', 'TestFlight', 'Core Data', 'REST / GraphQL'],
  },
  {
    slug: 'android',
    title: 'Android app development',
    kicker: 'Play Store software',
    summary:
      'Kotlin applications that feel native across the Android family — phones, tablets, and the OEM variations your users actually own.',
    image: '/photos/android.jpg',
    details: [
      'Modern Android with Kotlin, Jetpack Compose, and Material Design 3 patterns.',
      'Background work, notifications, and storage designed for battery and data limits in India and global markets.',
      'Play Console releases, staged rollouts, crash telemetry, and device-lab QA.',
      'Shared application logic with iOS where it helps — without forcing a lowest-common-denominator interface.',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Play Console', 'Firebase', 'Room'],
  },
  {
    slug: 'application-development',
    title: 'Application development',
    kicker: 'Web & enterprise',
    summary:
      'Business applications, customer portals, and internal tools with clear domains, audit-friendly data, and interfaces people will actually use.',
    image: '/photos/dashboard.jpg',
    details: [
      'Role-based web applications for operations, finance, HR, and customer self-service.',
      'API design and integration with existing ERPs, CRMs, payment rails, and identity providers.',
      'Performance, accessibility, and browser coverage as part of the same pipeline as features.',
      'Handover packs: runbooks, environments, and knowledge transfer for your internal team.',
    ],
    stack: ['React', 'TypeScript', 'Java', 'Python', 'SQL', 'REST'],
  },
  {
    slug: 'ai-ml',
    title: 'AI & machine learning',
    kicker: 'Intelligence in the software',
    summary:
      'Practical models and copilots inside real workflows — predictions, classification, retrieval, and automation with human review where it matters.',
    image: '/photos/ai.jpg',
    details: [
      'Use-case framing so AI is a feature with a metric, not a slide with a demo.',
      'Data preparation, evaluation, and monitoring so models do not silently drift.',
      'Retrieval-augmented assistants grounded in your documents and systems of record.',
      'Responsible defaults: audit logs, fallbacks, and a person in the loop for high-stakes actions.',
    ],
    stack: ['Python', 'PyTorch', 'Azure OpenAI', 'Vector search', 'MLOps', 'LangChain'],
  },
]

export const developmentPractices = [
  {
    title: 'Discovery before code',
    body: 'Workshops, journey maps, and a thin architecture sketch prevent expensive rebuilds later.',
  },
  {
    title: 'Architecture that can grow',
    body: 'Modular services and cloud-native hosting so a pilot can become the production system.',
  },
  {
    title: 'Engineering in the open',
    body: 'Short iterations, reviewed pull requests, tests, and staging environments you can click.',
  },
  {
    title: 'Quality as a release habit',
    body: 'Functional QA, device and browser coverage, accessibility, and performance budgets in the pipeline.',
  },
  {
    title: 'Secure by construction',
    body: 'Identity, encryption in transit, least-privilege access, and secrets that never live in the repo.',
  },
  {
    title: 'Handover that lasts',
    body: 'Documentation and knowledge transfer so your team can own the software — or we remain the IT partner after go-live.',
  },
]

export const developmentLifecycle = [
  {
    step: '01',
    title: 'Frame',
    body: 'Scope, users, success measures, and a recommended path — MVP, phased, or a targeted rebuild.',
  },
  {
    step: '02',
    title: 'Design',
    body: 'Experience and technical design in parallel, so the interface and the system agree before build ramps up.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'Agile delivery with demos you can use. Web, mobile apps, APIs, and cloud work on one backlog.',
  },
  {
    step: '04',
    title: 'Launch & evolve',
    body: 'Store submissions, production hardening, monitoring, and a cadence of improvements with real users.',
  },
]

export const solutions = [
  {
    title: 'Customer-facing software',
    body: 'Consumer and B2B applications with onboarding, payments, notifications, and analytics designed as one system — not a pile of screens.',
  },
  {
    title: 'Enterprise applications',
    body: 'Internal software for operations, finance, HR, clinics, logistics, and the back office — replacing spreadsheets without replacing the people who know the work.',
  },
  {
    title: 'Cloud & integration',
    body: 'Hosted platforms, APIs, and IT integration so your applications, data, and identity live in one coherent estate.',
  },
  {
    title: 'Data & analytics software',
    body: 'Warehouses, governed metrics, and dashboards for leadership — built on the same events your applications already produce.',
  },
]

export const technologies = [
  { group: 'Languages', items: ['Python', 'Java', 'TypeScript', 'Swift', 'Kotlin', 'SQL'] },
  { group: 'Web & software', items: ['React', 'Node.js', 'Flutter', 'REST', 'GraphQL'] },
  { group: 'Mobile apps', items: ['iOS / SwiftUI', 'Android / Compose', 'Firebase', 'TestFlight'] },
  { group: 'Cloud & DevOps', items: ['Azure', 'AWS', 'GCP', 'CI/CD', 'Kubernetes', 'Terraform'] },
  { group: 'Data & AI', items: ['Data engineering', 'PostgreSQL', 'Spark', 'AI / ML', 'MLOps'] },
  { group: 'IT services', items: ['APIs', 'Integration', 'Monitoring', 'Support'] },
]

export const portfolio = [
  {
    title: 'Field operations console',
    sector: 'Logistics',
    body: 'A web operations console and Android app for a regional logistics team — live status, exception queues, and a handover that operations could run without us in the room.',
  },
  {
    title: 'Clinic scheduling platform',
    sector: 'Healthcare',
    body: 'Appointment, billing, and practitioner workflows on a single portal, with an iOS app for on-call staff and audit trails the admin team asked for on day one.',
  },
  {
    title: 'Retail commerce stack',
    sector: 'Retail',
    body: 'Catalogue, checkout, and a merchant admin rebuilt for festive peaks — React storefront, payments, and a warehouse feed that no longer needed nightly CSV rituals.',
  },
  {
    title: 'Operations reporting suite',
    sector: 'Enterprise',
    body: 'A data warehouse and leadership dashboards that replaced weekly spreadsheet rituals — with access control, scheduled extracts, and a web portal the business actually opened.',
  },
]

export const openings = [
  {
    title: 'Full-stack engineer',
    type: 'Hyderabad · Full-time',
    body: 'React and Node or Python, with a taste for software conversations — not only tickets.',
  },
  {
    title: 'Mobile engineer (iOS / Android)',
    type: 'Hyderabad · Full-time',
    body: 'Native craft on at least one platform, curiosity for the other, and patience for store reviews.',
  },
  {
    title: 'Cloud / backend engineer',
    type: 'Hyderabad · Full-time',
    body: 'APIs, data, and cloud operations — with the humility to design for a network that will fail at the worst moment.',
  },
]

export const stats = [
  { value: '2010', label: 'Studio founded' },
  { value: '6', label: 'Software practices' },
  { value: 'HYD', label: 'Home in Kavuri Hills' },
  { value: '24/7', label: 'Support after launch' },
]
