import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ExamTaza.in" },
      { name: "description", content: "How ExamTaza.in handles your data and privacy." },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <div className="container-page py-8 max-w-3xl prose-article">
      <h1 className="text-3xl font-extrabold mb-4">Privacy Policy</h1>
      <p>ExamTaza.in respects your privacy. We do not sell or share your personal data with third parties.</p>
      <h2>Information We Collect</h2>
      <p>We may collect basic analytics data to improve user experience. No personally identifying information is stored without consent.</p>
      <h2>Cookies</h2>
      <p>This website may use cookies to enhance browsing experience. You can disable cookies from your browser settings.</p>
      <h2>Third Party Links</h2>
      <p>Our website may contain links to official government websites. We are not responsible for the privacy practices of those websites.</p>
      <h2>Contact</h2>
      <p>For any privacy-related questions, please write to contact@examtaza.in.</p>
    </div>
  ),
});
