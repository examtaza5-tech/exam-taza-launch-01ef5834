import { createFileRoute } from "@tanstack/react-router";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ExamTaza.in" },
      { name: "description", content: "Learn about ExamTaza.in — your trusted Sarkari jobs and exam updates portal." },
      { property: "og:title", content: "About ExamTaza.in" },
      { property: "og:description", content: "Independent Sarkari jobs and results portal." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container-page py-8 max-w-3xl space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">About ExamTaza.in</h1>
        <p className="mt-2 text-muted-foreground">Helping millions of Indian aspirants stay updated with the latest Sarkari opportunities.</p>
      </header>
      <div className="prose-article">
        <p>
          <strong>ExamTaza.in</strong> is an independent informational portal dedicated to bringing the
          fastest and most accurate updates on government jobs, results, admit cards, syllabus,
          answer keys and admissions across India.
        </p>
        <h2>Our Mission</h2>
        <p>
          We believe every aspirant deserves equal access to opportunity information. Our mission
          is to make government exam information clean, fast, mobile-friendly and free for everyone.
        </p>
        <h2>What We Cover</h2>
        <ul>
          <li>Latest Sarkari job notifications from across India</li>
          <li>Admit card and hall ticket releases</li>
          <li>Exam results and merit lists</li>
          <li>Detailed syllabus and exam pattern</li>
          <li>Provisional and final answer keys</li>
          <li>College and university admissions</li>
        </ul>
      </div>
      <DisclaimerBox />
    </div>
  );
}
