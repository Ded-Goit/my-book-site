/**export default function ToolsPage() {
  return (
    <section>
      <h1>Інструменти з книги</h1>
      <ul>
        <li>Матриця пріоритетів (важливе/термінове)</li>
        <li>Таймер Помодоро</li>
        <li>Щоденне планування вечором</li>
        <li>Правило 80/20</li>
      </ul>
    </section>
  );
}*/
"use client";

import styles from "./tools.module.css";

export default function ToolsPage() {
  const tools = [
    {
      title: "Priority matrix (important/urgent)",
      link: "https://experience.dropbox.com/uk-ua/resources/eisenhower-matrix",
    },
    {
      title: "Pomodoro Timer",
      link: "https://pomodoro-tracker.com/?lang=en",
    },
    {
      title: "Daily planning in the evening",
      link: "https://www.microsoft.com/uk-ua/microsoft-365/microsoft-to-do-list-app",
    },
    {
      title: "The 80/20 rule",
      link: "https://asana.com/resources/pareto-principle-80-20-rule",
    },
    {
      title:
        "Create, share and collaboratively work on mind maps with MindMeister, the leading online mind mapping software. Includes apps for iPhone, iPad and Android.",
      link: "https://www.mindmeister.com/",
    },
    {
      title:
        "Boost efficiency both in work and life. Millions of people love it. ",
      link: "https://www.xmind.net/",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Tools</h1>
      <div className={styles.grid}>
        {tools.map((res, idx) => (
          <a
            key={idx}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className={styles.content}>
              <h2>{res.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
