// Shared site data: nav, categories, mock posts.

export type CategorySlug =
  | "latest-jobs"
  | "admit-card"
  | "results"
  | "syllabus"
  | "answer-key"
  | "admission";

export interface Category {
  slug: CategorySlug;
  title: string;
  short: string;
  description: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { slug: "latest-jobs", title: "Latest Jobs", short: "Jobs", description: "Newest government job notifications across India.", icon: "Briefcase" },
  { slug: "admit-card", title: "Admit Card", short: "Admit Card", description: "Download admit cards for upcoming exams.", icon: "IdCard" },
  { slug: "results", title: "Results", short: "Results", description: "Latest exam results and merit lists.", icon: "Trophy" },
  { slug: "syllabus", title: "Syllabus", short: "Syllabus", description: "Official exam syllabus and exam patterns.", icon: "BookOpen" },
  { slug: "answer-key", title: "Answer Key", short: "Answer Key", description: "Provisional and final answer keys.", icon: "KeyRound" },
  { slug: "admission", title: "Admission", short: "Admission", description: "College, university and course admissions.", icon: "GraduationCap" },
];

export const NAV_ITEMS = [
  { label: "Home", to: "/" as const, params: undefined },
  { label: "Latest Jobs", to: "/category/$slug" as const, params: { slug: "latest-jobs" } },
  { label: "Admit Card", to: "/category/$slug" as const, params: { slug: "admit-card" } },
  { label: "Results", to: "/category/$slug" as const, params: { slug: "results" } },
  { label: "Syllabus", to: "/category/$slug" as const, params: { slug: "syllabus" } },
  { label: "Answer Key", to: "/category/$slug" as const, params: { slug: "answer-key" } },
  { label: "Admission", to: "/category/$slug" as const, params: { slug: "admission" } },
];

export const SOCIAL = {
  whatsapp: "https://chat.whatsapp.com/",
  telegram: "https://t.me/",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
};

export const DISCLAIMER_TEXT =
  "Disclaimer: Examtaza.in is an independent platform and is not associated with any official or government organization. All information provided on this website is for general informational purposes only and should not be considered as legal or official advice. We strongly advise visitors to verify all details through official government notifications and websites before making any decision. If you find any errors or inaccurate information, please contact us through our Contact Us page.";

export interface Post {
  slug: string;
  title: string;
  titleHi?: string;
  category: CategorySlug;
  date: string; // stable display date string e.g. "02 Jun 2026"
  summary: string;
  content: string; // HTML (English)
  contentHi?: string; // HTML (Hindi)
  importantLinks?: { label: string; url: string; type?: "apply" | "download" | "official" | "notification" }[];
  importantDates?: { event: string; date: string }[];
  applicationFee?: { category: string; fee: string }[];
  ageLimit?: string;
  vacancyTable?: { post: string; vacancy: string; qualification: string }[];
  salary?: { post: string; payScale: string }[];
  selectionProcess?: string[];
  howToApply?: string[];
  faqs?: { q: string; a: string }[];
  conclusion?: string;
}

const FULL_SSC_CONTENT_EN = `
<p>Staff Selection Commission (SSC) has officially released the <strong>SSC CGL 2026 Notification</strong> for the recruitment of Combined Graduate Level posts in various Ministries, Departments and Organisations of the Government of India. A total of <strong>17,727 vacancies</strong> have been announced this year, making it one of the biggest recruitment drives for graduate aspirants in 2026.</p>

<p>Candidates who hold a Bachelor's degree in any discipline from a recognised university can apply online through the official SSC portal within the given timeline. The complete details — including important dates, application fee, age limit, vacancy distribution, salary structure, selection process and step-by-step application guide — are provided below.</p>

<h2>Overview of SSC CGL 2026</h2>
<p>SSC CGL is conducted every year to recruit candidates for Group B and Group C posts. The exam is held in four tiers and is one of the most popular government exams in India due to its attractive pay scale and job security.</p>

<h3>Why SSC CGL is one of the most preferred exams</h3>
<ul>
  <li>High-paying central government posts with 7th CPC pay scale</li>
  <li>Posting across India in reputed departments like CBDT, CBIC, MEA</li>
  <li>Career growth with promotions every 4–6 years</li>
  <li>Job security, allowances and pension benefits</li>
</ul>

<h2>How to Apply for SSC CGL 2026</h2>
<p>The complete step-by-step process for filling the SSC CGL 2026 online application form is explained in the "How To Apply" section below. Candidates are advised to read the official notification carefully before submitting the form.</p>
`;

const FULL_SSC_CONTENT_HI = `
<p>कर्मचारी चयन आयोग (SSC) ने <strong>SSC CGL 2026 की आधिकारिक अधिसूचना</strong> जारी कर दी है। इस वर्ष कुल <strong>17,727 पदों</strong> पर भर्ती की जाएगी। पात्र स्नातक उम्मीदवार अंतिम तिथि से पहले ऑनलाइन आवेदन कर सकते हैं।</p>

<h2>SSC CGL 2026 का संक्षिप्त विवरण</h2>
<p>SSC CGL परीक्षा हर साल केंद्र सरकार के विभिन्न मंत्रालयों और विभागों में ग्रुप B और ग्रुप C पदों पर भर्ती के लिए आयोजित की जाती है। यह भारत की सबसे लोकप्रिय सरकारी परीक्षाओं में से एक है।</p>

<h3>इस परीक्षा के मुख्य लाभ</h3>
<ul>
  <li>7वें वेतन आयोग के अनुसार आकर्षक वेतन</li>
  <li>केंद्र सरकार में स्थायी नौकरी</li>
  <li>देशभर में पोस्टिंग के अवसर</li>
  <li>समय-समय पर पदोन्नति और भत्ते</li>
</ul>

<h2>आवेदन कैसे करें</h2>
<p>नीचे "How To Apply" अनुभाग में आवेदन की पूरी प्रक्रिया विस्तार से बताई गई है। आवेदन करने से पहले आधिकारिक अधिसूचना अवश्य पढ़ें।</p>
`;

export const POSTS: Post[] = [
  {
    slug: "ssc-cgl-2026-notification",
    title: "SSC CGL 2026 Notification — Apply Online for 17,727 Posts",
    titleHi: "SSC CGL 2026 अधिसूचना — 17,727 पदों के लिए ऑनलाइन आवेदन करें",
    category: "latest-jobs",
    date: "02 Jun 2026",
    summary:
      "Staff Selection Commission has released the SSC CGL 2026 notification for 17,727 Combined Graduate Level posts. Apply online before the last date.",
    content: FULL_SSC_CONTENT_EN,
    contentHi: FULL_SSC_CONTENT_HI,
    importantDates: [
      { event: "Notification Release Date", date: "01/06/2026" },
      { event: "Online Apply Start Date", date: "05/06/2026" },
      { event: "Last Date to Apply", date: "30/06/2026" },
      { event: "Last Date for Fee Payment", date: "01/07/2026" },
      { event: "Tier-I Exam Date", date: "August 2026" },
      { event: "Tier-II Exam Date", date: "November 2026" },
    ],
    applicationFee: [
      { category: "General / OBC", fee: "₹100/-" },
      { category: "SC / ST / PwD", fee: "₹0/- (Exempted)" },
      { category: "All Female Candidates", fee: "₹0/- (Exempted)" },
      { category: "Payment Mode", fee: "Net Banking / UPI / Debit & Credit Card" },
    ],
    ageLimit:
      "Minimum 18 Years and Maximum 32 Years as on 01/08/2026. Age relaxation is applicable as per Government of India rules (5 years for SC/ST, 3 years for OBC, 10 years for PwD, etc.).",
    vacancyTable: [
      { post: "Assistant Section Officer (CSS)", vacancy: "3,500", qualification: "Bachelor's Degree in any stream" },
      { post: "Income Tax Inspector (CBDT)", vacancy: "2,200", qualification: "Bachelor's Degree in any stream" },
      { post: "Sub Inspector (CBI)", vacancy: "850", qualification: "Bachelor's Degree in any stream" },
      { post: "Auditor / Accountant", vacancy: "6,500", qualification: "Bachelor's Degree in any stream" },
      { post: "Inspector (Central Excise / Preventive Officer)", vacancy: "1,800", qualification: "Bachelor's Degree in any stream" },
      { post: "Other Group B & C Posts", vacancy: "2,877", qualification: "Bachelor's Degree in any stream" },
    ],
    salary: [
      { post: "Assistant Section Officer", payScale: "₹47,600 – ₹1,51,100 (Pay Level 7)" },
      { post: "Income Tax Inspector", payScale: "₹44,900 – ₹1,42,400 (Pay Level 7)" },
      { post: "Inspector (Central Excise)", payScale: "₹44,900 – ₹1,42,400 (Pay Level 7)" },
      { post: "Auditor / Accountant", payScale: "₹29,200 – ₹92,300 (Pay Level 5)" },
      { post: "Sub Inspector (CBI)", payScale: "₹35,400 – ₹1,12,400 (Pay Level 6)" },
    ],
    selectionProcess: [
      "Tier-I — Computer Based Examination (Objective, 200 marks)",
      "Tier-II — Computer Based Examination (Paper I, II, III as applicable)",
      "Document Verification by the concerned regional office",
      "Final Merit List based on Tier-II marks",
      "Medical Examination (for certain posts only)",
    ],
    howToApply: [
      "Visit the official SSC website at ssc.gov.in.",
      "Click on the 'New Registration' link if you are a new user and complete one-time registration.",
      "Login with your Registration ID and Password.",
      "Select 'SSC CGL 2026' from the active notifications list.",
      "Fill in your personal, educational and communication details carefully.",
      "Upload scanned photo and signature in the prescribed format.",
      "Pay the application fee online via Net Banking / UPI / Debit / Credit Card.",
      "Submit the final form and take a printout for future reference.",
    ],
    importantLinks: [
      { label: "Apply Online", url: "#", type: "apply" },
      { label: "Download Notification PDF", url: "#", type: "download" },
      { label: "Official Website", url: "#", type: "official" },
      { label: "Short Notice", url: "#", type: "notification" },
      { label: "Join Telegram Channel", url: "#", type: "official" },
      { label: "Join WhatsApp Group", url: "#", type: "official" },
    ],
    faqs: [
      { q: "What is SSC CGL 2026?", a: "SSC CGL 2026 is the Combined Graduate Level Examination conducted by the Staff Selection Commission to recruit candidates for various Group B and Group C posts in central government departments." },
      { q: "What is the last date to apply for SSC CGL 2026?", a: "The last date to submit the online application is 30 June 2026 and fee payment can be done by 01 July 2026." },
      { q: "What is the age limit for SSC CGL 2026?", a: "Candidates must be between 18 to 32 years as on 01/08/2026. Age relaxation is applicable for reserved categories as per government norms." },
      { q: "How can I apply for SSC CGL 2026?", a: "Eligible candidates can apply online through the official SSC portal (ssc.gov.in). The complete step-by-step process is given in the 'How To Apply' section above." },
      { q: "What is the salary of SSC CGL posts?", a: "Salary varies as per the post. ASO, Inspector and Income Tax Inspector posts fall under Pay Level 7 (₹44,900 – ₹1,51,100) along with allowances." },
    ],
    conclusion:
      "SSC CGL 2026 is a golden opportunity for graduate aspirants to secure a prestigious central government job with excellent salary and benefits. Apply on time, prepare smartly and stay connected with ExamTaza.in for every important update related to the exam.",
  },
  {
    slug: "ibps-po-2026-recruitment",
    title: "IBPS PO 2026 Recruitment — 5,208 Probationary Officer Posts",
    category: "latest-jobs",
    date: "01 Jun 2026",
    summary:
      "IBPS has invited online applications for the post of Probationary Officer / Management Trainee in participating banks.",
    content: `<p>The Institute of Banking Personnel Selection (IBPS) has released the official notification for <strong>Probationary Officer (PO) / Management Trainee</strong> recruitment 2026 for 5,208 vacancies across participating public sector banks.</p><h2>Overview</h2><p>Apply through the official IBPS portal within the dates mentioned in the notification.</p>`,
    importantDates: [
      { event: "Apply Start Date", date: "10/06/2026" },
      { event: "Last Date to Apply", date: "01/07/2026" },
      { event: "Prelims Exam Date", date: "August 2026" },
      { event: "Mains Exam Date", date: "October 2026" },
    ],
    applicationFee: [
      { category: "General / OBC", fee: "₹850/-" },
      { category: "SC / ST / PwD", fee: "₹175/-" },
    ],
    ageLimit: "20 – 30 Years (with usual age relaxation rules).",
    vacancyTable: [
      { post: "Probationary Officer", vacancy: "5,208", qualification: "Bachelor's Degree in any discipline" },
    ],
    salary: [{ post: "Probationary Officer", payScale: "₹52,000 – ₹55,000 (approx in-hand)" }],
    selectionProcess: ["Preliminary Examination", "Mains Examination", "Interview", "Final Allotment"],
    howToApply: [
      "Visit the official IBPS website (ibps.in).",
      "Register as a new candidate and login.",
      "Fill the application form and upload documents.",
      "Pay the fee and submit the form.",
    ],
    importantLinks: [
      { label: "Apply Online", url: "#", type: "apply" },
      { label: "Download Notification", url: "#", type: "download" },
      { label: "Official Website", url: "#", type: "official" },
    ],
    faqs: [
      { q: "Who can apply for IBPS PO 2026?", a: "Any graduate aged between 20 and 30 years can apply." },
      { q: "What is the selection process?", a: "Prelims, Mains and Interview followed by final allotment." },
    ],
    conclusion: "IBPS PO is one of the most sought-after banking exams. Apply on time and prepare diligently.",
  },
  {
    slug: "rrb-ntpc-2026-application",
    title: "RRB NTPC 2026 — Apply Online for 11,558 Non-Technical Posts",
    category: "latest-jobs",
    date: "31 May 2026",
    summary: "Railway Recruitment Board has issued the NTPC 2026 notification for graduate and undergraduate level posts.",
    content: `<p>Railway Recruitment Board (RRB) has released the <strong>NTPC 2026</strong> notification for 11,558 vacancies. Apply online from the official RRB regional websites.</p>`,
    importantLinks: [
      { label: "Apply Online", url: "#", type: "apply" },
      { label: "Notification PDF", url: "#", type: "download" },
    ],
  },
  {
    slug: "upsc-cse-2026-admit-card",
    title: "UPSC Civil Services Prelims 2026 Admit Card Released",
    category: "admit-card",
    date: "02 Jun 2026",
    summary: "UPSC has released the admit card for Civil Services Preliminary Examination 2026.",
    content: `<p>Union Public Service Commission has released the <strong>Civil Services Preliminary Examination 2026 Admit Card</strong>. Candidates can download their e-admit card from the official UPSC website using registration ID and date of birth.</p>`,
    importantLinks: [
      { label: "Download Admit Card", url: "#", type: "download" },
      { label: "Official Website", url: "#", type: "official" },
    ],
  },
  {
    slug: "ssc-mts-2026-admit-card",
    title: "SSC MTS 2026 Admit Card / Hall Ticket Out",
    category: "admit-card",
    date: "01 Jun 2026",
    summary: "SSC has uploaded the region-wise admit card for the Multi Tasking Staff examination 2026.",
    content: `<p>Staff Selection Commission has uploaded the region-wise <strong>MTS 2026 admit cards</strong>. Download from your regional SSC website.</p>`,
    importantLinks: [{ label: "Download Admit Card", url: "#", type: "download" }],
  },
  {
    slug: "ibps-clerk-2025-result",
    title: "IBPS Clerk 2025 Mains Result Declared — Check Score Card",
    category: "results",
    date: "02 Jun 2026",
    summary: "IBPS has declared the Clerk Mains result 2025. Candidates can check their result and score card online.",
    content: `<p>The Institute of Banking Personnel Selection has declared the <strong>IBPS Clerk Mains 2025 Result</strong>. Shortlisted candidates will be allotted to participating banks.</p>`,
    importantLinks: [
      { label: "Check Result", url: "#", type: "official" },
      { label: "Download Score Card", url: "#", type: "download" },
    ],
  },
  {
    slug: "rrb-group-d-result-2025",
    title: "RRB Group D Result 2025 — PET Cut Off Released",
    category: "results",
    date: "30 May 2026",
    summary: "Railway Recruitment Board has released the Group D CBT result and PET cut off marks.",
    content: `<p>RRB has released the <strong>Group D CBT Result 2025</strong> along with PET cut off marks region wise.</p>`,
    importantLinks: [{ label: "Check Result", url: "#", type: "official" }],
  },
  {
    slug: "upsc-cse-syllabus-2026",
    title: "UPSC Civil Services 2026 Syllabus & Exam Pattern PDF",
    category: "syllabus",
    date: "01 Jun 2026",
    summary: "Detailed syllabus and exam pattern of UPSC CSE Prelims and Mains 2026 with downloadable PDF.",
    content: `<p>Complete <strong>UPSC CSE 2026 Syllabus</strong> for Preliminary and Mains examination along with the exam pattern and optional subject syllabus.</p>`,
    importantLinks: [{ label: "Download Syllabus PDF", url: "#", type: "download" }],
  },
  {
    slug: "ssc-cgl-syllabus-2026",
    title: "SSC CGL 2026 Syllabus & New Exam Pattern — Tier I & Tier II",
    category: "syllabus",
    date: "31 May 2026",
    summary: "Latest SSC CGL 2026 syllabus with subject-wise topics and weightage.",
    content: `<p>Complete <strong>SSC CGL 2026 Syllabus</strong> for Tier I and Tier II with the latest exam pattern.</p>`,
    importantLinks: [{ label: "Download Syllabus PDF", url: "#", type: "download" }],
  },
  {
    slug: "ssc-chsl-answer-key-2026",
    title: "SSC CHSL 2026 Tier-I Answer Key Released — Raise Objection",
    category: "answer-key",
    date: "02 Jun 2026",
    summary: "SSC has released the tentative answer key of CHSL Tier-I exam 2026 with objection window.",
    content: `<p>Staff Selection Commission has released the <strong>SSC CHSL 2026 Tier-I Answer Key</strong>. Candidates can raise objections online with a nominal fee per question.</p>`,
    importantLinks: [
      { label: "Download Answer Key", url: "#", type: "download" },
      { label: "Raise Objection", url: "#", type: "apply" },
    ],
  },
  {
    slug: "neet-ug-answer-key-2026",
    title: "NEET UG 2026 Provisional Answer Key — Download Now",
    category: "answer-key",
    date: "31 May 2026",
    summary: "NTA has uploaded the provisional answer key of NEET UG 2026 along with response sheets.",
    content: `<p>National Testing Agency has uploaded the <strong>NEET UG 2026 Provisional Answer Key</strong> on the official website.</p>`,
    importantLinks: [{ label: "Download Answer Key", url: "#", type: "download" }],
  },
  {
    slug: "du-ug-admission-2026",
    title: "Delhi University UG Admission 2026 — CSAS Registration Open",
    category: "admission",
    date: "02 Jun 2026",
    summary: "DU has opened CSAS UG registration for academic session 2026-27.",
    content: `<p>University of Delhi has opened the <strong>Common Seat Allocation System (CSAS) UG Admission 2026</strong> registration window. Eligible CUET UG qualified candidates can register online.</p>`,
    importantLinks: [
      { label: "Apply Online", url: "#", type: "apply" },
      { label: "Information Bulletin", url: "#", type: "download" },
    ],
  },
  {
    slug: "jee-main-2026-admission",
    title: "JEE Main 2026 Session 1 — Online Application Open",
    category: "admission",
    date: "01 Jun 2026",
    summary: "NTA has opened the JEE Main 2026 Session 1 application form for engineering aspirants.",
    content: `<p>National Testing Agency has invited online applications for <strong>JEE Main 2026 Session 1</strong>.</p>`,
    importantLinks: [{ label: "Apply Online", url: "#", type: "apply" }],
  },
];

export function getPostsByCategory(slug: CategorySlug): Post[] {
  return POSTS.filter((p) => p.category === slug);
}

export function getLatestPosts(limit = 8): Post[] {
  return POSTS.slice(0, limit);
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function formatDate(value: string): string {
  // Dates are already pre-formatted stable strings to avoid SSR/CSR mismatch.
  return value;
}
