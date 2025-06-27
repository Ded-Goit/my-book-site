"use client";

import styles from "./resources.module.css";
import {
  FaYoutube,
  FaBookOpen,
  FaHeadphones,
  FaCalendarCheck,
} from "react-icons/fa";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Learning how to learn",
      description: "Barbara Oakley's famous talk on how to learn effectively.",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/watch?v=O96fE1E-rf8",
    },
    {
      title: "Learn to Learn (Coursera)",
      description: "Powerful mental tools to master difficult subjects.",
      icon: <FaBookOpen />,
      link: "https://www.coursera.org/learn/learning-how-to-learn",
    },
    {
      title: "Noisli",
      description:
        "Create your perfect ambient soundscape for focus and relaxation.",
      icon: <FaHeadphones />,
      link: "https://www.noisli.com/",
    },
    {
      title: "Seinfeld Strategy",
      description:
        "Don't Break the Chain! Build your habit with daily execution.",
      icon: <FaCalendarCheck />,
      link: "https://screenapp.io/blog/seinfeld-strategy-complete-guide/",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Additional Resources</h1>
      <div className={styles.grid}>
        {resources.map((res, idx) => (
          <a
            key={idx}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className={styles.icon}>{res.icon}</div>
            <div className={styles.content}>
              <h2>{res.title}</h2>
              <p>{res.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
