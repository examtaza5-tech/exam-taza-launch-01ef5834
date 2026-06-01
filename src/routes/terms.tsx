import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — ExamTaza.in" },
      { name: "description", content: "Terms and conditions of using ExamTaza.in." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <div className="container-page py-8 max-w-3xl prose-article">
      <h1 className="text-3xl font-extrabold mb-4">Terms & Conditions</h1>
      <p>By accessing ExamTaza.in you agree to be bound by the following terms and conditions.</p>
      <h2>Use of Content</h2>
      <p>All content on this website is provided for informational purposes only. You may not republish or commercially distribute content without prior permission.</p>
      <h2>External Links</h2>
      <p>This website contains links to official government websites. We have no control over the nature, content and availability of those sites.</p>
      <h2>Changes</h2>
      <p>We reserve the right to modify these terms at any time without prior notice.</p>
    </div>
  ),
});
