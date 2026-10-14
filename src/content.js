export const company = {
  name: 'Victory Minds',
  tagline: 'From product idea to market — built, tested, integrated, and launched.',
  positioning: 'US and India based technology and product company.',
  founded: 2010,
  email: 'info@victoryminds.com',
  phone: '+91-9030589639',
  phoneHref: 'tel:+919030589639',
  emailHref: 'mailto:info@victoryminds.com',
  address: 'Plot #260, Krishi Allure, Kavuri Hills, Hyderabad — 500081',
  offices: 'United States • Hyderabad, India',
  responseTime: 'within one business day',
  site: 'https://victoryminds.in/',
  boilerplate:
    'Victory Minds is a US and India based technology and product company. We build, test, integrate, and implement products; shape go-to-market strategies; connect founders with venture capitalists and angel investors; and provide complete IT network and infrastructure support along with SOC audits.',
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

export const hero = {
  headline: 'We build, test, integrate, and launch products — then help them win the market.',
  subhead:
    'Victory Minds is a US and India based technology partner for startups and enterprises. Product engineering, integrations, implementation, go-to-market strategy, investor connections, IT infrastructure support, and SOC audits — under one roof.',
  primaryCta: 'Book a discovery call',
  secondaryCta: 'Get a project quote',
}

export const aboutCopy = {
  short:
    'Victory Minds is a US and India based technology and product company. We work with startups and enterprises across the full product journey: building products, rigorously testing them, integrating them into your ecosystem, implementing them on the ground, and shaping the go-to-market strategies that drive adoption.',
  beyond:
    'Beyond the product itself, we connect founders with venture capitalists and angel investors, run complete IT network and infrastructure support, and conduct SOC audits — so you have one accountable partner from idea to scale.',
}

export const whyVictoryMinds = [
  {
    title: 'Two-shore advantage',
    body: 'US proximity for collaboration, India depth for engineering scale.',
  },
  {
    title: 'One partner, full journey',
    body: 'Product, testing, integrations, implementation, go-to-market, infrastructure, and audits — no handoffs between vendors.',
  },
  {
    title: 'Founder-first',
    body: 'We pair execution with investor connections, not just advice.',
  },
  {
    title: 'Enterprise-grade discipline',
    body: 'Audit-ready processes from day one.',
  },
]

export const values = whyVictoryMinds

export const capabilities = [
  {
    title: 'Product building',
    body: 'End-to-end product development — from concept, design, and architecture to build and release.',
  },
  {
    title: 'Testing & quality',
    body: 'Functional, integration, performance, and user-acceptance testing before customers see the product.',
  },
  {
    title: 'Integrations',
    body: 'Seamless connections between your product and third-party platforms, APIs, and enterprise systems.',
  },
  {
    title: 'Implementation',
    body: 'On-ground rollout: deployment, configuration, data migration, and team training so adoption sticks.',
  },
  {
    title: 'Go-to-market',
    body: 'Positioning, messaging, launch planning, and channel strategy that takes the product to revenue.',
  },
  {
    title: 'Investor connections',
    body: 'Pitch-readiness support and warm introductions to venture capitalists and angel investors.',
  },
]

export const services = [
  {
    slug: 'product-building',
    title: 'Product Building',
    kicker: 'Concept to release',
    summary:
      'End-to-end product development — from concept, design, and architecture to build and release. Web, mobile, and enterprise products engineered to scale.',
    image: '/photos/team.jpg',
    details: [
      'Concept, experience, and architecture before the first production commit.',
      'Web, mobile, and enterprise products engineered to scale with the business.',
      'Build and release under one team so design and engineering do not drift apart.',
      'A backlog cadence after launch so the product keeps moving once it is in market.',
    ],
    stack: ['Web', 'Mobile', 'Enterprise', 'Architecture', 'Design', 'Release'],
  },
  {
    slug: 'product-testing',
    title: 'Product Testing',
    kicker: 'Quality before customers',
    summary:
      'Functional, integration, performance, and user-acceptance testing that catches issues before your customers do.',
    image: '/photos/dashboard.jpg',
    details: [
      'Functional coverage against the journeys your users actually take.',
      'Integration tests across APIs, data, and third-party platforms.',
      'Performance checks before peak load is a surprise.',
      'User-acceptance programmes that give stakeholders a clear go / no-go.',
    ],
    stack: ['Functional QA', 'Integration', 'Performance', 'UAT'],
  },
  {
    slug: 'product-integrations',
    title: 'Product Integrations',
    kicker: 'One working system',
    summary:
      'Seamless connections between your product and third-party platforms, APIs, and enterprise systems — so everything works as one.',
    image: '/photos/support.jpg',
    details: [
      'API and platform connections designed as part of the product, not bolted on later.',
      'Enterprise systems — CRM, ERP, identity, payments — wired into one flow.',
      'Error handling, retries, and observability so integrations stay operable.',
      'A single picture of how data moves, instead of a patchwork of scripts.',
    ],
    stack: ['APIs', 'Enterprise systems', 'Identity', 'Payments'],
  },
  {
    slug: 'implementation',
    title: 'Implementation',
    kicker: 'On-ground rollout',
    summary:
      'On-ground rollout done right: deployment, configuration, data migration, and team training, so adoption sticks.',
    image: '/photos/workshop.jpg',
    details: [
      'Deployment and configuration that match how the operation actually runs.',
      'Data migration with checks, so history arrives intact.',
      'Team training that makes the first week after go-live usable.',
      'Hypercare after launch until the product is in the team’s hands, not ours.',
    ],
    stack: ['Deployment', 'Migration', 'Training', 'Hypercare'],
  },
  {
    slug: 'go-to-market',
    title: 'Go-to-Market Strategy',
    kicker: 'Launch to revenue',
    summary:
      'Positioning, messaging, launch planning, and channel strategy that takes your product to customers and revenue.',
    image: '/photos/contact.jpg',
    details: [
      'Positioning and messaging that a buyer can repeat without a slide deck.',
      'Launch planning with a sequence, not a single announcement.',
      'Channel strategy so the product reaches the customers you named.',
      'Feedback loops from market into the product backlog.',
    ],
    stack: ['Positioning', 'Messaging', 'Launch', 'Channels'],
  },
  {
    slug: 'investor-connections',
    title: 'Investor Connections',
    kicker: 'Founders and capital',
    summary:
      'Pitch-readiness support and warm introductions connecting founders with venture capitalists and angel investors.',
    image: '/photos/careers.jpg',
    details: [
      'Pitch-readiness: the story, the numbers, and the product proof in one pack.',
      'Warm introductions to venture capitalists and angel investors.',
      'A founder-first process — execution paired with capital conversations, not just advice.',
      'Materials that survive diligence because the product and the numbers agree.',
    ],
    stack: ['Pitch-readiness', 'VCs', 'Angel investors'],
  },
  {
    slug: 'it-infrastructure',
    title: 'IT Network & Infrastructure Support',
    kicker: 'Always on',
    summary:
      'Complete setup, monitoring, and support of your IT networks and infrastructure — secure, reliable, and always on.',
    image: '/photos/code.jpg',
    details: [
      'Setup of networks and infrastructure to a standard you can operate.',
      'Monitoring and support so incidents have an owner.',
      'Security defaults: access, backups, and a clear recovery path.',
      'A partner who stays after the racks and cloud accounts are live.',
    ],
    stack: ['Networks', 'Cloud', 'Monitoring', 'Support'],
  },
  {
    slug: 'soc-audits',
    title: 'SOC Audits',
    kicker: 'Trust you can show',
    summary:
      'Structured SOC audit support to assess controls, close gaps, and demonstrate trust to customers and partners.',
    image: '/photos/ai.jpg',
    details: [
      'Assessment of controls against what customers and partners will ask.',
      'Gap closure with a backlog, owners, and evidence — not a slide.',
      'Audit-ready process from day one, not a scramble before the questionnaire.',
      'Support through the audit so trust is demonstrated, not claimed.',
    ],
    stack: ['SOC', 'Controls', 'Evidence', 'Audit support'],
  },
]

export const developmentPractices = whyVictoryMinds

export const developmentLifecycle = [
  {
    step: '01',
    title: 'Build',
    body: 'Concept, design, architecture, and release — web, mobile, and enterprise products engineered to scale.',
  },
  {
    step: '02',
    title: 'Test',
    body: 'Functional, integration, performance, and user-acceptance testing before customers see the product.',
  },
  {
    step: '03',
    title: 'Integrate & implement',
    body: 'APIs, platforms, deployment, migration, and training so the product lands in a working ecosystem.',
  },
  {
    step: '04',
    title: 'Launch & scale',
    body: 'Go-to-market, investor conversations, infrastructure, and SOC audits — one partner from idea to scale.',
  },
]

export const solutions = [
  {
    title: 'Full product journey',
    body: 'Build, test, integrate, implement, and take the product to market with one accountable team — no handoffs between vendors.',
  },
  {
    title: 'Two-shore delivery',
    body: 'US proximity for collaboration, India depth for engineering scale — for startups and enterprises that need both.',
  },
  {
    title: 'Founder to market',
    body: 'Go-to-market strategy plus pitch-readiness and warm introductions to venture capitalists and angel investors.',
  },
  {
    title: 'Trust and operations',
    body: 'IT network and infrastructure support with structured SOC audit support, so customers and partners can see the controls.',
  },
]

export const technologies = [
  { group: 'Languages', items: ['Python', 'Java', 'TypeScript', 'Swift', 'Kotlin', 'SQL'] },
  { group: 'Web & software', items: ['React', 'Node.js', 'Flutter', 'REST', 'GraphQL'] },
  { group: 'Mobile apps', items: ['iOS / SwiftUI', 'Android / Compose', 'Firebase', 'TestFlight'] },
  { group: 'Cloud & DevOps', items: ['Azure', 'AWS', 'GCP', 'CI/CD', 'Kubernetes', 'Terraform'] },
  { group: 'Data & AI', items: ['Data engineering', 'PostgreSQL', 'Spark', 'AI / ML', 'MLOps'] },
  { group: 'Trust & operations', items: ['Integrations', 'Infrastructure', 'Monitoring', 'SOC audits'] },
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
    body: 'Product engineering across web and APIs — from build through test and release.',
  },
  {
    title: 'Mobile engineer (iOS / Android)',
    type: 'Hyderabad · Full-time',
    body: 'Native craft on at least one platform, with the discipline to ship store-ready product.',
  },
  {
    title: 'Cloud / infrastructure engineer',
    type: 'Hyderabad · Full-time',
    body: 'Networks, cloud, monitoring, and the operational bar that SOC conversations require.',
  },
]

export const stats = [
  { value: 'US+IN', label: 'Two-shore partner' },
  { value: '8', label: 'Practices under one roof' },
  { value: '1', label: 'Accountable partner' },
  { value: '1 day', label: 'Typical response' },
]

export const contactInterests = [
  'Product Building',
  'Product Testing',
  'Product Integrations',
  'Implementation',
  'Go-to-Market Strategy',
  'Investor Connections (VCs / Angel Investors)',
  'IT Network & Infrastructure Support',
  'SOC Audits',
  'Something else',
]

export const contactNext = [
  {
    step: '01',
    title: 'Review',
    body: 'We review your note and align the right team.',
  },
  {
    step: '02',
    title: 'Discovery',
    body: 'A short discovery call to understand scope and timelines.',
  },
  {
    step: '03',
    title: 'Proposal',
    body: 'A clear proposal — scope, milestones, and commercials.',
  },
]
