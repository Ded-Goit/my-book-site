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
    {
      title: "Eat That Frog (video)",
      description: "Brian Tracy's method explained on YouTube.",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/watch?v=cvlUaP54w78",
    },
    {
      title: "Kanban Tool",
      description: "Apps for Kanban and task management.",
      icon: <FaCalendarCheck />,
      link: "https://play.google.com/store/search?q=Kanban%20Tool&c=apps",
    },
    {
      title: "Eat That Frog (summary)",
      description: "Moonshots summary of Brian Tracy's book.",
      icon: <FaBookOpen />,
      link: "https://www.moonshots.io/eat-that-frog-by-brian-tracy",
    },
    {
      title: "Brian Tracy Podcast",
      description: "Self-discipline and 'Eat That Frog'.",
      icon: <FaHeadphones />,
      link: "https://personaldevelopmentmasterypodcast.com/episode/230-brian-tracy-on-self-discipline-and-eating-that-frog",
    },
    {
      title: "ClickUp Time Tracking",
      description: "Tool for project time blocking and tracking.",
      icon: <FaCalendarCheck />,
      link: "https://clickup.com/lp/features/project-time-tracking",
    },
    {
      title: "Time Blocking vs Time Boxing",
      description: "Hubstaff blog on productivity techniques.",
      icon: <FaBookOpen />,
      link: "https://hubstaff.com/blog/time-blocking-vs-time-boxing/",
    },
    {
      title: "Timeboxing with Clockify",
      description: "Practical guide to timeboxing tasks.",
      icon: <FaBookOpen />,
      link: "https://clockify.me/timeboxing",
    },
    {
      title: "Asana",
      description: "Popular project management tool.",
      icon: <FaCalendarCheck />,
      link: "https://asana.com/",
    },
    {
      title: "Jira",
      description: "Project tracking by Atlassian.",
      icon: <FaCalendarCheck />,
      link: "https://www.atlassian.com/software/jira",
    },
    {
      title: "Clockify",
      description: "Time tracker and timesheet app.",
      icon: <FaCalendarCheck />,
      link: "https://clockify.me/",
    },
    {
      title: "Notion",
      description: "All-in-one workspace for notes & projects.",
      icon: <FaBookOpen />,
      link: "https://www.notion.com/",
    },
    {
      title: "Forest App",
      description: "Stay focused by growing virtual trees.",
      icon: <FaHeadphones />,
      link: "https://play.google.com/store/apps/details?id=cc.forestapp",
    },
    {
      title: "Freedom App",
      description: "Block distractions and focus deeply.",
      icon: <FaHeadphones />,
      link: "https://play.google.com/store/apps/details?id=to.freedom.android2",
    },
    {
      title: "Prometheus",
      description: "Free Ukrainian online education.",
      icon: <FaBookOpen />,
      link: "https://prometheus.org.ua/",
    },
    {
      title: "Eat That Frog (summary)",
      description: "Samuel Thomas Davies summary.",
      icon: <FaBookOpen />,
      link: "https://www.samuelthomasdavies.com/book-summaries/business/eat-that-frog/",
    },
    {
      title: "ResizePixel.com ",
      description: "Easy to use online image editor",
      icon: <FaBookOpen />,
      link: "https://www.resizepixel.com/uk/resize-image/",
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
