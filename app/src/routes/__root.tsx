import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Padhai Point | Home Tuition in Laxmi Nagar, Delhi" },
      { name: "description", content: "Personalised home tuition for Classes 1 to 10 in Laxmi Nagar, Delhi, plus practical computer science learning for college students. Meet tutor Chetanya Sapra." },
      { name: "author", content: "Padhai Point" },
      { property: "og:title", content: "Padhai Point | Home Tuition in Laxmi Nagar" },
      { property: "og:description", content: "Personalised home tuition for school students and practical computer science learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => (
    <main style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h1>Page not found</h1>
      <a href="/">Return to Padhai Point</a>
    </main>
  ),
});

function RootComponent() {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: "light" }}>
      <head><HeadContent /></head>
      <body><Outlet /><Scripts /></body>
    </html>
  );
}
