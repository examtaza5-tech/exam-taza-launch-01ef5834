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
  { label: "Home", to: "/" },
  { label: "Latest Jobs", to: "/category/latest-jobs" },
  { label: "Admit Card", to: "/category/admit-card" },
  { label: "Results", to: "/category/results" },
  { label: "Syllabus", to: "/category/syllabus" },
  { label: "Answer Key", to: "/category/answer-key" },
  { label: "Admission", to: "/category/admission" },
] as const;

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
  category: CategorySlug;
  date: string; // ISO
  summary: string;
  content: string; // HTML
  importantLinks?: { label: string; url: string; type?: "apply" | "download" | "official" | "notification" }[];
  importantDates?: { event: string; date: string }[];
  applicationFee?: { category: string; fee: string }[];
  ageLimit?: string;
  vacancyTable?: { post: string; vacancy: string; qualification: string }[];
}

const today = (offsetDays = 0) => {
  const d = new Date();
  d.setDate(d.getDate() - offsetDays);
  return d.toISOString();
};

export const POSTS: Post[] = [
  {
    slug: "ssc-cgl-2026-notification",
    title: "SSC CGL 2026 Notification — Apply Online for 17,727 Posts",
    category: "latest-jobs",
    date: today(0),
    summary:
      "Staff Selection Commission has released the SSC CGL 2026 notification for Combined Graduate Level posts. Apply online before the last date.",
    content: `
      <p>Staff Selection Commission (SSC) has released the official notification for <strong>Combined Graduate Level (CGL) Examination 2026</strong>. Eligible graduates can apply online through the official SSC portal. This year a total of <strong>17,727 vacancies</strong> have been announced across multiple departments.</p>
      <h2>About the Exam</h2>
      <p>SSC CGL is one of the most popular government recruitment exams in India, conducted for filling Group B and Group C posts in various ministries, departments and organisations of the Government of India.</p>
      <h3>Eligibility</h3>
      <ul>
        <li>Candidates must hold a Bachelor's degree from a recognised university.</li>
        <li>Final-year students may also apply, subject to conditions.</li>
        <li>Age limit varies between 18 to 32 years depending on the post.</li>
      </ul>
      <h3>Selection Process</h3>
      <ol>
        <li>Tier-I Computer Based Examination</li>
        <li>Tier-II Computer Based Examination</li>
        <li>Document Verification</li>
      </ol>
      <h2>How to Apply</h2>
      <p>Visit the official SSC website, register using basic details, fill the application form, upload required documents and pay the fee online. Take a printout for future reference.</p>
    `,
    importantDates: [
      { event: "Notification Release Date", date: "01/06/2026" },
      { event: "Online Apply Start Date", date: "05/06/2026" },
      { event: "Last Date to Apply", date: "30/06/2026" },
      { event: "Tier-I Exam Date", date: "August 2026" },
    ],
    applicationFee: [
      { category: "General / OBC", fee: "₹100/-" },
      { category: "SC / ST / PwD", fee: "₹0/- (Exempted)" },
      { category: "All Female Candidates", fee: "₹0/- (Exempted)" },
    ],
    ageLimit: "18 – 32 Years (age relaxation as per government rules)",
    vacancyTable: [
      { post: "Assistant Section Officer", vacancy: "3,500", qualification: "Bachelor's Degree" },
      { post: "Income Tax Inspector", vacancy: "2,200", qualification: "Bachelor's Degree" },
      { post: "Sub Inspector (CBI)", vacancy: "850", qualification: "Bachelor's Degree" },
      { post: "Auditor / Accountant", vacancy: "6,500", qualification: "Bachelor's Degree" },
      { post: "Other Posts", vacancy: "4,677", qualification: "Bachelor's Degree" },
    ],
    importantLinks: [
      { label: "Apply Online", url: "#", type: "apply" },
      { label: "Download Notification", url: "#", type: "download" },
      { label: "Official Website", url: "#", type: "official" },
      { label: "Short Notice", url: "#", type: "notification" },
    ],
  },
  {
    slug: "ibps-po-2026-recruitment",
    title: "IBPS PO 2026 Recruitment — 5,208 Probationary Officer Posts",
    category: "latest-jobs",
    date: today(1),
    summary:
      "IBPS has invited online applications for the post of Probationary Officer / Management Trainee in participating banks.",
    content: `<p>The Institute of Banking Personnel Selection (IBPS) has released the official notification for <strong>Probationary Officer (PO) / Management Trainee</strong> recruitment 2026. Candidates with a Bachelor's degree in any discipline can apply online.</p><h2>Overview</h2><p>Apply through the official IBPS portal within the dates mentioned in the notification.</p>`,
    importantDates: [
      { event: "Apply Start Date", date: "10/06/2026" },
      { event: "Last Date to Apply", date: "01/07/2026" },
      { event: "Prelims Exam Date", date: "August 2026" },
    ],
    applicationFee: [
      { category: "General / OBC", fee: "₹850/-" },
      { category: "SC / ST / PwD", fee: "₹175/-" },
    ],
    ageLimit: "20 – 30 Years",
    importantLinks: [
      { label: "Apply Online", url: "#", type: "apply" },
      { label: "Download Notification", url: "#", type: "download" },
      { label: "Official Website", url: "#", type: "official" },
    ],
  },
  {
    slug: "rrb-ntpc-2026-application",
    title: "RRB NTPC 2026 — Apply Online for 11,558 Non-Technical Posts",
    category: "latest-jobs",
    date: today(2),
    summary: "Railway Recruitment Board has issued the NTPC 2026 notification for graduate and undergraduate level posts.",
    content: `<p>Railway Recruitment Board (RRB) has released the <strong>NTPC 2026</strong> notification. Apply online from the official RRB regional websites.</p>`,
    importantLinks: [
      { label: "Apply Online", url: "#", type: "apply" },
      { label: "Notification PDF", url: "#", type: "download" },
    ],
  },
  {
    slug: "upsc-cse-2026-admit-card",
    title: "UPSC Civil Services Prelims 2026 Admit Card Released",
    category: "admit-card",
    date: today(0),
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
    date: today(1),
    summary: "SSC has uploaded the region-wise admit card for the Multi Tasking Staff examination 2026.",
    content: `<p>Staff Selection Commission has uploaded the region-wise <strong>MTS 2026 admit cards</strong>. Download from your regional SSC website.</p>`,
    importantLinks: [
      { label: "Download Admit Card", url: "#", type: "download" },
    ],
  },
  {
    slug: "ibps-clerk-2025-result",
    title: "IBPS Clerk 2025 Mains Result Declared — Check Score Card",
    category: "results",
    date: today(0),
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
    date: today(3),
    summary: "Railway Recruitment Board has released the Group D CBT result and PET cut off marks.",
    content: `<p>RRB has released the <strong>Group D CBT Result 2025</strong> along with PET cut off marks region wise.</p>`,
    importantLinks: [{ label: "Check Result", url: "#", type: "official" }],
  },
  {
    slug: "upsc-cse-syllabus-2026",
    title: "UPSC Civil Services 2026 Syllabus & Exam Pattern PDF",
    category: "syllabus",
    date: today(1),
    summary: "Detailed syllabus and exam pattern of UPSC CSE Prelims and Mains 2026 with downloadable PDF.",
    content: `<p>Complete <strong>UPSC CSE 2026 Syllabus</strong> for Preliminary and Mains examination along with the exam pattern and optional subject syllabus.</p>`,
    importantLinks: [{ label: "Download Syllabus PDF", url: "#", type: "download" }],
  },
  {
    slug: "ssc-cgl-syllabus-2026",
    title: "SSC CGL 2026 Syllabus & New Exam Pattern — Tier I & Tier II",
    category: "syllabus",
    date: today(2),
    summary: "Latest SSC CGL 2026 syllabus with subject-wise topics and weightage.",
    content: `<p>Complete <strong>SSC CGL 2026 Syllabus</strong> for Tier I and Tier II with the latest exam pattern.</p>`,
    importantLinks: [{ label: "Download Syllabus PDF", url: "#", type: "download" }],
  },
  {
    slug: "ssc-chsl-answer-key-2026",
    title: "SSC CHSL 2026 Tier-I Answer Key Released — Raise Objection",
    category: "answer-key",
    date: today(0),
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
    date: today(2),
    summary: "NTA has uploaded the provisional answer key of NEET UG 2026 along with response sheets.",
    content: `<p>National Testing Agency has uploaded the <strong>NEET UG 2026 Provisional Answer Key</strong> on the official website.</p>`,
    importantLinks: [{ label: "Download Answer Key", url: "#", type: "download" }],
  },
  {
    slug: "du-ug-admission-2026",
    title: "Delhi University UG Admission 2026 — CSAS Registration Open",
    category: "admission",
    date: today(0),
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
    date: today(1),
    summary: "NTA has opened the JEE Main 2026 Session 1 application form for engineering aspirants.",
    content: `<p>National Testing Agency has invited online applications for <strong>JEE Main 2026 Session 1</strong>.</p>`,
    importantLinks: [{ label: "Apply Online", url: "#", type: "apply" }],
  },
];

export function getPostsByCategory(slug: CategorySlug): Post[] {
  return POSTS.filter((p) => p.category === slug).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );
}

export function getLatestPosts(limit = 8): Post[] {
  return [...POSTS].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, limit);
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}
