export default function Page() {
  const examples = [
    {
      title: "Instead of",
      tone: "bad",
      items: ["hi", "hello?", "are you there", "got a minute?"],
    },
    {
      title: "Try this",
      tone: "good",
      items: [
        "Hey — can you review my PR when you have time? It changes the login flow and I’m stuck on the failing test.",
        "Can you help me debug this error? It happens when I click “Save”: `TypeError: ...`",
        "Do you know the status of the deployment to staging today?",
      ],
    },
  ];

  return (
    <main className="wrap">
      <header className="hero">
        <p className="kicker">nohello</p>
        <h1>Don’t start with “hello”.</h1>
        <p className="sub">
          Ask the question right away—include context, links, errors, and what
          you’ve tried. It’s faster for everyone.
        </p>

        <div className="actions">
          <a className="btn" href="#examples">
            Show examples
          </a>
          <a className="btn secondary" href="#template">
            Use a template
          </a>
        </div>
      </header>

      <section id="examples" className="grid">
        {examples.map((block) => (
          <section key={block.title} className="card">
            <h2>{block.title}</h2>
            <div className="bubbleList">
              {block.items.map((text, idx) => (
                <div key={idx} className={`bubble ${block.tone}`}>
                  <span className="label">You</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section id="template" className="card">
        <h2>A good first message template</h2>
        <p className="muted">
          Copy/paste this and fill in the blanks. You’ll usually get a better
          answer, faster.
        </p>

        <pre className="pre">
{`Hey! I need help with: <one sentence>

Context:
- What I’m doing:
- What I expected:
- What happened:
- What I tried:

Links / screenshots:
- <url>

Errors / logs:
- <paste here>`}
        </pre>
      </section>

      <footer className="footer">
        <p className="muted">
          Be direct, be kind, and include enough context to help.
        </p>
      </footer>
    </main>
  );
}