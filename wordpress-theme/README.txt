=== ExamTaza WordPress Theme ===
Version: 1.0.0
Requires WordPress: 6.0+
Requires PHP: 7.4+

== Installation ==
1. Log in to your WordPress admin.
2. Go to Appearance → Themes → Add New → Upload Theme.
3. Upload examtaza.zip and click Install Now.
4. Click Activate.

== First-time setup ==
1. Appearance → Customize → ExamTaza Settings — paste your WhatsApp, Telegram,
   Instagram, YouTube URLs and edit the Disclaimer if needed.
2. Appearance → Menus — create a "Primary Menu" with Home + all Job Categories
   (Latest Jobs, Admit Card, Results, Syllabus, Answer Key, Admission) and
   assign it to "Primary Menu" location. (If you skip this, the theme auto-
   shows a default menu built from your Job Categories.)
3. Settings → Permalinks → click Save Changes (refreshes URL rules so /post/...
   and /category/... links work).

== Adding a Job Post ==
Job Posts → Add New. Fill the editor with your intro text (English).
Below the editor you'll see the "Job Post Details" box with these fields —
all are optional, only those you fill in will render on the page.

- Hindi Title (optional)
- Hindi Content — full Hindi version; appears when user clicks "हिंदी"
- Age Limit — short text
- Important Dates — one per line:   Event | Date
    Example:   Apply Start | 05/06/2026
- Application Fee — one per line:   Category | Fee
- Vacancy Details — one per line:   Post | Vacancy | Qualification
- Salary — one per line:   Post | Pay Scale
- Selection Process — one step per line
- How To Apply — one step per line
- Important Links — one per line:   Label | URL | type
    type can be: apply, download, official, notification
- FAQs — for each FAQ:
    Q: your question
    A: your answer
    (blank line between FAQs)
- Conclusion — 1-2 lines

Every Job Post automatically gets:
- Important Dates table
- Application Fee table
- Vacancy table
- Salary table
- Numbered steps for Selection Process and How To Apply
- Premium "Important Links" card grid (color-coded by type)
- FAQ accordion
- English/Hindi switch (if Hindi content is set)
- Disclaimer above the footer
- Sidebar with Join WhatsApp/Telegram, Latest Updates, Top Categories

== Custom post type & categories ==
The theme registers a "Job Post" custom post type and a "Job Category"
taxonomy. On activation it seeds these categories:
Latest Jobs, Admit Card, Results, Syllabus, Answer Key, Admission.

== Customizing colors ==
Edit the CSS variables at the top of style.css (root :root block).

== Translation ==
The theme is translation ready (text domain: examtaza). Drop .po/.mo files
into /languages.
