export const site = {
  name: "NexaCura",
  legal: "NexaCura Healthcare",
  tagline: "A Physiological Intelligence System.",
  category: "Physiological Intelligence System",
  covenant:
    "Every conclusion is traceable. Every signal has context. Every decision remains human.",
  promise:
    "NexaCura Healthcare reads the conversation between its systems — continuously, in plain language, with evidence a clinician can trust — before those connections become problems.",
  email: "shivendra.singh@nexacurahealthcare.com",
  phone: "+852-44272948",
  website: "https://nexacurahealthcare.com",
} as const;

export const nav = [
  { href: "/approach", label: "How it works" },
  { href: "/solutions", label: "Who it's for" },
  { href: "/story", label: "Story" },
  { href: "/contact", label: "Contact" },
] as const;

export const founder = {
  name: "Shivendra Singh",
  role: "Founder & CEO",
  image: "/images/shivendra.jpg",
  linkedin: "https://www.linkedin.com/in/shivendra-singh-21401880",
  bio: "Background across medical technology automation, robotics, neuro-linguistic programming, and artificial intelligence. A whole-person philosophy of health: how nutrition, environment, and lifestyle move through biology together — not as isolated biomarkers.",
} as const;

export const advisors = [
  {
    name: "Christopher Lee",
    role: "Advisor",
    linkedin: "https://www.linkedin.com/in/christopherlee100/",
    image: "/images/christopher-lee.jpg",
    bio: "Investor and board member. Senior partner at FAA Investments. Previously a managing director at Deutsche Bank, UBS, and Bank of America Merrill Lynch.",
  },
  {
    name: "Dr Karthik Anantharaman",
    role: "Advisor",
    linkedin: "https://www.linkedin.com/in/karthikanantharaman/",
    image: "/images/karthik-anantharaman.jpg",
    bio: "Physician and healthcare operator. Vice President, International Sales at Apollo Hospitals, with earlier leadership at BPL Medical Technologies, Biocon, and GE Healthcare.",
  },
] as const;

export const builders = [
  {
    name: "Praneet Maroo",
    role: "Head of Technology",
    linkedin: "https://www.linkedin.com/in/praneetmaroo/",
    image: "/images/praneet.jpg",
    bio: "9+ years in hardware and software. After IIT Kharagpur, he held engineering roles across global teams at IBM, Delta Electronics, and Walmart. He leads the technology at NexaCura Healthcare: system architecture, end-to-end product development, and applied machine learning, from concept through to a working product.",
  },
  {
    name: "Aman Singh",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/aman-singh-8b48a51a5/",
    image: "/images/Aman.png",
    bio: "5+ years of experience in software development, specializing in Laravel, React.js, and API development. He builds scalable web applications and RESTful APIs, with hands-on experience in MySQL and modern web technologies. Focused on developing reliable, efficient, and user-friendly solutions from development to deployment.",
    },
] as const;

export const steps = [
  {
    n: "01",
    title: "Signals in",
    body: "ECG, a ring, and — later — CGM send their data into one pipeline.",
    sources: ["ECG", "Ring", "CGM · later"],
  },
  {
    n: "02",
    title: "Unified pipeline",
    body: "Those streams are synced in time and pre-processed, so they can be read together.",
    sources: [],
  },
  {
    n: "03",
    title: "Correlation engine",
    body: "The brain of the system. It finds which signals moved together.",
    sources: [],
  },
  {
    n: "04",
    title: "AI Assist",
    body: "It reads that correlation, adds what the person reports, and sends the full picture to the clinician dashboard.",
    sources: [],
  },
] as const;

export const buyers = [
  {
    id: "patients",
    kicker: "Patients & caregivers",
    title: "A coherent story of the body",
    question: "What is happening with my body, and what does it mean for me?",
    body: "For anyone who wants to understand their own health, and for the people who watch with them. A baseline in 24 hours. One plain-language reading of what moved together — not a score.",
    points: [
      "A daily summary in plain language",
      "Compared with your own baseline, not a population average",
      "Share it with a clinician or family when you want",
    ],
    image: "/images/home.jpg",
    alt: "A person at home in morning light, wearing a simple watch",
  },
  {
    id: "clinicians",
    kicker: "Hospitals & clinicians",
    title: "See what happened between appointments",
    question: "What changed since I last saw this patient, and what deserves my attention?",
    body: "When someone shares a reading, the clinician sees what changed, and the evidence behind it. The clinician decides. Wellness and remote monitoring today, on the way toward clinical care.",
    points: [
      "What changed since the last look",
      "The evidence path, not a wall of charts",
      "You remain the decision-maker",
    ],
    image: "/images/consult.jpg",
    alt: "Clinician and patient reviewing a tablet together",
  },
  {
    id: "pharma",
    kicker: "Pharmaceutical partners",
    title: "The longitudinal signal a trial was missing",
    question: "What patterns are emerging across this population, and how do they relate to outcomes?",
    body: "Later. Patterns across many people come only after individuals are already understood. Not where we start.",
    points: [
      "A longer view than a single snapshot",
      "Whole-person context around a question",
      "Known baselines, not a day of strangers",
    ],
    image: "/images/lab.jpg",
    alt: "Quiet laboratory at dusk with teal glass and open journals",
  },
] as const;

export const helpCases = [
  {
    n: "01",
    title: "Understand your health",
    body: "A baseline in 24 hours. One plain-language reading of what moved together. Not a score.",
    image: "/images/help-understand.jpg",
    alt: "A person by a bright window, notebook closed",
  },
  {
    n: "02",
    title: "See a change early",
    body: "Drifts are read against your own baseline, while there is still time to ask.",
    image: "/images/help-drift.jpg",
    alt: "A person pausing at the door, looking at a watch",
  },
  {
    n: "03",
    title: "Share the same reading",
    body: "When you want a clinician to look, they see the reading and the evidence path behind it.",
    image: "/images/help-share.jpg",
    alt: "Two people sharing one page across a table",
  },
  {
    n: "04",
    title: "Between appointments",
    body: "The clinician sees what changed since the last visit, not a wall of charts.",
    image: "/images/help-between.jpg",
    alt: "An empty chair by a tall clinic window",
  },
  {
    n: "05",
    title: "The clinician decides",
    body: "Nothing is diagnosed in the dark. The instrument informs. The clinician decides.",
    image: "/images/help-decides.jpg",
    alt: "Hands holding a closed folder in window light",
  },
  {
    n: "06",
    title: "Research, later",
    body: "Patterns across many people come after individuals are already understood.",
    image: "/images/help-research.jpg",
    alt: "Pale sample vials on glass shelves at dusk",
  },
] as const;

export const differences = [
  {
    title: "Built toward SaMD from the first line",
    body: "We are not a cleared Software as a Medical Device today. That is the vision. From day one the work follows the quality, traceability, and intended-use discipline that path requires.",
  },
  {
    title: "Physiology and psychology, together",
    body: "Most platforms split the body from the mind. NexaCura Healthcare reads them as they actually operate: in conversation, over time.",
  },
  {
    title: "Explainable by design",
    body: "Every insight is traceable to its signals, its window, and its confidence. We never sell or soften the truth we find.",
  },
  {
    title: "The clinician is the point",
    body: "NexaCura Healthcare is an instrument, not an autonomous doctor. Intelligence is valuable only when it is transparent and worthy of judgment.",
  },
] as const;

export const capabilities = [
  {
    title: "Longitudinal synthesis",
    body: "Not snapshots. Continuous understanding of how systems interact and evolve — the story that only appears when you stop treating the body as separate rooms.",
  },
  {
    title: "Explainable insights",
    body: "Every recommendation or alert carries the evidence path that produced it. Confidence is stated plainly. Uncertainty is not performed away.",
  },
  {
    title: "Multi-stakeholder views",
    body: "The same underlying physiological model surfaces differently for patients, caregivers, clinicians, and research teams — each with the appropriate level of detail and actionability.",
  },
  {
    title: "On the path to SaMD",
    body: "Wellness and remote monitoring today. The work is already traceable, so Software as a Medical Device is the direction, not a claim we make now.",
  },
] as const;

export const signals = [
  { label: "Heart rate", hint: "Pulse" },
  { label: "ECG", hint: "Rhythm" },
  { label: "SpO2", hint: "Oxygen" },
  { label: "Respiratory rate", hint: "Breathing" },
  { label: "Temperature", hint: "Heat" },
  { label: "Sleep pattern", hint: "Night" },
  { label: "Daily activity", hint: "Load" },
  { label: "Heart-rate variability", hint: "Recovery" },
] as const;

export const notThis = [
  {
    title: "Not a score to chase",
    body: "The first launch is wellness and remote monitoring, on the way toward clinical care. Still no streaks, no arbitrary scores, and no one left to interpret the data alone.",
  },
  {
    title: "Not an autonomous doctor",
    body: "We will never claim to replace clinical judgment. The clinician is the hero. NexaCura Healthcare is the instrument.",
  },
  {
    title: "Not a company that softens the truth",
    body: "Commercially inconvenient findings are still findings. Your body belongs to you. The truth about your body belongs to you.",
  },
] as const;

export const manifesto = [
  {
    means: "One body. One story.",
    text: "We believe the body has always been telling the full story.",
  },
  {
    means: "Care split the body into rooms. The body never did.",
    text: "Every hour of sleep, every change in rhythm, every weight you carry — none of it happens alone. The body does not keep its systems in separate rooms. It never has. We built a healthcare system that does, and then we wondered why the most important warnings arrived last.",
  },
  {
    means: "A hospital room, and a room alone. That is where this started.",
    text: "We were built from two rooms — a hospital room where the signals existed and no one connected them, and an isolation room where one of us learned, in his own body, that everything answers everything else. That grief is the fuel. This instrument is the response.",
  },
  {
    means: "Show one pattern, while there is still time. The clinician decides.",
    text: "We believe understanding is a form of care. We believe the most powerful thing a health platform can do is surface one clear, honest, traceable pattern — not a wall of metrics — while there is still time to act on it. We believe uncertainty stated plainly builds more trust than confidence performed. We believe the clinician is not our competition; the clinician is the point.",
  },
  {
    means: "Read it. Tell the truth. Someone who can act is listening.",
    text: "We will read the conversation between your body's systems. We will tell you the truth about what we find. We will make sure someone who can act on it is always listening. And we will never, at any scale, become the system we were built to replace.",
  },
] as const;

export const thesis =
  "NexaCura Healthcare is a physiological intelligence platform — an instrument that reads the conversation happening between the body's systems, continuously and over time, for the person living in that body and the clinician caring for it. It serves the data-rich and meaning-poor: people carrying quiet worry, caregivers watching for change, clinicians deciding from fragments. It begins as wellness and remote monitoring, on the way toward clinical care. It refuses to be an autonomous doctor, or a company that sells or softens the truth it finds. It promises to surface the connections that matter — traceable, explainable, honest about confidence — before they become problems.";

export const beachhead = {
  kicker: "Who to sell to first",
  title: "Cardiology and chronic-care clinics — the first door.",
  lede: "Do not start with consumers, and do not start with pharma. Start where a clinician already owns the patient, a hospital already pays for the gap between visits, and your intended use can be written in one sentence.",
  who: "The first buyer is the head of cardiology, the heart-failure program director, or the CMIO of a private hospital group. The first user is the outpatient who still arrives at clinic as a mystery.",
  why: [
    {
      title: "The clinician is already the hero",
      body: "NexaCura Healthcare is an instrument. Instruments are bought by people who use them to decide. A hospital department is that buyer. A wellness subscriber is not.",
    },
    {
      title: "A sentence of intended use",
      body: "Detect meaningful physiological change between cardiology visits, with an evidence path a physician can inspect. That intended use is the Software as a Medical Device we are building toward. “Feel better” is not.",
    },
    {
      title: "The money already exists",
      body: "Heart failure is a leading cause of hospitalisation across Asia and the Gulf. Readmissions, post-discharge RPM, and executive-health programs already have budgets. You are filling a meaning gap, not inventing a category.",
    },
    {
      title: "Hong Kong is a door, not a ceiling",
      body: "English-language medicine, private hospital groups, insurance density, and a bridge to Singapore and the GCC. Structural advantage the US and EU incumbents do not have from Boston or London.",
    },
  ],
  sequence: [
    {
      phase: "Now",
      window: "0–12 months",
      title: "Two or three design-partner departments",
      body: "Cardiology / heart-failure / post-discharge RPM at a private hospital in Hong Kong, one in Singapore, and one GCC flagship (Dubai or Abu Dhabi). Paid pilots. Clinician workflow first. Named champions, not a waiting list.",
    },
    {
      phase: "Next",
      window: "Year 2",
      title: "Specialist clinics and executive health",
      body: "Private cardiology, internal medicine, and executive-health programs already serve wearable-rich patients who pay. Faster procurement than a public cluster. Same instrument, shorter path to revenue.",
    },
    {
      phase: "Then",
      window: "Year 2–3",
      title: "Insurers and employers",
      body: "Once you can show fewer surprises between visits, the payer conversation is evidence, not a pitch. RPM and chronic-care reimbursement is the language they already speak.",
    },
    {
      phase: "Later",
      window: "After the dataset",
      title: "Pharmaceutical real-world evidence",
      body: "Pharma buys longitudinal, whole-person context around endpoints. That is a consequence of measuring the body honestly for patients and clinicians — never the first sale.",
    },
  ],
  firstPeople: [
    "Head of Cardiology / Heart Failure program director",
    "Chief of ambulatory or outpatient services",
    "CMIO or digital-health lead at a private hospital group",
    "Medical director of executive health / health-screening",
  ],
  firstInstitutions: [
    "Private hospital groups in Hong Kong (and their cardiology / executive-health arms)",
    "Singapore clusters and private groups running hospital-at-home and RPM trials",
    "GCC flagship hospitals and clinics serving mobile, device-rich patients",
  ],
  notFirst: [
    {
      title: "Direct-to-consumer wellness",
      body: "Expensive to acquire, easy to churn, and it contradicts the brand. If a member has to interpret the data alone, the product has failed — so do not sell a product that assumes they will.",
    },
    {
      title: "US health-system enterprise",
      body: "Eighteen-month sales cycles, no local presence, and a crowded RPM field. Win the APAC–GCC corridor first. Arrive in the US with evidence, not a brochure.",
    },
    {
      title: "Pharma as the first cheque",
      body: "They buy datasets you do not yet have, for trials you cannot yet power. Earn the longitudinal record in clinic. Then the conversation is inevitable.",
    },
  ],
} as const;

export const landscape = [
  {
    id: "clinical",
    kicker: "Closest peers",
    title: "Clinical physiology, digital biomarkers, remote monitoring",
    intro:
      "These companies are building the same class of instrument: continuous physiology, clinical intent, a clinician in the loop. Study them. Partner where it is honest. Do not pretend the category is empty.",
    companies: [
      {
        name: "Biofourmis",
        where: "Singapore / Boston",
        does: "AI remote monitoring and digital biomarkers; deterioration patterns in heart failure and chronic care. Category-defining. Now part of the CopilotIQ combination.",
        angle: "Closest clinical analog — vitals-first decompensation, less whole-person psychology.",
      },
      {
        name: "Huma",
        where: "United Kingdom",
        does: "Regulated remote-monitoring platform for care and research. Hospitals and life-science trials on one stack.",
        angle: "Strong SaMD discipline. Broader “platform” than a physiological conversation.",
      },
      {
        name: "Twin Health",
        where: "United States",
        does: "Whole Body Digital Twin for metabolic disease — continuous data to reverse type-2 diabetes and obesity.",
        angle: "Nearest “systems in conversation” thesis, specialised to metabolism.",
      },
      {
        name: "PhysIQ",
        where: "United States",
        does: "Personalised continuous physiology analytics from wearable biosensors, with FDA-cleared analytics heritage.",
        angle: "Analytics engine more than a member-facing instrument.",
      },
      {
        name: "Current Health",
        where: "UK / United States",
        does: "Hospital-at-home and enterprise RPM, now under Best Buy Health.",
        angle: "Operations and logistics of remote care, not meaning.",
      },
      {
        name: "Cadence",
        where: "United States",
        does: "Virtual chronic-care engine that flags risk between visits for older adults.",
        angle: "Care-delivery wrapper. NexaCura is the reading underneath.",
      },
      {
        name: "Empatica",
        where: "Italy / United States",
        does: "Medical wearables and digital biomarkers — seizure detection, research-grade EDA and physiology.",
        angle: "Hardware + specialised neurology. A possible signal partner, not a twin.",
      },
      {
        name: "BioIntelliSense",
        where: "United States",
        does: "BioButton continuous monitoring for hospital and home.",
        angle: "Sensor layer. They collect; the open question is who synthesises.",
      },
      {
        name: "VitalConnect",
        where: "United States",
        does: "VitalPatch biosensor for hospital and remote cardiac monitoring.",
        angle: "Patch hardware. Complementary, not competitive, if you stay software.",
      },
      {
        name: "Evidation",
        where: "United States",
        does: "Permissioned daily-life data and digital biomarkers for life-science evidence.",
        angle: "Pharma-facing dataset business — the later chapter, not the first.",
      },
      {
        name: "LifeSigns",
        where: "India, expanding SEA & GCC",
        does: "FDA-cleared RPM with wearable + command centre; deterioration alerts hours ahead. Occupancy pricing in hospitals.",
        angle: "Regional hospital RPM. Direct competitor for the GCC/SEA door.",
      },
      {
        name: "Biobeat",
        where: "Israel",
        does: "Cuffless wearable vitals — many parameters, clinically cleared.",
        angle: "Measurement. You are interpretation.",
      },
      {
        name: "HealthSnap",
        where: "United States",
        does: "Virtual chronic care plus RPM workflow for clinics.",
        angle: "US clinic operations. Different geography, similar buyer.",
      },
      {
        name: "Athelas",
        where: "United States",
        does: "AI chronic care and RPM for US practices.",
        angle: "Practice-management gravity. Stay an instrument.",
      },
    ],
  },
  {
    id: "wearables",
    kicker: "The signal layer",
    title: "Wearables becoming clinical",
    intro:
      "These companies own the wrist, the ring, and the night. They are not your first competitors. They are the reason patients arrive data-rich and meaning-poor — and, later, your most important integrations.",
    companies: [
      {
        name: "Oura",
        where: "Finland",
        does: "Smart ring; sleep, HRV, readiness. The most valuable consumer longevity-tech company, moving toward clinical features.",
        angle: "Partner for signal. Do not try to out-hardware a ring.",
      },
      {
        name: "WHOOP",
        where: "United States",
        does: "Strain, recovery, Healthspan, and now advanced labs. Performance physiology at population scale.",
        angle: "Athlete-native. You are clinic-native.",
      },
      {
        name: "Apple",
        where: "United States",
        does: "Watch ECG, atrial fibrillation, Health app as the default longitudinal store for hundreds of millions.",
        angle: "The ocean you swim in. Integrate; never compete with the watch.",
      },
      {
        name: "Withings",
        where: "France",
        does: "Clinical-adjacent consumer devices — BP, ECG, sleep, scales — with a medical aesthetic.",
        angle: "Device partner for the home.",
      },
      {
        name: "Garmin Health",
        where: "United States",
        does: "Enterprise and clinical wearable programs sitting on a huge consumer install base.",
        angle: "B2B wearable channel.",
      },
      {
        name: "Ultrahuman",
        where: "India",
        does: "Ring AIR and metabolic wearables; strong APAC/India consumer motion.",
        angle: "Regional signal partner.",
      },
      {
        name: "Aktiia",
        where: "Switzerland",
        does: "Cuffless blood-pressure monitoring from a bracelet.",
        angle: "A vital you will want in the model.",
      },
    ],
  },
  {
    id: "apac",
    kicker: "Your corridor",
    title: "APAC and Hong Kong — same door, different product",
    intro:
      "These are the companies a Hong Kong hospital CMIO already knows. Some measure a vital through a camera. Some run genetics. Some do tele-cardiology. None of them read the conversation between systems over time. That is the gap.",
    companies: [
      {
        name: "PanopticAI",
        where: "Hong Kong",
        does: "FDA-cleared contactless vitals from a phone camera (pulse, respiratory rate). Gleneagles, Bupa, Mannings. Hong Kong’s first SaMD clearance story.",
        angle: "Local SaMD pioneer — capture, not longitudinal synthesis. Respect them; do not copy the selfie-scan.",
      },
      {
        name: "Prenetics",
        where: "Hong Kong",
        does: "Listed consumer diagnostics and genetics; prevention and testing at regional scale.",
        angle: "Distribution and brand in HK. Different science.",
      },
      {
        name: "injewelme / DeepHealthVision",
        where: "Korea / Singapore",
        does: "Camera-based heart rate and blood pressure; SingHealth polyclinic trials.",
        angle: "Contactless vitals, public-cluster path.",
      },
      {
        name: "iMedrix",
        where: "California, deployed SE Asia",
        does: "KardioScreen mobile cardiology; partnership with Siemens Healthineers for tele-cardiology in Southeast Asia.",
        angle: "Detection of heart disease, not a whole-person timeline.",
      },
      {
        name: "Acorai",
        where: "Sweden, trialling Singapore",
        does: "Non-invasive cardiac-pressure device; NHG Health and SingHealth heart-failure trials.",
        angle: "A specialised cardiac signal. Complementary.",
      },
      {
        name: "Dozee",
        where: "India",
        does: "Contactless bed-sensor RPM and AI triage, expanding beyond metros.",
        angle: "Inpatient/step-down. You start in outpatient life.",
      },
      {
        name: "Health BETA",
        where: "Singapore",
        does: "Asian-specific polygenic risk for coronary artery disease, combining genetics and lifestyle.",
        angle: "Genomic risk, not continuous physiology.",
      },
    ],
  },
  {
    id: "longevity",
    kicker: "Adjacent, not the same",
    title: "Longevity, labs, and full-body scans",
    intro:
      "They sell a moment of measurement — blood, MRI, a panel. You sell the time between moments. Useful to know; dangerous to imitate.",
    companies: [
      {
        name: "Function Health",
        where: "United States",
        does: "Membership lab panels, 100+ biomarkers, twice a year.",
        angle: "Snapshot labs. No continuous conversation.",
      },
      {
        name: "InsideTracker",
        where: "United States",
        does: "Blood plus wearable action plans.",
        angle: "Consumer optimisation, not SaMD.",
      },
      {
        name: "Superpower",
        where: "United States",
        does: "App-first labs and longevity membership.",
        angle: "Wellness gravity. Stay clinical.",
      },
      {
        name: "Neko Health",
        where: "Sweden",
        does: "Full-body scan clinics. A beautiful hour, not a year of physiology.",
        angle: "Event-based. You are longitudinal.",
      },
      {
        name: "Human Longevity",
        where: "United States",
        does: "Precision-medicine workups for the well-off.",
        angle: "Concierge medicine, not an instrument.",
      },
    ],
  },
] as const;

export const faq = [
  {
    q: "Is this a wellness app?",
    a: "Yes, at the start. Wellness and remote monitoring today, on the way toward clinical care. There is still no score to chase, and it does not replace a clinician.",
  },
  {
    q: "How is a baseline made?",
    a: "The first 24 hours learn how this person usually behaves. After that, drifts and the rest of health are measured against that baseline — not against a population average.",
  },
  {
    q: "Who sees my data?",
    a: "You do. The clinicians and caregivers you choose to share with do. Your AI Assist also watches the data continuously, so it can understand your health and tell you what changed in plain language. NexaCura Healthcare does not sell your body to anyone.",
  },
  {
    q: "When can I use it?",
    a: "Not yet. Tell us you are interested. We will write when a place is ready.",
  },
  {
    q: "Who is this for first?",
    a: "Anyone who wants to understand their own health. The first use is wellness and remote monitoring, so a person can see a change and know what it means. A clinician can see the same reading when you share it. Research comes later.",
  },
] as const;

export const proof = [
  { value: "Signals, together", label: "Read as one picture — not isolated numbers" },
  { value: "24 hours", label: "To a personal baseline. Later drift is measured from it." },
  { value: "One reading", label: "What changed after that baseline, and why it might matter" },
  { value: "On the way", label: "Wellness and remote monitoring today. Clinical care is the direction." },
] as const;

export const gallery = [
  {
    src: "/images/home.jpg",
    alt: "Quiet morning at home — a wristwatch, tea, and daylight",
    value: "72 bpm",
    label: "Heart rate",
    note: "How fast the heart is beating, against this person’s own usual rate.",
  },
  {
    src: "/images/tablet.jpg",
    alt: "A connected physiological view on a tablet",
    value: "Normal sinus",
    label: "ECG",
    note: "The electrical rhythm of the heart. Sinus means a regular pattern.",
  },
  {
    src: "/images/consult.jpg",
    alt: "A clinician and patient reviewing a tablet together",
    value: "98%",
    label: "SpO2",
    note: "Oxygen in the blood. This is a percent, not a wellness score.",
  },
  {
    src: "/images/clinic.jpg",
    alt: "Morning light in a modern outpatient clinic",
    value: "14 / min",
    label: "Respiratory rate",
    note: "Breaths each minute. We watch the pattern, not a single number.",
  },
  {
    src: "/images/still-life.jpg",
    alt: "A watch, glass lenses, and a notebook on linen",
    value: "36.7°C",
    label: "Temperature",
    note: "Body heat through the day, compared with this person’s baseline.",
  },
  {
    src: "/images/lenses.jpg",
    alt: "Overlapping glass lenses where two signals meet",
    value: "6.4 hours",
    label: "Sleep pattern",
    note: "How long the night was, and whether it was broken.",
  },
  {
    src: "/images/harbor.jpg",
    alt: "Daylight over a harbour — a day of ordinary movement",
    value: "4,200 steps",
    label: "Daily activity",
    note: "Movement across the day — including when it drops off.",
  },
  {
    src: "/images/systems.jpg",
    alt: "Soft light across a quiet interior",
    value: "38 ms",
    label: "HRV",
    note: "Beat-to-beat variation. It helps show recovery, not a grade.",
  },
] as const;

export const contrast = {
  kicker: "Not your average reading",
  title: "An instrument, not a wellness score.",
  left: "Typical wellness",
  right: "NexaCura Healthcare",
  rows: [
    { left: "A score you chase", right: "A reading you can inspect" },
    { left: "Isolated biomarkers", right: "Systems in conversation" },
    { left: "You interpret the dashboard", right: "Your clinician stays the hero" },
    { left: "Population averages", right: "Your own baseline" },
    { left: "Urgency for its own sake", right: "How sure we are, in words" },
    { left: "The body as separate rooms", right: "The conversation between them" },
  ],
} as const;

export const consoleCopy = {
  kicker: "Insight · tonight",
  title: "This may indicate a demanding day rather than an acute event.",
  body: "Sustained elevations in stress-related signals and slightly reduced recovery capacity. Associated with reduced movement after 15:00 and later-than-usual meals.",
  meta: [
    { label: "How sure", value: "High — these signals agree" },
    { label: "Evidence", value: "HRV + RHR + activity, 14 h" },
    { label: "Next", value: "Protect sleep. No medical action indicated." },
  ],
} as const;
