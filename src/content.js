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
    'Victory Minds is a US and India based technology and product company. We build, test, integrate, and launch products; apply AI and emerging technologies; run HR services; shape go-to-market strategies; connect founders with investors; and provide IT infrastructure support along with SOC audits.',
}

export const socials = [
  { name: 'X', href: 'https://x.com/victorymindstek', icon: 'x' },
  { name: 'Facebook', href: 'https://www.facebook.com/victorymindsin/', icon: 'facebook' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/victorymindsin/home/', icon: 'linkedin' },
  { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=919030589639', icon: 'whatsapp' },
]

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/technologies', label: 'Technologies' },
  { to: '/clients', label: 'Clients' },
  { to: '/contact', label: 'Contact' },
]

export const hero = {
  headline: 'We build, test, integrate, and launch products — then help them win the market.',
  subhead:
    'Victory Minds is a US and India based technology partner for startups and enterprises. Product engineering, AI and emerging technologies, HR services, integrations, implementation, go-to-market, investor connections, IT infrastructure, and SOC audits — under one roof.',
  primaryCta: 'Book a discovery call',
  secondaryCta: 'Get a project quote',
}

export const aboutCopy = {
  short:
    'Victory Minds is a US and India based technology and product company. We work with startups and enterprises across the full product journey: building products, rigorously testing them, integrating them into your ecosystem, implementing them on the ground, and shaping the go-to-market strategies that drive adoption.',
  beyond:
    'Beyond the product itself, we apply AI and emerging technologies, run HR services, connect founders with venture capitalists and angel investors, support IT networks and infrastructure, and conduct SOC audits — so you have one accountable partner from idea to scale.',
  join:
    'We hire people who can build, test, and launch — across our US and India teams. If no role is listed, send a portfolio and a note on the work you want next to info@victoryminds.com.',
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
    slug: 'ai-emerging',
    title: 'AI & Emerging Technologies',
    kicker: 'Highlighted practice',
    summary:
      'Practical AI, automation, and emerging stacks inside real products — copilots, retrieval, computer vision, XR-ready pipelines, and AI-search visibility — with human review where it matters.',
    image: '/photos/ai.jpg',
    details: [
      'Use-case framing so AI is a feature with a metric, not a slide with a demo.',
      'Generative AI, copilots, and retrieval grounded in your documents and systems of record.',
      'Emerging surfaces: computer vision, XR-ready content pipelines, and answer-engine visibility (AEO / GEO).',
      'Evaluation, monitoring, and a person in the loop for high-stakes actions.',
    ],
    stack: ['Generative AI', 'Copilots', 'RAG', 'AEO / GEO', 'XR / vision', 'MLOps'],
    featured: true,
  },
  {
    slug: 'hr-services',
    title: 'HR Services',
    kicker: 'People and process',
    summary:
      'HR support for product companies that are scaling: hiring, onboarding, HRIS, policies, and two-shore team design so the organisation can keep up with the product.',
    image: '/photos/careers.jpg',
    details: [
      'Talent programmes and hiring support for engineering, product, and go-to-market roles.',
      'Onboarding, policies, and HR process that a growing US–India team can actually run.',
      'HRIS and people-ops tooling integrated with the systems you already use.',
      'Two-shore team design so collaboration and scale stay in the same operating model.',
    ],
    stack: ['Hiring', 'Onboarding', 'HRIS', 'People ops', 'Two-shore teams'],
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
  {
    group: 'AI & emerging tech',
    items: ['Generative AI', 'Copilots', 'RAG', 'AEO / GEO', 'Computer vision', 'XR pipelines', 'MLOps'],
  },
  { group: 'Trust, HR & operations', items: ['HRIS', 'Integrations', 'Infrastructure', 'Monitoring', 'SOC audits'] },
]

export const emergingTech = [
  {
    title: 'Generative AI & copilots',
    body: 'Assistants inside real workflows — drafting, retrieval, classification — with evaluation and a human in the loop.',
  },
  {
    title: 'AI search & visibility',
    body: 'Answer-engine and generative-engine optimisation so products and local businesses are what AI assistants recommend.',
  },
  {
    title: 'Vision, XR & immersive pipelines',
    body: 'Computer vision and XR-ready content pipelines for products that have to be seen, walked, or demonstrated — not only described.',
  },
  {
    title: 'Automation at the edge of the stack',
    body: 'Emerging tooling wired into the product, not a side experiment: APIs, agents, and operations that stay observable.',
  },
]

export const clients = [
  {
    name: 'ArtoCM',
    sector: 'Clinical education · GTM',
    url: 'https://artocm.com/',
    body: 'The Art of Clinical Medicine — courses and topics for medical students and postgraduates. We support go-to-market so better information reaches the clinicians who need it.',
  },
  {
    name: 'CYMAX',
    sector: 'Immersive technology · GTM',
    url: 'https://www.cymax.co.in/',
    body: 'VR walkthroughs, 3D renders, AI films, and XR from Hyderabad. GTM for an immersive studio selling to developers, brands, and enterprises.',
  },
  {
    name: 'Gobble List',
    sector: 'Consumer product · GTM',
    url: 'https://gobblelist.com/',
    body: 'A shared AI grocery list for the whole family. Positioning and launch support so a household product can find its market.',
  },
  {
    name: 'Nona Digi',
    sector: 'AI growth · GTM',
    url: 'https://nonadigi.com/',
    body: 'AI visibility, AEO, and an AI chat receptionist for local businesses. Go-to-market so AI search turns into booked appointments.',
  },
]

export const reviews = [
  {
    quote:
      'Victory Minds treated our clinical education platform as a market, not only a catalogue of courses. The GTM work made it clearer who we were speaking to — and how we show up for them.',
    role: 'Leadership',
    company: 'ArtoCM',
    url: 'https://artocm.com/',
  },
  {
    quote:
      'We build immersive experiences. They helped us tell that story to buyers — VR, AI films, and XR — without drowning the pitch in studio jargon.',
    role: 'Leadership',
    company: 'CYMAX',
    url: 'https://www.cymax.co.in/',
  },
  {
    quote:
      'Gobble List is a simple product with a sharp job. Victory Minds kept the go-to-market equally sharp: one list, the whole family, a reason to start today.',
    role: 'Product team',
    company: 'Gobble List',
    url: 'https://gobblelist.com/',
  },
  {
    quote:
      'They understood that our market is AI search, not another brochure website. GTM for Nona Digi was about becoming the answer assistants recommend — and converting that into revenue.',
    role: 'Leadership',
    company: 'Nona Digi',
    url: 'https://nonadigi.com/',
  },
]

export const stats = [
  { value: 'US+IN', label: 'Two-shore partner' },
  { value: '10', label: 'Practices under one roof' },
  { value: '1', label: 'Accountable partner' },
  { value: '1 day', label: 'Typical response' },
]

export const contactInterests = [
  'Product Building',
  'AI & Emerging Technologies',
  'HR Services',
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
