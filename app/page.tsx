export default function Home() {
  const faqs = [
    {
      q: "How does it detect action items?",
      a: "AI scans every Slack thread for phrases like 'please do', 'can you handle', or '@mentions with tasks' and extracts them as structured tasks."
    },
    {
      q: "Which Slack plans are supported?",
      a: "Any Slack workspace on Free, Pro, or Business+ plans. You connect via OAuth in seconds — no bot tokens to manage manually."
    },
    {
      q: "Is my Slack data stored?",
      a: "Only task metadata (assignee, deadline, status) is stored. Raw message content is processed in-memory and never persisted."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For remote teams & project managers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Convert Slack Threads into<br />
          <span className="text-[#58a6ff]">Trackable Tasks</span> Automatically
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop losing action items in Slack threads. Our AI monitors your channels, extracts tasks, assigns owners, and sets deadlines — all without leaving Slack.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial
        </a>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            ["Auto-detect", "Action items"],
            ["AI-assigned", "Owners & deadlines"],
            ["Real-time", "Slack sync"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Slack channels monitored",
              "AI-powered task extraction",
              "Assignee & deadline detection",
              "Task dashboard & status tracking",
              "Slack notifications on updates",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started — $15/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-3">7-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} SlackTask. All rights reserved.
      </footer>
    </main>
  );
}
