import './styles.css';
/* ============================================================
   4P3X VERSE™ INVESTOR PORTFOLIO — app.js
   Powered by 4P3X Intelligent AI™ · Created by Kyzel Kreates™
   ============================================================ */

'use strict';

/* ─── DATA ─────────────────────────────────────────────── */

const TIMELINE_DATA = [
  {
    version: 'V1.0',
    title: '4P3X Verse™ 1 Base',
    stage: 'Fully Working Deployed Demo/Live Product',
    stageColor: 'green',
    url: 'https://basev0.vercel.app/',
    desc: 'The original reusable modular foundation. Already refactored into 11 live deployed product demos. Backend-configurable for live operational use.',
    active: true
  },
  {
    version: 'V2.0',
    title: '4P3X Verse™ 5 Base',
    stage: 'Early Deployment Stage',
    stageColor: 'green',
    url: 'https://4p3xversev2.vercel.app/',
    desc: 'Five-base evolution demonstrating parallel product architectures from a single expanded core.',
    active: false
  },
  {
    version: 'V3.0',
    title: '4P3X Verse™ 10 Base',
    stage: 'Late Development Stage',
    stageColor: 'gold',
    url: 'https://4p3x10base.vercel.app/',
    desc: 'Ten-base system showing complex multi-dashboard and multi-agent coordination architecture.',
    active: false
  },
  {
    version: 'V4.0',
    title: '4P3X Verse™ 20 Base',
    stage: 'Early Development Stage',
    stageColor: 'gold',
    url: 'https://4p3xv20base.vercel.app/#what',
    desc: 'Twenty-base infrastructure concept — sector-spanning modular control systems and dashboards.',
    active: false
  },
  {
    version: 'V5.0',
    title: '4P3X Verse™ 50 Base',
    stage: 'Early Development Stage',
    stageColor: 'purple',
    url: 'https://4p3x50base.vercel.app/',
    desc: 'Fifty-base multi-agent operating system concept — orchestrated AI agents across a large modular platform.',
    active: false
  },
  {
    version: 'V6.0',
    title: '4P3X Verse™ 100 Base',
    stage: 'Concept Stage',
    stageColor: 'purple',
    url: 'https://4p3x100baseconcept.vercel.app/#top',
    desc: 'One hundred-base future software infrastructure concept — the long-range vision of the 4P3X Verse™ ecosystem.',
    active: false
  }
];

const PROJECTS_DATA = [
  {
    num: 1,
    title: '4P3X Intelligent AI™',
    subtitle: 'Base Core Refactorable Project — Created by Kyzel Kreates™',
    brand: '4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://basev0.vercel.app/',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/d41e50391_01_basev0.png',
    purpose: 'Reusable base architecture proving the dashboard / PWA / product foundation.',
    status: 'Live deployed demo',
    badges: ['Demo/live pathway', 'Backend-ready'],
    desc: 'The original reusable modular foundation. Already refactored into 11 live deployed product demos. Backend-configurable for live operational use.',
    caseStudy: {
      who: 'Founders, product studios, and sector organisations that need a ready-made AI-powered dashboard and workflow system without building from scratch.',
      what: 'A fully working modular base system — control dashboard, user-facing PWA, AI agent layer, and backend-ready architecture — designed to be refactored into any sector product.',
      where: 'Deployed live at basev0.vercel.app. Can be accessed from any device as an installable PWA.',
      when: 'Built and deployed during the initial 4P3X Verse™ development window. All 11 live deployed product demos in this portfolio trace back to this single base.',
      how: 'A single reusable HTML/CSS/JS foundation with modular sections, embedded AI agent, service worker for offline use, and a clear separation between demo mode (local state) and live mode (backend-connected). Refactoring takes this one base and adapts it to a target sector, branding, and workflow.'
    }
  },
  {
    num: 2,
    title: 'TherapyLink™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'TherapyLink™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://therapylinkos.vercel.app/4p3x_carelink/ap3x/demo/index.html',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/5eeec32b6_02_therapylink.png',
    purpose: 'Therapy / support workflow demo with dashboard / PWA-style care pathway.',
    status: 'Live deployed demo',
    badges: ['Demo/live pathway', 'Backend-ready'],
    desc: 'Care, therapy support, wellbeing check-ins, and workflow demonstration with a clear demo/live product pathway.',
    caseStudy: {
      who: 'Therapy providers, care organisations, NHS-adjacent services, mental health charities, and wellbeing professionals who need a structured digital support and check-in platform.',
      what: 'A care and therapy support PWA featuring wellbeing check-in flows, session tracking, guided support journeys, and a control dashboard — all in demo mode, backend-ready for live deployment.',
      where: 'Live at therapylinkos.vercel.app. Installable as a PWA on any mobile or desktop device.',
      when: 'Developed as one of the first sector refactors from the 4P3X Base Core. Demonstrates how the same architecture adapts to a health and care context.',
      how: 'The 4P3X base was refactored with therapy-specific branding, check-in workflows, session management flows, and care-oriented AI guidance. Demo mode allows full exploration without a live backend. Connecting Supabase or a REST API activates real data persistence and user authentication.'
    }
  },
  {
    num: 3,
    title: 'AutoSkill OS™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'AutoSkill OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://autoskillos.vercel.app/ap3x/demo/index.html',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/16d38d9d0_03_autoskill.png',
    purpose: 'Skills, training, and learner-progress product direction.',
    status: 'Live deployed demo',
    badges: ['Demo/live pathway', 'Backend-ready'],
    desc: 'Learning, automotive skills, training progression, and structured knowledge platform variant.',
    caseStudy: {
      who: 'Automotive training providers, trade schools, fleet operators, employer-led training programmes, and skills academies looking for a structured digital learning platform.',
      what: 'An LMS-style training and skills progression platform covering course content, skills tracking, knowledge modules, and learner progress — tailored to automotive and trade skills.',
      where: 'Live at autoskillos.vercel.app. Fully installable as a mobile PWA for on-the-go learner access.',
      when: 'Built as a sector-specific refactor from the 4P3X Base Core to demonstrate the LMS use case pathway.',
      how: 'The base architecture was adapted with learning module structure, skills progression logic, course content layout, and training-specific AI guidance. Demo mode provides a full walkthrough. Live mode requires a content management backend and learner authentication layer.'
    }
  },
  {
    num: 4,
    title: "Big V's Best Routes Fleet OS™",
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: "Big V's Best Routes Fleet OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™",
    url: 'https://bigvsfleetos.vercel.app/',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/0b7658732_04_bigvs.png',
    purpose: 'Safety-first fleet / route / compliance product direction.',
    status: 'Live deployed demo',
    badges: ['Demo/live pathway', 'Backend-ready'],
    desc: 'Fleet, route, legal-safety, driver PWA, and compliance-oriented navigation system pathway.',
    caseStudy: {
      who: 'Transport companies, logistics operators, fleet managers, HGV and delivery businesses, and councils managing vehicle compliance and route safety.',
      what: 'A fleet operations PWA combining route planning, bridge-strike prevention, vehicle profiles, driver check-ins, legal compliance tracking, and a control dashboard for fleet managers.',
      where: 'Live at bigvsfleetos.vercel.app. Driver-facing PWA installable on mobile for in-cab use.',
      when: 'Developed to demonstrate how the 4P3X base solves a very specific real-world operational problem — driver safety, route compliance, and fleet oversight.',
      how: 'The base was refactored with route and compliance workflows, vehicle profile management, AI-guided safety checks, and a dual-interface model — fleet manager dashboard and driver-facing PWA.'
    }
  },
  {
    num: 5,
    title: 'ResponseLink OS™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'ResponseLink OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://responselinkosv1.vercel.app/',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/8871d1321_05_responselink.png',
    purpose: 'Community welfare, outreach, responder coordination, and service-user support pathway.',
    status: 'Live deployed demo',
    badges: ['Demo/live pathway', 'Backend-ready'],
    desc: 'Community welfare, responder coordination, service-user check-in, and safety-first mobile support platform.',
    caseStudy: {
      who: 'Community welfare organisations, housing associations, social prescribing services, outreach teams, and any service coordinating support across multiple responders and service users.',
      what: 'A coordination and welfare check-in platform that connects responders to service users, tracks welfare contacts, manages referrals, and provides a real-time coordination dashboard.',
      where: 'Live at responselinkosv1.vercel.app. Designed as a mobile-first PWA for field-based responders.',
      when: 'Built to demonstrate the community welfare and coordination use case.',
      how: 'The 4P3X base was adapted with welfare check-in flows, responder assignment, service-user profiles, and coordination-oriented AI guidance. Demo mode shows the full workflow. Live mode requires a secure backend with GDPR-compliant data storage and role-based access control.'
    }
  },
  {
    num: 6,
    title: 'CareerLink OS™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'CareerLink OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://4p3xaiclos.vercel.app/',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/52edbe973_06_careerlink.png',
    purpose: 'Career support, coaching, progress, and opportunity-readiness product direction.',
    status: 'Live deployed demo',
    badges: ['Demo/live pathway', 'Backend-ready'],
    desc: 'Career support, employment pathway, skills tracking, and AI-guided progression system variant.',
    caseStudy: {
      who: 'Employment support services, job centres, careers advisors, training providers, recruitment businesses, and employer-funded upskilling programmes.',
      what: 'A career support and employment pathway platform covering skills assessment, job-readiness tracking, CV and application guidance, milestone progression, and AI-guided career navigation.',
      where: 'Live at 4p3xaiclos.vercel.app. Installable as a PWA for job seekers to use on mobile.',
      when: 'Built to demonstrate the career and employment support sector pathway.',
      how: 'The base was adapted with career progression flows, skills mapping, goal-setting modules, and employment-oriented AI guidance. Demo mode provides a complete walkthrough of the user journey.'
    }
  },
  {
    num: 7,
    title: 'Recharge Burnout Recovery™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'Recharge Burnout Recovery™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://burnout-mh.vercel.app/ap3x/companion/index.html',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/1a85893ec_07_burnout.png',
    purpose: 'Burnout recovery, guided wellbeing, and supportive PWA product direction.',
    status: 'Live deployed demo',
    badges: ['Demo/live pathway', 'Backend-ready'],
    desc: 'Burnout recovery, guided wellbeing journeys, and supportive AI companion platform variant.',
    caseStudy: {
      who: 'Wellbeing services, employee assistance programmes, mental health charities, HR wellbeing teams, and healthcare-adjacent services supporting burnout recovery.',
      what: 'A guided burnout recovery and wellbeing companion PWA with check-in flows, recovery milestone tracking, supportive AI guidance, and a personal wellness dashboard.',
      where: 'Live at burnout-mh.vercel.app. Mobile-first installable PWA for personal daily use.',
      when: 'Built to demonstrate the mental health and wellbeing support pathway from the 4P3X base.',
      how: 'The base was adapted with recovery-focused check-in logic, wellbeing progression tracking, supportive language layers, and guided reflection modules. All AI guidance is bounded — no medical claims are made.'
    }
  },
  {
    num: 8,
    title: 'Four Paws Training and Enrichment Academy™ Booking OS',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'Four Paws Training and Enrichment Academy™ Booking OS Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://fourpawsdemo.vercel.app/ap3x/demo/index.html#deploy',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/08bcc0cc3_08_fourpaws.png',
    purpose: 'Backend-connected animal-care Booking OS with one Overall Admin Dashboard plus a Trainer Dashboard PWA, Walker PWA, and Owner PWA — all communicating through the backend.',
    status: 'Live deployed demo',
    badges: ['Overall Admin Dashboard', 'Trainer Dashboard PWA', 'Walker PWA', 'Owner PWA', 'Backend Connected', 'Federated Booking OS', 'Role-Based PWAs', 'GPS Tracking', 'Installable PWA', 'Animal-Care Operations', 'Owner Visibility', 'Trainer Coordination', 'Admin Oversight', '4P3X Intelligent AI™'],
    desc: 'A backend-connected animal-care Booking OS with one Overall Admin Dashboard plus a Trainer Dashboard PWA, Walker PWA, and Owner PWA. All role-based PWAs communicate through the backend and feed activity back into the admin/dashboard system — creating a connected federated booking and animal-care operations platform with installable PWAs, GPS walk/visit tracking, owner visibility, trainer coordination, and admin oversight.',
    caseStudy: {
      who: 'Animal-care businesses, dog walking services, pet visit providers, trainer-led care networks, booking and operations managers, and any multi-role animal-care operation that needs connected admin, trainer, walker, and owner-facing tools working together in one system.',
      what: 'A connected multi-role animal-care Booking OS with one Overall Admin Dashboard and three role-based PWAs: the Trainer Dashboard PWA, the Walker PWA, and the Owner PWA. All four interfaces communicate through the backend as one federated booking and animal-care operations system.',
      where: 'Live demo at fourpawsdemo.vercel.app. Each role-based PWA is installable on mobile. The admin dashboard is browser-accessible for operational oversight.',
      when: 'Built to demonstrate that the 4P3X Verse™ architecture can go beyond single-dashboard products into multi-role, backend-connected, federated operating systems.',
      how: 'The 4P3X base was extended into four connected interfaces: the Overall Admin Dashboard as the central control layer; the Trainer Dashboard PWA for trainer-side operations and coordination; the Walker PWA for field activity and GPS-supported walk/visit updates; and the Owner PWA for client-side visibility of booking status, animal-care activity, and walker/visit updates. All role-based activity communicates through the backend and feeds into the wider dashboard system.',
      problem: 'Animal-care businesses often need separate tools for bookings, admin oversight, trainers, walkers, owners, animal updates, GPS walk evidence, visits, and communication. When these tools are disconnected, it becomes harder to manage bookings, track activity, keep owners informed, and maintain operational visibility.',
      solution: 'Four Paws Training and Enrichment Academy™ Booking OS connects one Overall Admin Dashboard with a Trainer Dashboard PWA, Walker PWA, and Owner PWA through the backend. Each role has its own installable interface, but all activity connects back into the same operational system.',
      architecture: 'Federated dashboard/PWA structure. The Overall Admin Dashboard acts as the central control layer. The Trainer Dashboard PWA manages trainer-side work and coordination. The Walker PWA handles field activity and GPS-supported updates. The Owner PWA gives clients visibility of their animal-care activity. All role-based activity communicates through the backend and feeds into the wider dashboard system.',
      portfolioValue: 'Proves the 4P3X Verse™ architecture can move beyond static demo screens into a backend-connected, multi-role, installable PWA operating system. Demonstrates admin control, trainer operations, walker field workflow, owner visibility, GPS activity tracking, backend communication, and real animal-care booking logic inside one connected product.',
      futureUse: 'The system can be expanded into a live animal-care SaaS, booking platform, dog walking operation system, pet visit management platform, trainer-led care network, franchise-ready operating system, or white-label booking product for animal-care businesses.'
    }
  },
  {
    num: 9,
    title: 'Quantum Compliance OS™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'Quantum Compliance OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://4p3xaiqc.netlify.app/',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/e549c1ea8_09_quantumcompliance.png',
    purpose: 'Compliance, audit, evidence, and readiness product direction.',
    status: 'Live deployed demo',
    badges: ['Demo/live pathway', 'Backend-ready'],
    desc: 'Compliance tracking, audit readiness, evidence management, and regulatory preparation platform variant.',
    caseStudy: {
      who: 'Regulated businesses, compliance teams, audit-facing organisations, legal and HR functions, and any sector where evidence and audit readiness is required.',
      what: 'A compliance and audit readiness PWA with evidence tracking, regulatory checklist management, audit trail logging, and an AI-guided compliance assistant.',
      where: 'Live at 4p3xaiqc.netlify.app. Accessible across devices as a browser-based and installable application.',
      when: 'Built to demonstrate the compliance and regulatory product direction from the 4P3X base.',
      how: 'The base was adapted with compliance tracking logic, evidence management flows, audit checklist structures, and compliance-oriented AI guidance. Demo mode provides a full walkthrough. Live mode requires a secure backend with audit log persistence and role-based access.'
    }
  },
  {
    num: 10,
    title: 'TrustShield OS™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'TrustShield OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://4p3xaitsos.netlify.app/#/welcome',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/61d897f0e_10_trustshield.png',
    purpose: 'Trust, reputation, partner-readiness, and confidence-signalling product direction.',
    status: 'Live deployed demo',
    badges: ['Demo/live pathway', 'Backend-ready'],
    desc: 'Trust signalling, reputation management, partner-readiness scoring, and confidence-building platform variant.',
    caseStudy: {
      who: 'Businesses seeking to demonstrate trustworthiness and partner-readiness, procurement-facing organisations, and any service needing a structured trust and reputation layer.',
      what: 'A trust and reputation management PWA with partner-readiness scoring, evidence-backed confidence signals, trust profile management, and an AI-guided credibility assistant.',
      where: 'Live at 4p3xaitsos.netlify.app. Accessible from any device.',
      when: 'Built to demonstrate the trust and reputation product direction — a sector with growing demand as digital procurement and partner verification becomes standard.',
      how: 'The base was adapted with trust scoring logic, evidence and accreditation management flows, partner-readiness dashboards, and trust-oriented AI guidance. Demo mode provides a full functional walkthrough.'
    }
  },
  {
    num: 11,
    title: 'Kyzel Clarity™ — Reusable Clarity OS',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'Kyzel Clarity™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: 'https://4p3xkyzelclarityai.netlify.app/',
    screenshot: 'https://base44.app/api/apps/6a25924245f59bd1154c6405/files/mp/public/6a25924245f59bd1154c6405/fa3064673_11_kyzelclarity.png',
    purpose: 'An installable AI clarity PWA that currently explains the 4P3X Verse™ and Kyzel Kreates™ projects — but can be repurposed for any subject, brand, person, organisation, training system, product library, or knowledge base by swapping the dataset.',
    status: 'Live deployed demo',
    badges: ['Offline PWA', 'AI Explainer', 'Dataset-Swappable', 'Knowledge Base Ready', 'Portfolio Assistant', 'Training Assistant', 'Business Clarity Engine', 'Reusable Clarity OS', "Anyone's Clarity Assistant"],
    desc: 'An installable AI clarity PWA that currently explains the 4P3X Verse™ and Kyzel Kreates™ projects, but can be repurposed for any subject, brand, person, organisation, training system, product library, support process, or knowledge base by swapping the dataset. It proves a reusable "Clarity OS" model — not just Kyzel Clarity™, but a framework for anyone\'s clarity assistant.',
    caseStudy: {
      who: 'Founders, product teams, organisations, training providers, businesses, and anyone who needs to explain complex projects, systems, portfolios, products, ideas, or knowledge bases to non-technical audiences — investors, employers, clients, partners, or learners.',
      what: 'An installable offline-capable PWA clarity assistant that currently explains the 4P3X Verse™ portfolio, Kyzel Kreates™ projects, architecture, product purpose, build logic, and ecosystem strategy. The same clarity engine can become a subject-specific AI explainer for almost any person, brand, organisation, course, product library, technical system, support process, training manual, business knowledge base, portfolio, or documentation system simply by swapping the dataset and prompt layer.',
      where: 'Live at 4p3xkyzelclarityai.netlify.app. Installable as a PWA across all devices. Offline-capable.',
      when: 'Built directly from lived experience. Ciaran (Kyzel Kreates™) is neurodivergent and built this to bridge his own communication needs. It became a deployable and reusable product in its own right.',
      how: 'The 4P3X base was adapted with a knowledge base layer, explainability-first AI guidance, plain-language summarisation flows, and an accessible communication interface. The knowledge base and prompt layer are swappable — making it adaptable to any product, person, or organisation that needs a clearer AI communication and explanation layer for their own subject, data, or content.',
      problem: 'Complex projects, technical portfolios, business systems, training material, and product ecosystems can be difficult for non-technical people to understand quickly.',
      solution: 'Kyzel Clarity™ provides an AI-powered explanation layer that answers questions from a prepared dataset and explains the system in plain language. Because the dataset is swappable, the same clarity interface can serve any subject, brand, organisation, or content owner.',
      architecture: 'A reusable clarity interface connected to a structured knowledge dataset and prompt layer. The interface remains consistent while the dataset changes depending on the person, product, brand, course, organisation, or subject it is serving.',
      portfolioValue: 'Proves that 4P3X Intelligent AI™ can be embedded as a reusable product-native AI explanation layer — not just a generic chatbot. Proves that one clarity interface can become "anyone\'s clarity assistant" when connected to the right dataset.',
      futureUse: 'The model can become a client onboarding assistant, public information assistant, portfolio explainer, internal training assistant, help centre assistant, business documentation assistant, course tutor, product guide, or knowledge-base support tool for any organisation, brand, or subject.'
    }
  },

  {
    num: 12,
    title: '4P3X AI Safety / Support Flow OS™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: '4P3X AI Safety / Support Flow OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: null,
    screenshot: null,
    purpose: 'Advisory support-flow platform designed to structure safer AI-assisted guidance, escalation pathways, user support journeys, risk-aware content flows, and human-reviewed decision boundaries.',
    status: 'Ecosystem concept — planned',
    badges: ['AI Support Flow', 'Safety-Aware Workflow', 'Human Override', 'Advisory AI', 'PWA-Ready', 'Demo/Live Ready'],
    desc: '4P3X AI Safety / Support Flow OS™ is an advisory support-flow platform designed to structure safer AI-assisted guidance, escalation pathways, user support journeys, risk-aware content flows, and human-reviewed decision boundaries. It demonstrates how the 4P3X modular architecture can be adapted into a safety-first support system with clear escalation logic, evidence capture, non-clinical/non-legal disclaimers, and human override. It is designed to support safer workflows, not replace professional judgement.',
    caseStudy: {
      who: 'Organisations that need structured, safety-aware AI guidance flows for support services, helplines, advisory systems, or care-adjacent platforms where human oversight and escalation pathways are essential.',
      what: 'An advisory support-flow platform with structured AI guidance, escalation logic, risk-aware content flows, evidence capture, non-clinical disclaimers, and human override capability.',
      where: 'Planned deployment. Product card added for ecosystem completeness. Screenshot pending live deployment.',
      when: 'Planned as part of the wider 4P3X Verse™ 16-product ecosystem expansion.',
      how: 'The 4P3X base will be adapted with safety-aware support flow logic, escalation pathway rules, bounded AI guidance, human override controls, and evidence-capture mechanisms. All guidance will remain advisory — no medical, legal, or safety guarantees.',
      problem: 'AI-assisted support tools can create risk if they lack proper escalation logic, human oversight, and clear advisory boundaries.',
      solution: 'A structured safety-first support-flow system that keeps AI guidance bounded, routes complex situations to human review, and captures evidence at every step.',
      architecture: 'Modular safety-first flow engine with bounded AI guidance layer, escalation rules, human override controls, and evidence capture built on the 4P3X base architecture.',
      portfolioValue: 'Demonstrates that the 4P3X architecture can be adapted into safety-critical advisory contexts with proper human oversight and escalation design.',
      futureUse: 'Suitable for helplines, advisory services, NHS-adjacent platforms, social care technology, insurance advisory flows, or any service requiring structured AI guidance with human fallback.'
    }
  },
  {
    num: 13,
    title: '4P3X AI AgentForge OS™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: '4P3X AI AgentForge OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: null,
    screenshot: null,
    purpose: 'Modular AI-agent design and control platform for creating bounded, role-specific AI agents with defined purpose, allowed actions, forbidden actions, inputs, outputs, validation rules, stop conditions, and escalation rules.',
    status: 'Ecosystem concept — planned',
    badges: ['AI Agent Builder', 'Bounded Agents', 'Validation Rules', 'Stop Conditions', 'Product-Native AI', 'Reusable Architecture'],
    desc: '4P3X AI AgentForge OS™ is a modular AI-agent design and control platform for creating bounded, role-specific AI agents with defined purpose, allowed actions, forbidden actions, inputs, outputs, validation rules, stop conditions, escalation rules, and audit-friendly behaviour. It demonstrates how 4P3X Intelligent AI™ can be structured as controlled product-native agents rather than generic chatbots.',
    caseStudy: {
      who: 'Product teams, AI developers, organisations, and businesses that need controlled, role-specific AI agents built to defined behavioural rules rather than open-ended generic AI.',
      what: 'A platform for designing, configuring, and deploying bounded AI agents with explicit purpose, allowed/forbidden action sets, validation rules, stop conditions, escalation logic, and audit-friendly behaviour records.',
      where: 'Planned deployment. Product card added for ecosystem completeness. Screenshot pending live deployment.',
      when: 'Planned as part of the wider 4P3X Verse™ 16-product ecosystem expansion.',
      how: 'The 4P3X base will be adapted with agent-definition interfaces, behavioural rule builders, validation logic, stop-condition management, and audit trail capture for each deployed agent.',
      problem: 'Generic AI tools lack the structured boundaries, role-specific behaviour rules, and audit trails needed for reliable product-native AI deployment.',
      solution: 'A structured agent design and control platform that lets teams define exactly what each AI agent can do, cannot do, and when to stop or escalate.',
      architecture: 'Modular agent-definition engine with role-based configuration, validation rules, stop conditions, escalation routing, and audit trail capture built on the 4P3X base architecture.',
      portfolioValue: 'Demonstrates that 4P3X Intelligent AI™ is designed as controlled, bounded, product-native agents — not generic chatbots.',
      futureUse: 'Suitable for enterprise AI governance, product-embedded AI assistants, regulated sector AI, customer service agents, compliance agents, or any context requiring bounded AI behaviour.'
    }
  },
  {
    num: 14,
    title: '4P3X AI Skill OS™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: '4P3X AI Skill OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: null,
    screenshot: null,
    purpose: 'Modular learning, training, and skill-development platform showing how the base architecture can become an AI-assisted education or upskilling system.',
    status: 'Ecosystem concept — planned',
    badges: ['Learning OS', 'Skill Pathways', 'AI Tutor Layer', 'Progress Tracking', 'Certificate Ready', 'PWA-Ready'],
    desc: '4P3X AI Skill OS™ is a modular learning, training, and skill-development platform that shows how the base architecture can become an AI-assisted education or upskilling system. It can support learner dashboards, progress tracking, guided lessons, skill pathways, AI explanations, certificates, and demo/live switching for training providers, employers, creators, and organisations.',
    caseStudy: {
      who: 'Training providers, employers, educational institutions, creators, and organisations that need an AI-assisted skill-development and learning platform.',
      what: 'A modular learning platform with learner dashboards, progress tracking, guided lessons, skill pathways, AI tutor layer, certificate capability, and demo/live mode switching.',
      where: 'Planned deployment. Product card added for ecosystem completeness. Screenshot pending live deployment.',
      when: 'Planned as part of the wider 4P3X Verse™ 16-product ecosystem expansion.',
      how: 'The 4P3X base will be adapted with learning module structure, skill pathway logic, progress tracking, AI-guided lesson flows, and certificate management capability.',
      problem: 'Many organisations need structured digital learning platforms but face high development cost and complexity when building from scratch.',
      solution: 'A modular AI-assisted learning OS refactored from the 4P3X base — ready for training providers, employers, or creators to deploy with their own content and branding.',
      architecture: 'Modular learning engine with learner dashboard, skill pathway builder, progress tracking, AI tutor guidance, and certificate capability built on the 4P3X base.',
      portfolioValue: 'Demonstrates the 4P3X architecture adapting into an education and upskilling context — extending the proven base into the learning and development sector.',
      futureUse: 'Suitable for SaaS learning platforms, employer-led training systems, skills academies, course providers, and any organisation needing a structured digital learning environment.'
    }
  },
  {
    num: 15,
    title: 'ProofForge OS™',
    subtitle: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    brand: 'ProofForge OS™ Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    url: null,
    screenshot: null,
    purpose: 'Proof, evidence, validation, and case-study generation platform for turning product builds into clear investor/employer/client-ready evidence packs.',
    status: 'Ecosystem concept — planned',
    badges: ['Proof System', 'Evidence Capture', 'Case Study Ready', 'Validation Logs', 'Portfolio Proof', 'Investor Evidence'],
    desc: 'ProofForge OS™ is a proof, evidence, validation, and case-study generation platform concept within the 4P3X Verse™ ecosystem. It is designed to help structure project evidence, screenshots, build proof, validation logs, before/after records, case studies, portfolio claims, and investor/employer-ready proof packs. It supports the wider 4P3X goal of turning product builds into clear evidence of capability, progress, and commercial potential.',
    caseStudy: {
      who: 'Founders, product teams, freelancers, agencies, and organisations that need structured evidence, case studies, validation logs, and investor/employer-ready proof of their build capability and product progress.',
      what: 'A proof, evidence, and case-study generation platform with screenshot capture, build validation logs, before/after records, portfolio claims structuring, and investor/employer-ready proof pack generation.',
      where: 'Planned deployment. Product card added for ecosystem completeness. Screenshot pending live deployment.',
      when: 'Planned as part of the wider 4P3X Verse™ 16-product ecosystem expansion.',
      how: 'The 4P3X base will be adapted with evidence capture flows, validation log management, case study templates, proof pack generation, and structured claim formatting for investor/employer/client audiences.',
      problem: 'Builders and teams often struggle to present their project evidence in a structured, investor or employer-ready format that clearly proves capability and progress.',
      solution: 'A structured proof and evidence platform that turns builds, screenshots, validation logs, and case studies into clear proof packs for any audience.',
      architecture: 'Modular evidence capture and proof pack generation engine built on the 4P3X base with case study templates, validation logging, and structured claim management.',
      portfolioValue: 'Supports the wider 4P3X Verse™ goal of demonstrating proof of capability at every build stage — and shows the architecture extending into the evidence and validation sector.',
      futureUse: 'Suitable for product studios, freelance developers, grant applicants, investor-facing teams, portfolio builders, and any organisation needing structured proof of progress and capability.'
    }
  },
  {
    num: 16,
    title: '4P3X Project Rescue OS™',
    subtitle: 'Powered by Intelligent AI Agents Created by Kyzel Kreates™',
    brand: '4P3X Project Rescue OS™ Powered by Intelligent AI Agents Created by Kyzel Kreates™',
    url: null,
    screenshot: null,
    purpose: 'Project repair, audit, recovery, and build-control concept for diagnosing broken apps, stale projects, failed deployments, missing links, and incomplete product logic.',
    status: 'Ecosystem concept — planned',
    badges: ['Project Rescue', 'Fix-First Workflow', 'Build Audit', 'Deployment Repair', 'Validation System', 'AI Agent Assisted'],
    desc: '4P3X Project Rescue OS™ Powered by Intelligent AI Agents Created by Kyzel Kreates™ is a project repair, audit, recovery, and build-control concept designed to help diagnose broken apps, stale projects, failed deployments, missing links, duplicate files, dead buttons, backend issues, and incomplete product logic. It supports a fix-first, preserve-first, validate-first workflow for turning messy builds into structured, deployable systems.',
    caseStudy: {
      who: 'Developers, product teams, agencies, and organisations that have broken, incomplete, or stalled builds that need structured diagnosis, repair, and validation before they can be deployed or handed over.',
      what: 'A project audit, repair, and recovery platform with broken-build diagnosis, deployment issue detection, dead link/button scanning, duplicate file management, incomplete logic identification, and fix-first validation workflow.',
      where: 'Planned deployment. Product card added for ecosystem completeness. Screenshot pending live deployment.',
      when: 'Planned as part of the wider 4P3X Verse™ 16-product ecosystem expansion. Inspired directly by the real-world fix-first, preserve-first, validate-first methodology used in building the 4P3X Verse™ ecosystem itself.',
      how: 'The 4P3X base will be adapted with audit scanning logic, broken-build detection flows, fix-prioritisation workflows, validation gate management, and structured repair reporting.',
      problem: 'Many projects stall or fail not because of bad ideas, but because of broken builds, missing links, incomplete logic, and lack of structured audit and repair methodology.',
      solution: 'A structured project rescue platform that applies fix-first, preserve-first, validate-first methodology to diagnose and repair builds without unnecessary rebuilding.',
      architecture: 'Modular build audit and repair engine with diagnosis flows, fix prioritisation, validation gates, and structured recovery reporting built on the 4P3X base.',
      portfolioValue: 'Demonstrates the 4P3X methodology at its core — fix-first, preserve-first, validate-first — as a deployable product in its own right. The methodology that built the portfolio becomes the portfolio.',
      futureUse: 'Suitable for software agencies, development teams, technical consultants, product rescuers, and any organisation needing structured project audit and recovery capability.'
    }
  }
];

const USES_DATA = [
  {
    title: 'Learning & Training Platforms',
    text: 'LMS systems, course portals, staff training, certification platforms, onboarding academies, and education products for any sector.',
    who: 'Training providers, schools, employers, academies, charities',
    match: 'V1 Base, AutoSkill OS™, Four Paws Academy™',
    links: [['V1 Base', 'https://basev0.vercel.app/'], ['AutoSkill OS™', 'https://autoskillos.vercel.app/ap3x/demo/index.html'], ['Four Paws', 'https://fourpawsdemo.vercel.app/ap3x/demo/index.html#deploy']]
  },
  {
    title: 'Health, Wellbeing & Support Systems',
    text: 'Therapy support, burnout recovery, welfare check-ins, service-user support, community response, and care coordination systems.',
    who: 'Care organisations, NHS-adjacent services, charities, wellbeing providers',
    match: 'TherapyLink™, Recharge™, ResponseLink OS™',
    links: [['TherapyLink™', 'https://therapylinkos.vercel.app/4p3x_carelink/ap3x/demo/index.html'], ['Recharge™', 'https://burnout-mh.vercel.app/ap3x/companion/index.html'], ['ResponseLink™', 'https://responselinkosv1.vercel.app/']]
  },
  {
    title: 'Fleet, Route & Compliance Systems',
    text: 'Driver PWAs, route planning, fleet compliance, bridge-strike prevention, vehicle profiles, and safety/legal route support.',
    who: 'Transport companies, logistics operators, fleet managers, councils',
    match: "Big V's Best Routes Fleet OS™, V4 20 Base",
    links: [["Big V's Fleet OS™", 'https://bigvsfleetos.vercel.app/'], ['V4 20 Base', 'https://4p3xv20base.vercel.app/#what']]
  },
  {
    title: 'Business Operations & Control Dashboards',
    text: 'Operations dashboards, project rescue systems, task control, workflow centres, team coordination tools, and internal client systems.',
    who: 'Startups, SMEs, consultancies, internal teams, operations managers',
    match: 'V3 10 Base, V4 20 Base, Base Core',
    links: [['V3 10 Base', 'https://4p3x10base.vercel.app/'], ['V4 20 Base', 'https://4p3xv20base.vercel.app/#what'], ['V1 Base', 'https://basev0.vercel.app/']]
  },
  {
    title: 'AI Knowledge Assistants & Explainer Systems',
    text: 'Investor assistants, product explainers, onboarding bots, internal knowledge bases, education assistants, and public-facing AI guides.',
    who: 'Investors, founders, educators, onboarding teams, public sector',
    match: 'Kyzel Clarity™, V1 Base',
    links: [['Kyzel Clarity™', 'https://4p3xkyzelclarityai.netlify.app/'], ['V1 Base', 'https://basev0.vercel.app/']]
  },
  {
    title: 'Compliance, Audit & Evidence Systems',
    text: 'Audit dashboards, evidence capture, legal-readiness, safeguarding records, quantum compliance preparation, and reputation monitoring.',
    who: 'Legal, compliance, HR, safeguarding, regulated industries',
    match: 'Quantum Compliance OS™, TrustSheild OS™, V5 50 Base',
    links: [['Quantum Compliance™', 'https://4p3xaiqc.netlify.app/'], ['TrustSheild OS™', 'https://4p3xaitsos.netlify.app/#/welcome'], ['V5 50 Base', 'https://4p3x50base.vercel.app/']]
  },
  {
    title: 'Multi-Agent AI Operating Systems',
    text: 'Orchestrated AI systems where multiple bounded agents monitor data, explain risk, guide users, generate reports, and support complex decisions.',
    who: 'Advanced tech buyers, platforms, enterprise, AI product studios',
    match: 'V5 50 Base, V6 100 Base Concept',
    links: [['V5 50 Base', 'https://4p3x50base.vercel.app/'], ['V6 100 Base', 'https://4p3x100baseconcept.vercel.app/#top']]
  },
  {
    title: 'Future Sector Product Factories',
    text: 'A repeatable build infrastructure for producing sector-specific dashboards, PWAs, AI-guided tools, and backend-ready products at speed.',
    who: 'Product studios, accelerators, scale-ups, funded projects',
    match: 'V6 100 Base Concept, V2 5 Base',
    links: [['V6 100 Base', 'https://4p3x100baseconcept.vercel.app/#top'], ['V2 5 Base', 'https://4p3xversev2.vercel.app/']]
  }
];

/* ─── RENDER: TIMELINE ─────────────────────────────────── */

function renderTimeline() {
  const grid = document.getElementById('timelineGrid');
  if (!grid) return;
  grid.innerHTML = TIMELINE_DATA.map(t => `
    <a class="time-card${t.active ? ' active' : ''}" href="${t.url}" target="_blank" rel="noopener" role="listitem" aria-label="${t.title} — ${t.stage}">
      <span>${t.version}</span>
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
      <span class="t-link">View live deployment →</span>
      <span class="t-stage">${t.stage}</span>
    </a>
  `).join('');
}

/* ─── RENDER: PROJECTS ─────────────────────────────────── */

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;

  // Proof statement
  const proof = document.createElement('p');
  proof.className = 'projects-proof';
  proof.textContent = '11 live deployed demos prove that one reusable 4P3X base can be refactored into many sector-ready product directions. Demo Mode shows the product. Live Mode runs the product.';
  grid.before(proof);

  grid.innerHTML = PROJECTS_DATA.map((p, i) => `
    <article class="card proj-card" role="listitem" data-index="${i}">
      ${p.screenshot ? `
      <div class="proj-screenshot-wrap">
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="proj-screenshot-link" tabindex="-1" aria-hidden="true">
          <img
            src="${p.screenshot}"
            alt="${p.title} live site preview"
            class="proj-screenshot"
            loading="lazy"
            decoding="async"
          />
          <span class="proj-screenshot-overlay">
            <span class="proj-screenshot-badge">&#x1F517; Open Live Demo</span>
          </span>
        </a>
      </div>` : p.num >= 12 ? `
      <div class="proj-screenshot-wrap proj-screenshot-wrap--pending">
        <div class="proj-screenshot-pending">
          <span class="proj-screenshot-pending-icon">&#x1F4F8;</span>
          <span class="proj-screenshot-pending-text">Screenshot pending — product card added for ecosystem completeness.</span>
        </div>
      </div>` : ''}
      <div class="proj-card-top">
        <div class="proj-num-badge">${p.num}</div>
        <div class="proj-status-badge">
          <span class="proj-dot"></span>${p.status}
        </div>
      </div>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-subtitle">${p.subtitle}</p>
      <p class="proj-purpose">${p.purpose}</p>
      <div class="proj-badges">
        ${p.badges.map(b => `<span class="proj-badge">${b}</span>`).join('')}
      </div>
      <div class="proj-actions">
        ${p.url
          ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn primary proj-btn">Open Live Demo</a>`
          : `<span class="btn primary proj-btn proj-btn--planned" aria-disabled="true">Deployment planned</span>`}
        <button class="btn ghost proj-btn btn-case-study" data-index="${i}" type="button">View details</button>
      </div>
    </article>
  `).join('');

  // Re-bind case study buttons
  grid.querySelectorAll('.btn-case-study').forEach(btn => {
    btn.addEventListener('click', () => openCaseStudy(Number(btn.dataset.index)));
  });
}


/* ─── RENDER: USES ─────────────────────────────────────── */

function renderUses() {
  const list = document.getElementById('usesList');
  if (!list) return;
  list.innerHTML = USES_DATA.map(u => `
    <article class="use-card card" role="listitem">
      <h3>${u.title}</h3>
      <p>${u.text}</p>
      <p style="color:var(--silver);font-size:.85rem;margin-top:.5rem;"><strong style="color:var(--green);">Best match:</strong> ${u.match}</p>
      <p style="color:var(--muted);font-size:.85rem;"><strong style="color:var(--silver);">Who could use it:</strong> ${u.who}</p>
      <div class="use-links">
        ${u.links.map(l => `<a href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ─── NAVIGATION ───────────────────────────────────────── */

function initNav() {
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });

  // Close nav when a link is clicked (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ─── AI AGENTS ────────────────────────────────────────── */

const AGENT_PROFILES = {
  guide: {
    name: '4P3X Portfolio Guide AI™',
    intro: 'Hello — I\'m the 4P3X Portfolio Guide AI™. I can walk investors and reviewers through the 4P3X Verse™ ecosystem, explain the architecture, describe the deployed products, and answer questions about demo/live mode, the founder story, business plan, and investment opportunity. What would you like to know?'
  },
  contact: {
    name: 'Investor Contact Capture AI™',
    intro: 'Hello — I\'m the Investor Contact Capture AI™. I help collect structured interest from investors, partners, employers, clients, grant reviewers, and technical reviewers. The contact form below captures: name, company, email, phone, interest type, project/version interest, message, and consent. In demo mode, submissions are stored locally. In live mode, a secure serverless notification pathway can be configured.'
  },
  notify: {
    name: 'TextBee Notification AI™',
    intro: 'Hello — I\'m the TextBee Notification AI™. I prepare and describe the lead notification workflow. In production, TextBee must be configured through Vercel environment variables and serverless routes only. The /api/textbee-lead.js route reads TEXTBEE_API_KEY, TEXTBEE_DEVICE_ID, and TEXTBEE_RECIPIENT server-side — these credentials are never exposed in frontend code. Configure these in your Vercel project dashboard under Settings → Environment Variables.'
  }
};

const AGENT_KNOWLEDGE = {
  guide: {
    patterns: [
      { test: /about|ciaran|founder|kyzel kreates/i, reply: 'Ciaran (Kyzel Kreates™) is a neurodivergent creator and systems thinker who built the 4P3X Verse™ during a rapid, self-directed learning window. Using AI-assisted development workflows and deep modular systems thinking, Ciaran turned complex internal system ideas into live deployed products. Kyzel Clarity™ was also built as a communication bridge to explain complex architectures clearly.' },
      { test: /demo.?mode|live.?mode|demo.*live|how.*(work|run)/i, reply: 'Demo Mode shows the product exactly as it would work — full UI, flows, and interactions. Live Mode runs the product for real users. The switch is controlled: add a backend (Supabase, Firebase, or REST API), configure authentication, enable persistent data storage, and the same frontend becomes a fully operational live product.' },
      { test: /product|link|deployed|variant|version/i, reply: 'The portfolio includes 11 live deployed product demos: 4P3X Base Core (V1), TherapyLink™, AutoSkill OS™, Big V\'s Best Routes Fleet OS™, ResponseLink OS™, CareerLink OS™, Recharge Burnout Recovery™, Four Paws Training Academy™, Quantum Compliance OS™, TrustSheild OS™, and Kyzel Clarity™. Each is live, installable, and backend-ready.' },
      { test: /invest|opportun|fund|partner|pilot|grant|employ/i, reply: 'The investor opportunity spans: investment, commercial pilots, partnerships, client build contracts, grant applications (training, wellbeing, compliance), employment/contract work, and licensing. The portfolio itself is the proof — 11 live deployed product demos from one base architecture. No paying customers or revenue are currently claimed.' },
      { test: /architectur|diagram|how.*(built|made|work)|structure|technical/i, reply: 'The architecture follows: one reusable 4P3X base → controlled sector refactor → deployed demo/live product → backend-connected operational platform. The control dashboard communicates with a backend API/DB, which syncs to the user-facing PWA in real time once live. The 4P3X Intelligent AI™ layer adds bounded agents on top of this infrastructure.' },
      { test: /timeline|v1|v2|v3|v4|v5|v6|evolution|version/i, reply: 'The 4P3X Verse™ evolution goes: V1 (1 base, fully deployed) → V2 (5 bases, early deployment) → V3 (10 bases, late development) → V4 (20 bases, early development) → V5 (50 bases, early development) → V6 (100 bases, concept stage). Each version multiplies the modular infrastructure capacity.' },
      { test: /pwa|install|app|offline/i, reply: 'Every 4P3X Verse™ product is designed as an installable PWA. After first load, the core shell works offline. Investors can install this portfolio as a device app for offline review, then reconnect to open live demos and submit contact interest.' },
      { test: /business.?plan|revenue|commerc|model/i, reply: 'Revenue pathways include: paid prototype builds, live product conversion, licensing/white label, SaaS subscriptions after backend integration, grant-funded pilots, consultancy/build contracts, and employment/contract work. The business plan section covers executive summary, problem, solution, target customers, roadmap, risk controls, and investor ask.' },
      { test: /clarity|explain|communicate|knowledge/i, reply: 'Kyzel Clarity™ is an installable AI-powered PWA that acts as a project explainer, knowledge assistant, and communication bridge. Its knowledge base can be swapped to cover any subject, product, or sector — making the same structure reusable as an AI assistant for any organisation.' },
      { test: /55|five base|5 base|product direction|directions/i, reply: 'The 55 product directions come from 5 reusable base systems, each capable of producing 11 sector-ready product variants. Base 1 covers Dashboard + PWA coordination (11 directions), Base 2 covers Training + LMS (11 directions), Base 3 covers Support + Recovery + Care (11 directions), Base 4 covers Compliance + Audit + Trust (11 directions), and Base 5 covers Portfolio + AI Agent + Business Intelligence (11 directions). That gives 55 direct product possibilities from 5 reusable architectures.' },
      { test: /combin|bespoke|recombine|cross.?base|mix/i, reply: 'The true commercial opportunity goes beyond the 55 direct product directions. With 5 base systems, the strongest modules from each can be combined: the dashboard logic from one base, the PWA workflow from another, the compliance layer from another, the training engine from another, and the AI agent or reporting layer from another. This creates thousands of possible bespoke client-specific platforms — supporting SaaS products, white-label systems, grant-ready platforms, client builds, and sector-specific operational systems.' },
      { test: /platform.?factor|modular.?factor|product.?factor/i, reply: 'The 4P3X Verse™ is designed as a modular AI-assisted platform factory. Instead of building every client system from scratch, the ecosystem uses reusable base architectures. Each base contains proven components — dashboards, PWAs, AI agent layers, onboarding flows, reporting systems, demo/live mode switching, backend-ready logic, and installable PWA behaviour. Client systems are then assembled from the strongest modules across all available bases, enabling faster delivery and lower cost.' },
      { test: /why.*matter|commercial|saas|white.?label|grant.*platform|investor.*case/i, reply: 'The commercial case for 4P3X Verse™ rests on three things: (1) 11 working deployed product directions already proven from one base architecture; (2) five identified base systems capable of generating 55 direct product directions; and (3) cross-base module combination enabling thousands of bespoke client platforms supporting SaaS, white-label, grant-funded, employment, licensing, and partnership opportunities. No revenue or guaranteed returns are claimed — this is an early-stage modular platform ecosystem with demonstrated execution.' },
      { test: /public.?benefit|social.?value|social.?impact|community.?benefit|wellbeing.*platform|welfare.*tool/i, reply: '4P3X Verse™ has public-benefit potential across six areas: (1) Mental health and wellbeing support through calming PWAs, burnout recovery tools, and reflective check-ins — not a replacement for clinical care, but an accessible support layer; (2) Safer logistics and bridge-strike risk reduction through vehicle profile checks, route hazard awareness, and driver acknowledgement tools — advisory only, not a guaranteed safe route; (3) Community welfare and response support through responder PWAs, welfare check-ins, and supervisor dashboards; (4) Education and training access through learner PWAs, progress tracking, and quiz-gated learning; (5) Trust, compliance, and evidence capture for organisations needing accountability tools; and (6) Accessible digital infrastructure for smaller organisations that cannot afford enterprise systems. All tools are advisory and human-reviewed — no safety, clinical, or legal guarantees are made.' },
      { test: /mental.?health|wellbeing|burnout|calming|recovery|therapy.?support/i, reply: 'The 4P3X Verse™ includes product directions designed to support mental health and wellbeing — not to replace clinical care. These include calming breathing exercises, grounding tools, burnout recovery journeys, daily check-ins, progress tracking, and crisis signposting. They are designed to be accessible, structured, and always-available support tools. Any deployment in clinical, safeguarding, or care settings would require appropriate professional oversight, not software alone.' },
      { test: /bridge.?strike|route.?safe|fleet.?safe|driver|logistics.?risk|vehicle.?height/i, reply: 'The 4P3X Verse™ fleet and route products are designed to support safer logistics by improving driver and controller awareness of vehicle height, width, weight, route restrictions, and hazards. The system includes driver acknowledgement before departure, route confidence scoring, and controller dashboard oversight. Critically, the system does not claim to guarantee a legally safe or incident-free route — human responsibility, local knowledge, and controller review remain essential at all times.' },
      { test: /grant|charity|small.*organi|community.*organi|voluntary|third.?sector/i, reply: 'The 4P3X Verse™ architecture has potential for grant applications across wellbeing, safety, education, and community sectors. The modular design also means smaller organisations — charities, community groups, sole traders, local services — could access structured dashboards, PWAs, AI guidance, and reporting tools without the cost of enterprise software. This makes the ecosystem relevant to public-benefit funders and grant bodies as well as commercial investors.' }
    ],
    fallback: '4P3X Verse™ is a modular AI-powered software ecosystem: one reusable architecture, many deployed product variants, and a clear pathway from demo mode to fully live operational systems. Ask me about the products, architecture, business plan, founder story, or investment opportunity.'
  },
  contact: {
    fallback: 'To get in touch with Ciaran (Kyzel Kreates™), scroll down to the Contact section and complete the interest form. Fields include: name, company, email, phone, interest type (investment, partnership, employment, contract, grant, pilot, technical review, or client build), project/version interest, message, and consent. Demo mode stores leads locally. Configure live backend and TextBee for production notifications.'
  },
  notify: {
    fallback: 'TextBee notifications use the /api/textbee-lead.js Vercel serverless route. Required environment variables: TEXTBEE_API_KEY, TEXTBEE_DEVICE_ID, TEXTBEE_RECIPIENT_PHONE. These are set in Vercel dashboard → Settings → Environment Variables. The frontend never receives or stores these credentials. Set them up, then test with the Admin panel test button.'
  }
};

function agentReply(agent, question) {
  const q = question.toLowerCase().trim();
  if (!q) return null;

  if (agent === 'guide') {
    for (const p of AGENT_KNOWLEDGE.guide.patterns) {
      if (p.test.test(question)) return p.reply;
    }
    return AGENT_KNOWLEDGE.guide.fallback;
  }
  return AGENT_KNOWLEDGE[agent]?.fallback || '4P3X Verse™ demo agent — configure live mode for full AI connectivity.';
}

let activeAgent = 'guide';

function renderAgentIntro() {
  const output = document.getElementById('agentOutput');
  if (!output) return;
  output.innerHTML = `<div class="agent-msg"><strong>${AGENT_PROFILES[activeAgent].name}</strong>${AGENT_PROFILES[activeAgent].intro}</div>`;
}

function initAgents() {
  renderAgentIntro();

  document.querySelectorAll('[data-agent]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-agent]').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeAgent = btn.dataset.agent;
      renderAgentIntro();
      document.getElementById('agentInput')?.focus();
    });
  });

  const sendBtn = document.getElementById('agentSend');
  const input = document.getElementById('agentInput');
  const output = document.getElementById('agentOutput');

  function sendMessage() {
    if (!input || !output) return;
    const q = input.value.trim();
    if (!q) return;
    const reply = agentReply(activeAgent, q);
    output.innerHTML += `<div class="agent-msg user">${escapeHtml(q)}</div>`;
    if (reply) {
      output.innerHTML += `<div class="agent-msg"><strong>${AGENT_PROFILES[activeAgent].name}</strong>${reply}</div>`;
    }
    input.value = '';
    output.scrollTop = output.scrollHeight;
  }

  sendBtn?.addEventListener('click', sendMessage);
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
}

/* ─── CONTACT FORM ─────────────────────────────────────── */

function getLeads() {
  try { return JSON.parse(localStorage.getItem('4p3xInvestorLeads') || '[]'); } catch { return []; }
}

function saveLeads(leads) {
  try { localStorage.setItem('4p3xInvestorLeads', JSON.stringify(leads)); } catch {}
}

function renderLeads() {
  const box = document.getElementById('leadInbox');
  if (!box) return;
  const leads = getLeads();
  if (!leads.length) {
    box.innerHTML = '<p style="color:var(--muted);font-size:.88rem;">No leads captured yet. Submit the contact form to test.</p>';
    return;
  }
  box.innerHTML = leads.slice().reverse().map((l, i) => `
    <div class="lead-entry">
      <strong>${escapeHtml(l.name || 'Unknown')} — ${escapeHtml(l.interest || 'General enquiry')}</strong>
      ${l.company ? `<span>Company: ${escapeHtml(l.company)}</span><br/>` : ''}
      <span>Email: ${escapeHtml(l.email || '—')}</span> · <span>Phone: ${escapeHtml(l.phone || '—')}</span><br/>
      <span>Product interest: ${escapeHtml(l.productInterest || '—')}</span><br/>
      ${l.message ? `<span>Message: ${escapeHtml(l.message.slice(0, 120))}${l.message.length > 120 ? '…' : ''}</span><br/>` : ''}
      <span style="font-size:.78rem;color:var(--muted);">${l.createdAt ? new Date(l.createdAt).toLocaleString() : ''} · Source: ${escapeHtml(l.source || '4P3X Portfolio')}</span>
    </div>
  `).join('');
}


/* ──────────────────────────────────────────────────────────
   INVESTOR ASSISTANT — MAILTO ENQUIRY
   No backend. No email sending. Opens visitor's email app.
─────────────────────────────────────────────────────────── */
function buildMailtoLink(d) {
  const recipient = 'kyzelkreates@gmail.com';
  const subject = `New 4P3X Verse™ Enquiry — ${d.interest} — ${d.name || d.org || 'Enquiry'}`;
  const summary = `${d.name} is interested in ${d.interest}, mainly around ${d.area}. Budget / scale: ${d.budget}.`;
  const body = [
    'New enquiry from the 4P3X Verse™ Investor Portfolio.',
    '',
    'Name:', d.name,
    '',
    'Organisation:', d.org || 'Not provided',
    '',
    'Email:', d.email,
    '',
    'Phone:', d.phone || 'Not provided',
    '',
    'Interest Type:', d.interest,
    '',
    'Area of Interest:', d.area,
    '',
    'Budget / Scale:', d.budget || 'Not provided',
    '',
    'Message:', d.message,
    '',
    'Assistant Summary:', summary,
    '',
    'Consent: Confirmed',
    '',
    'Source: 4P3X Verse™ Investor Portfolio',
    '',
    `Prepared At: ${new Date().toLocaleString()}`
  ].join('\n');
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function initInvestorAssistant() {
  const assistant = document.getElementById('investorAssistant');
  if (!assistant) return;

  const step1 = document.getElementById('iaStep1');
  const step2 = document.getElementById('iaStep2');
  const step3 = document.getElementById('iaStep3');
  const errEl = document.getElementById('iaError');
  const reviewGrid = document.getElementById('iaReviewGrid');

  function showError(msg) {
    errEl.textContent = msg;
    errEl.style.display = 'block';
    errEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function clearError() { errEl.style.display = 'none'; errEl.textContent = ''; }

  function getFormData() {
    return {
      name:     document.getElementById('iaName').value.trim(),
      org:      document.getElementById('iaOrg').value.trim(),
      email:    document.getElementById('iaEmail').value.trim(),
      phone:    document.getElementById('iaPhone').value.trim(),
      interest: document.getElementById('iaInterest').value,
      area:     document.getElementById('iaArea').value,
      budget:   document.getElementById('iaBudget').value,
      message:  document.getElementById('iaMessage').value.trim(),
      consent:  document.getElementById('iaConsent').checked
    };
  }

  function validate(d) {
    if (!d.name) return 'Please enter your full name.';
    if (!d.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return 'Please enter a valid email address.';
    if (!d.interest) return 'Please select an interest type.';
    if (!d.area) return 'Please select an area of interest.';
    if (!d.message || d.message.length < 20) return 'Please enter a message of at least 20 characters.';
    if (!d.consent) return 'Please tick the consent checkbox to proceed.';
    return null;
  }

  // Step 1 → Step 2 (Review)
  document.getElementById('iaReviewBtn').addEventListener('click', () => {
    clearError();
    const d = getFormData();
    const err = validate(d);
    if (err) { showError(err); return; }

    // Build review grid
    const rows = [
      ['Name', d.name],
      ['Organisation', d.org || '—'],
      ['Email', d.email],
      ['Interest Type', d.interest],
      ['Area of Interest', d.area],
      ['Budget / Scale', d.budget],
      ['Message', d.message.length > 200 ? d.message.slice(0, 200) + '…' : d.message]
    ];
    reviewGrid.innerHTML = rows.map(([label, val]) => `
      <div class="ia-review-row">
        <span class="ia-review-label">${label}</span>
        <span class="ia-review-val">${val.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
      </div>`).join('');

    step1.style.display = 'none';
    step2.style.display = 'block';
    step2.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Step 2 → Step 1 (Edit)
  document.getElementById('iaEditBtn').addEventListener('click', () => {
    step2.style.display = 'none';
    step1.style.display = 'block';
    step1.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Step 2 → Open mailto → Step 3
  document.getElementById('iaSubmitBtn').addEventListener('click', () => {
    const d = getFormData();
    const err = validate(d);
    if (err) { step2.style.display = 'none'; step1.style.display = 'block'; showError(err); return; }

    const link = buildMailtoLink(d);
    window.location.href = link;

    // Small delay then show confirmation
    setTimeout(() => {
      step2.style.display = 'none';
      step3.style.display = 'block';
      step3.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
  });

  // Step 3 → Restart
  document.getElementById('iaRestartBtn').addEventListener('click', () => {
    step3.style.display = 'none';
    step1.style.display = 'block';
    document.getElementById('iaName').value = '';
    document.getElementById('iaOrg').value = '';
    document.getElementById('iaEmail').value = '';
    document.getElementById('iaPhone').value = '';
    document.getElementById('iaInterest').value = '';
    document.getElementById('iaArea').value = '';
    document.getElementById('iaBudget').value = 'Not provided';
    document.getElementById('iaMessage').value = '';
    document.getElementById('iaConsent').checked = false;
    step1.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function initContactForm() {
  const form = document.getElementById('leadForm');
  const statusEl = document.getElementById('leadStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const lead = Object.fromEntries(fd.entries());

    if (!lead.name?.trim()) { showStatus('error', 'Please enter your name.'); return; }
    if (!lead.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) { showStatus('error', 'Please enter a valid email address.'); return; }
    if (!lead.consent) { showStatus('error', 'Please tick the consent checkbox to proceed.'); return; }

    lead.createdAt = new Date().toISOString();
    lead.source = '4P3X Verse™ Investor Portfolio';

    const leads = getLeads();
    leads.push(lead);
    saveLeads(leads);

    // Attempt live serverless notification (graceful failure)
    try {
      const res = await fetch('/api/textbee-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead)
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        showStatus('success', '✓ Interest submitted and notification sent. Thank you — Ciaran will be in touch.');
      } else if (res.status === 503) {
        showStatus('success', '✓ Interest saved in demo lead inbox. TextBee notifications are not yet configured — this is expected in demo mode. Thank you!');
      } else {
        showStatus('success', '✓ Interest saved locally. Thank you — we will be in touch.');
      }
    } catch {
      showStatus('success', '✓ Interest saved in demo lead inbox. Thank you — Ciaran will be in touch.');
    }

    form.reset();
    renderLeads();
  });

  function showStatus(type, msg) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = `visible ${type}`;
    setTimeout(() => { statusEl.className = ''; }, 8000);
  }
}

/* ─── ADMIN ────────────────────────────────────────────── */

function initAdmin() {
  renderLeads();

  document.getElementById('exportLeads')?.addEventListener('click', () => {
    const leads = getLeads();
    if (!leads.length) { alert('No leads to export yet.'); return; }
    const blob = new Blob([JSON.stringify(leads, null, 2)], { type: 'application/json' });
    downloadBlob(blob, '4p3x-investor-leads.json');
  });

  document.getElementById('exportCsv')?.addEventListener('click', () => {
    const leads = getLeads();
    if (!leads.length) { alert('No leads to export yet.'); return; }
    const cols = ['name','company','email','phone','interest','productInterest','message','createdAt'];
    const rows = [cols.join(','), ...leads.map(l => cols.map(c => `"${(l[c] || '').replace(/"/g, '""')}"`).join(','))];
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    downloadBlob(blob, '4p3x-investor-leads.csv');
  });

  document.getElementById('clearLeads')?.addEventListener('click', () => {
    if (confirm('Clear all demo leads? This cannot be undone.')) {
      localStorage.removeItem('4p3xInvestorLeads');
      renderLeads();
    }
  });

  document.getElementById('liveModeToggle')?.addEventListener('change', (e) => {
    const badge = document.getElementById('modeStatus');
    if (!badge) return;
    if (e.target.checked) {
      badge.textContent = '⚡ Live Mode (Backend Required)';
      badge.className = 'status-badge warn';
    } else {
      badge.textContent = '⚙ Demo Mode Active';
      badge.className = 'status-badge warn';
    }
  });

  document.getElementById('testTextbee')?.addEventListener('click', async () => {
    const btn = document.getElementById('testTextbee');
    btn.textContent = 'Testing…';
    btn.disabled = true;
    try {
      const res = await fetch('/api/textbee-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'TEST', email: 'test@4p3xverse.com', interest: 'test', source: 'Admin Test' })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        document.getElementById('textbeeStatus').textContent = '✓ TextBee: Connected';
        document.getElementById('textbeeStatus').className = 'status-badge ok';
        alert('TextBee test sent successfully.');
      } else if (res.status === 503) {
        alert('TextBee is not configured. Add TEXTBEE_API_KEY, TEXTBEE_DEVICE_ID, and TEXTBEE_RECIPIENT_PHONE to your Vercel environment variables.');
      } else {
        alert('TextBee test returned an error. Check Vercel function logs.');
      }
    } catch {
      alert('TextBee serverless route is not reachable. Deploy to Vercel first, then configure environment variables.');
    }
    btn.textContent = 'Test TextBee (Requires Setup)';
    btn.disabled = false;
  });
}

/* ─── PWA INSTALL ──────────────────────────────────────── */

let deferredInstall = null;


/* ─── CASE STUDY MODAL ─────────────────────────────────── */

function openCaseStudy(index) {
  const p = PROJECTS_DATA[index];
  if (!p?.caseStudy) return;
  const cs = p.caseStudy;

  const modal = document.getElementById('caseStudyModal');
  const inner = document.getElementById('caseStudyInner');
  if (!modal || !inner) return;

  inner.innerHTML = `
    <div class="cs-header">
      <div>
        <span class="eyebrow" style="color:var(--green);">Case Study</span>
        <h2 class="cs-title">${escapeHtml(p.title)}</h2>
        <p class="cs-subtitle">${escapeHtml(p.subtitle)}</p>
      </div>
      <button class="cs-close" id="csCloseBtn" aria-label="Close case study">&#x2715;</button>
    </div>
    <div class="cs-body">
      ${cs.problem ? `<div class="cs-row cs-row--highlight"><span class="cs-label">&#x1F6AB; Problem</span><p class="cs-text">${escapeHtml(cs.problem)}</p></div>` : ''}
      ${cs.solution ? `<div class="cs-row cs-row--highlight"><span class="cs-label">&#x2705; Solution</span><p class="cs-text">${escapeHtml(cs.solution)}</p></div>` : ''}
      <div class="cs-row">
        <span class="cs-label">&#x1F464; Who</span>
        <p class="cs-text">${escapeHtml(cs.who)}</p>
      </div>
      <div class="cs-row">
        <span class="cs-label">&#x1F4E6; What was built</span>
        <p class="cs-text">${escapeHtml(cs.what)}</p>
      </div>
      ${cs.architecture ? `<div class="cs-row"><span class="cs-label">&#x1F3D7; Architecture</span><p class="cs-text">${escapeHtml(cs.architecture)}</p></div>` : ''}
      <div class="cs-row">
        <span class="cs-label">&#x1F4CD; Where</span>
        <p class="cs-text">${escapeHtml(cs.where)}</p>
      </div>
      <div class="cs-row">
        <span class="cs-label">&#x1F4C5; When</span>
        <p class="cs-text">${escapeHtml(cs.when)}</p>
      </div>
      <div class="cs-row">
        <span class="cs-label">&#x2699;&#xFE0F; How</span>
        <p class="cs-text">${escapeHtml(cs.how)}</p>
      </div>
      ${cs.portfolioValue ? `<div class="cs-row cs-row--value"><span class="cs-label">&#x1F4CA; Portfolio value</span><p class="cs-text">${escapeHtml(cs.portfolioValue)}</p></div>` : ''}
      ${cs.futureUse ? `<div class="cs-row cs-row--future"><span class="cs-label">&#x1F680; Future commercial use</span><p class="cs-text">${escapeHtml(cs.futureUse)}</p></div>` : ''}
    </div>
    <div class="cs-footer">
      ${p.url
        ? `<a href="${escapeHtml(p.url)}" target="_blank" rel="noopener" class="btn primary cs-cta">Open live deployment &rarr;</a>`
        : `<span class="btn primary cs-cta cs-cta--planned" aria-disabled="true">Deployment planned</span>`}
      <button class="btn ghost cs-close-btn" id="csCloseBtn2">Close</button>
    </div>
  `;

  modal.removeAttribute('hidden');
  modal.offsetHeight; // force reflow for transition
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('csCloseBtn')?.addEventListener('click', closeCaseStudy);
  document.getElementById('csCloseBtn2')?.addEventListener('click', closeCaseStudy);
}

function closeCaseStudy() {
  const modal = document.getElementById('caseStudyModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { modal.setAttribute('hidden', ''); }, 280);
}

function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCaseStudy();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCaseStudy();
  });
}

function initPwa() {
  const installBtn = document.getElementById('installPwaBtn');
  const pwaStatus = document.getElementById('pwaStatus');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstall = e;
    if (installBtn) installBtn.textContent = 'Install Portfolio PWA ↓';
    if (pwaStatus) pwaStatus.textContent = 'Click the button above to install this portfolio as a device app.';
  });

  installBtn?.addEventListener('click', async () => {
    if (deferredInstall) {
      deferredInstall.prompt();
      const { outcome } = await deferredInstall.userChoice;
      if (outcome === 'accepted') {
        if (pwaStatus) pwaStatus.textContent = '✓ Portfolio installed successfully as a device app.';
        installBtn.textContent = '✓ Installed';
        installBtn.disabled = true;
      }
      deferredInstall = null;
    } else if (window.matchMedia('(display-mode: standalone)').matches) {
      if (pwaStatus) pwaStatus.textContent = '✓ Portfolio is already installed on this device.';
    } else {
      if (pwaStatus) pwaStatus.textContent = 'To install: open this page in Chrome/Edge and use the browser\'s "Add to Home Screen" or "Install App" option.';
    }
  });

  window.addEventListener('appinstalled', () => {
    if (pwaStatus) pwaStatus.textContent = '✓ 4P3X Verse™ Portfolio is now installed on your device.';
  });

  document.getElementById('downloadInfoPack')?.addEventListener('click', () => {
    fetch('./4p3x-verse-investor-info-pack.json')
      .then(r => r.blob())
      .then(blob => downloadBlob(blob, '4p3x-verse-investor-info-pack.json'))
      .catch(() => alert('Info pack not found. Ensure 4p3x-verse-investor-info-pack.json is in the project root.'));
  });
}

/* ─── UTILS ────────────────────────────────────────────── */

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/* ─── INIT ─────────────────────────────────────────────── */


/* ─── ADMIN LOCK ───────────────────────────────────────── */

const PASS_KEY    = '4p3x_admin_hash';
const DEFAULT_PASS = '4P3X-ADMIN';

async function hashPass(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

async function getStoredHash() {
  return localStorage.getItem(PASS_KEY) || await hashPass(DEFAULT_PASS);
}

async function initAdminLock() {
  const lockScreen  = document.getElementById('adminLock');
  const content     = document.getElementById('adminContent');
  const unlockBtn   = document.getElementById('adminUnlockBtn');
  const lockBtn     = document.getElementById('adminLockBtn');
  const passInput   = document.getElementById('adminPassInput');
  const lockError   = document.getElementById('adminLockError');

  if (!lockScreen || !content) return;

  function lock() {
    lockScreen.style.display = 'flex';
    content.style.display    = 'none';
    if (passInput) passInput.value = '';
  }

  async function tryUnlock() {
    const val = passInput?.value?.trim();
    if (!val) return;
    const entered  = await hashPass(val);
    const stored   = await getStoredHash();
    if (entered === stored) {
      lockScreen.style.display = 'none';
      content.style.display    = 'block';
      if (lockError) lockError.style.display = 'none';
      renderLeads(); // refresh inbox on unlock
    } else {
      if (lockError) { lockError.textContent = 'Incorrect passcode. Try again.'; lockError.style.display = 'block'; }
      passInput?.select();
    }
  }

  unlockBtn?.addEventListener('click', tryUnlock);
  passInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryUnlock(); });
  lockBtn?.addEventListener('click', lock);

  // Passcode change
  document.getElementById('changePassBtn')?.addEventListener('click', async () => {
    const old     = document.getElementById('passOld')?.value?.trim();
    const nw      = document.getElementById('passNew')?.value?.trim();
    const confirm = document.getElementById('passConfirm')?.value?.trim();
    const msgEl   = document.getElementById('passMsg');

    const showMsg = (text, ok) => {
      if (!msgEl) return;
      msgEl.style.display = 'block';
      msgEl.style.color   = ok ? 'var(--green)' : 'var(--danger)';
      msgEl.textContent   = text;
    };

    if (!old || !nw || !confirm) return showMsg('Please fill in all three fields.', false);
    if (nw !== confirm)          return showMsg('New passcode and confirmation do not match.', false);
    if (nw.length < 6)           return showMsg('New passcode must be at least 6 characters.', false);

    const oldHash    = await hashPass(old);
    const storedHash = await getStoredHash();
    if (oldHash !== storedHash)  return showMsg('Current passcode is incorrect.', false);

    const newHash = await hashPass(nw);
    localStorage.setItem(PASS_KEY, newHash);
    showMsg('✓ Passcode updated successfully.', true);
    ['passOld','passNew','passConfirm'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  });

  // Admin nav visibility toggle
  const adminNavToggle = document.getElementById('toggleAdminNav');
  const adminNavLink   = document.querySelector('nav a[href="#admin"]');
  const NAV_KEY        = '4p3x_admin_nav_visible';

  if (adminNavToggle && adminNavLink) {
    const savedVis = localStorage.getItem(NAV_KEY);
    const visible  = savedVis === null ? true : savedVis === 'true';
    adminNavToggle.checked        = visible;
    adminNavLink.style.display    = visible ? '' : 'none';

    adminNavToggle.addEventListener('change', () => {
      const show = adminNavToggle.checked;
      adminNavLink.style.display = show ? '' : 'none';
      localStorage.setItem(NAV_KEY, show);
    });
  }
}

/* ─── TEXTBEE CONFIG UI ────────────────────────────────── */

function initTextbeeConfig() {
  const saveBtn  = document.getElementById('saveTextbeeBtn');
  const testBtn2 = document.getElementById('testTextbeeBtn2');
  const msgEl    = document.getElementById('textbeeConfigMsg');
  const badge    = document.getElementById('textbeeStatus');

  function showCfgMsg(text, ok) {
    if (!msgEl) return;
    msgEl.style.display = 'block';
    msgEl.style.color   = ok ? 'var(--green)' : 'var(--danger)';
    msgEl.textContent   = text;
  }

  saveBtn?.addEventListener('click', async () => {
    const apiKey       = document.getElementById('cfgApiKey')?.value?.trim();
    const deviceId     = document.getElementById('cfgDeviceId')?.value?.trim();
    const phone        = document.getElementById('cfgPhone')?.value?.trim();
    const vercelToken  = document.getElementById('cfgVercelToken')?.value?.trim();
    const projectId    = document.getElementById('cfgVercelProject')?.value?.trim();
    const teamId       = document.getElementById('cfgVercelTeam')?.value?.trim();

    if (!apiKey || !deviceId || !phone) return showCfgMsg('Please enter your TextBee API key, device ID, and recipient phone.', false);
    if (!vercelToken || !projectId)     return showCfgMsg('Please enter your Vercel API token and project ID.', false);

    saveBtn.textContent = 'Saving…';
    saveBtn.disabled    = true;

    try {
      const res = await fetch('/api/save-textbee-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey, deviceId, phone, vercelToken, projectId, teamId: teamId || undefined })
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        showCfgMsg('✓ ' + data.message, true);
        if (badge) { badge.textContent = '✓ TextBee: Configured — Redeploy Vercel to activate'; badge.className = 'status-badge ok'; }
        // Clear sensitive fields from memory
        ['cfgApiKey','cfgVercelToken'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
      } else {
        const detail = (data.results || []).filter(r => r.status === 'error').map(r => `${r.key}: ${r.detail}`).join('; ');
        showCfgMsg('⚠ ' + (data.message || 'Save failed.') + (detail ? ` (${detail})` : ''), false);
      }
    } catch (err) {
      showCfgMsg('⚠ Request failed. Make sure you are on a deployed Vercel URL, not localhost.', false);
    }

    saveBtn.textContent = 'Save to Vercel →';
    saveBtn.disabled    = false;
  });

  // Shared test button (works same as admin panel test)
  testBtn2?.addEventListener('click', async () => {
    testBtn2.textContent = 'Testing…';
    testBtn2.disabled    = true;
    try {
      const res  = await fetch('/api/textbee-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'TEST', email: 'test@4p3xverse.com', interest: 'Admin test', source: 'Admin Panel' })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        showCfgMsg('✓ TextBee test message sent successfully!', true);
        if (badge) { badge.textContent = '✓ TextBee: Connected'; badge.className = 'status-badge ok'; }
      } else if (res.status === 503) {
        showCfgMsg('TextBee is not yet configured. Use the form above to save your credentials to Vercel first.', false);
      } else {
        showCfgMsg('TextBee returned an error. Check your Vercel function logs.', false);
      }
    } catch {
      showCfgMsg('TextBee route not reachable. Deploy to Vercel first.', false);
    }
    testBtn2.textContent = 'Test TextBee';
    testBtn2.disabled    = false;
  });
}

/* ─── INIT ─────────────────────────────────────────────── */


/* ══════════════════════════════════════════════════════════
   SPA PAGE ROUTER
   Hash-based. Each section = its own "page".
   All transitions wired. Back/forward button supported.
══════════════════════════════════════════════════════════ */

const SPA_PAGES = [
  'top','about','investor','platform-factory','five-bases',
  'build-validation','public-benefit','valuation','business','timeline','products',
  'clarity','uses','architecture','agents','contact',/*'admin' — accessed via Owner Admin btn only*/'pwa'
];

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '').trim();
  return SPA_PAGES.includes(hash) ? hash : 'top';
}

function showPage(pageId, pushState = true) {
  const target  = SPA_PAGES.includes(pageId) ? pageId : 'top';
  const prevId  = document.querySelector('section.page-visible')?.id || null;
  const prevIdx = SPA_PAGES.indexOf(prevId);
  const nextIdx = SPA_PAGES.indexOf(target);
  const dir     = (prevIdx < 0 || nextIdx > prevIdx) ? 'forward' : 'back';

  // Update nav active state
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('nav-active', el.dataset.page === target);
  });

  // Update progress bar
  const progressBar = document.getElementById('pageProgress');
  if (progressBar) {
    const idx = SPA_PAGES.indexOf(target);
    const pct = Math.round(((idx + 1) / SPA_PAGES.length) * 100);
    progressBar.style.setProperty('--progress', pct + '%');
    progressBar.style.display = 'block';
  }

  // Find the sections
  const incoming = document.getElementById(target);
  const outgoing = prevId ? document.getElementById(prevId) : null;

  if (!incoming) return;

  // Outgoing: quick fade out
  if (outgoing && outgoing !== incoming) {
    outgoing.classList.remove('page-visible');
    outgoing.classList.add('page-hidden');
    outgoing.removeAttribute('data-dir');
  }

  // Incoming: set direction, then trigger enter animation
  incoming.setAttribute('data-dir', dir);
  incoming.classList.remove('page-hidden');
  // Force reflow so animation re-fires if same page
  void incoming.offsetWidth;
  incoming.classList.add('page-visible');

  // Update browser history
  if (pushState) {
    history.pushState({ page: target }, '', '#' + target);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Close mobile nav if open
  const nav = document.querySelector('[data-nav]');
  const menuBtn = document.querySelector('[data-menu-toggle]');
  if (nav)    nav.classList.remove('open');
  if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
}

function initRouter() {
  // Wire all [data-page] links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-page]');
    if (!link) return;
    const page = link.dataset.page;
    if (!page || !SPA_PAGES.includes(page)) return;
    e.preventDefault();
    showPage(page, true);
  });

  // Handle browser back/forward
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || getPageFromHash();
    showPage(page, false);
  });

  // Initial render from hash
  const initial = getPageFromHash();
  showPage(initial, false);
  // Replace current state with page info
  history.replaceState({ page: initial }, '', '#' + initial);
}


// ── Valuation source accordion ──────────────────────────────────
function initValSourceAccordion() {
  const btn  = document.getElementById('valSourceToggle');
  const body = document.getElementById('valSourceBody');
  if (!btn || !body) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if (expanded) {
      body.setAttribute('hidden', '');
    } else {
      body.removeAttribute('hidden');
    }
    const icon = btn.querySelector('.val-source-toggle-icon');
    if (icon) icon.textContent = expanded ? '▾' : '▴';
  });
}


// ── Owner Admin discreet access ────────────────────────────────
function initOwnerAdmin() {
  const btn     = document.getElementById('ownerAdminBtn');
  const section = document.getElementById('admin');
  if (!btn || !section) return;

  // Hide admin section from normal scroll flow by default
  // (it remains in DOM, passcode-protected, accessible via btn or #admin hash)
  section.style.display = 'none';

  function showAdmin() {
    section.style.display = '';
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  btn.addEventListener('click', showAdmin);

  // Also show if URL hash is #admin on load
  if (window.location.hash === '#admin') showAdmin();

  // Listen for hash change (e.g. user pastes #admin URL)
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin') showAdmin();
  });
}


// ── AI guide question chips ──────────────────────────────────────
function initAgentChips() {
  document.querySelectorAll('.agent-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const input = document.getElementById('agentInput');
      const send  = document.getElementById('agentSend');
      if (!input || !send) return;
      input.value = chip.dataset.chip || chip.textContent.trim();
      input.focus();
      send.click();
    });
  });
}


/* ═══════════════════════════════════════════════════════════
   DIAGRAM LIGHTBOX
   Click any .diag-img → full-screen overlay, landscape-forced
   Close: Back button | ESC key | tap outside image
═══════════════════════════════════════════════════════════ */
function initDiagLightbox() {
  const lb       = document.getElementById('diagLightbox');
  const lbImg    = document.getElementById('diagLbImg');
  const lbCap    = document.getElementById('diagLbCaption');
  const lbBack   = document.getElementById('diagLbBack');
  if (!lb || !lbImg || !lbBack) return;

  // ── Make every diagram image clickable ──────────────────
  document.querySelectorAll('.diag-img').forEach(img => {
    img.setAttribute('role', 'button');
    img.setAttribute('tabindex', '0');
    img.setAttribute('aria-label', 'View diagram full screen');
    img.style.cursor = 'zoom-in';

    const open = () => openLightbox(img);
    img.addEventListener('click', open);
    img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });

  // ── Open ────────────────────────────────────────────────
  function openLightbox(img) {
    lbImg.src = img.src;
    lbImg.alt = img.alt;

    // Caption: try sibling figcaption first, then alt text
    const fig = img.closest('figure');
    const capEl = fig ? fig.querySelector('figcaption') : null;
    lbCap.textContent = capEl ? capEl.textContent.trim() : img.alt;

    lb.style.display = 'flex';
    // Tiny delay so display:flex has painted before class triggers transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => lb.classList.add('diag-lb--open'));
    });

    document.body.style.overflow = 'hidden';
    lbBack.focus();

    // Request landscape lock on supported mobile browsers
    try {
      screen.orientation.lock('landscape').catch(() => {});
    } catch (_) {}
  }

  // ── Close ───────────────────────────────────────────────
  function closeLightbox() {
    lb.classList.remove('diag-lb--open');
    lb.addEventListener('transitionend', function handler() {
      lb.style.display = 'none';
      lb.removeEventListener('transitionend', handler);
    }, { once: true });

    document.body.style.overflow = '';

    try { screen.orientation.unlock(); } catch (_) {}
  }

  lbBack.addEventListener('click', closeLightbox);

  // Close on backdrop tap (outside the image)
  lb.addEventListener('click', e => {
    if (e.target === lb || e.target.classList.contains('diag-lb-stage')) {
      closeLightbox();
    }
  });

  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lb.classList.contains('diag-lb--open')) {
      closeLightbox();
    }
  });

  // Touch swipe down to close (mobile)
  let touchStartY = 0;
  lb.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
  lb.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientY - touchStartY;
    if (delta > 60) closeLightbox();  // swipe down 60px+ = close
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderProjects();
  renderUses();
  initNav();
  initAgents();
  initInvestorAssistant();
  initContactForm();
  initAdmin();
  initPwa();
  initAdminLock();
  initTextbeeConfig();
  initCaseStudyModal();
  initValSourceAccordion();
  initOwnerAdmin();
  initAgentChips();
  initRouter();
  initDiagLightbox();
});
