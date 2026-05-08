import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackTask — Convert Slack Threads into Trackable Tasks",
  description: "Monitors Slack channels for action items and creates trackable tasks with assignees and deadlines automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b573da5b-c808-45a3-8756-0f0d848e9903"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
