import { createFileRoute } from "@tanstack/react-router";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — ExamTaza.in" },
      { name: "description", content: "Disclaimer for ExamTaza.in users." },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <div className="container-page py-8 max-w-3xl space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Disclaimer</h1>
      <DisclaimerBox />
      <div className="prose-article">
        <p>
          The information presented on ExamTaza.in is collected from various publicly available sources
          and is provided in good faith for the convenience of users preparing for government
          examinations. We make every effort to keep the information accurate and up to date.
        </p>
        <p>
          However, ExamTaza.in does not provide any warranty regarding the completeness, accuracy or
          reliability of any information on this website. Any action you take upon the information you
          find on this website is strictly at your own risk.
        </p>
      </div>
    </div>
  ),
});
