"use client";

import styles from "./resources.module.css";
import {
  FaYoutube,
  FaBookOpen,
  FaHeadphones,
  FaCalendarCheck,
  FaTasks,
  FaChartPie,
} from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineMicrophone } from "react-icons/hi";
import { MdOutlineTimer, MdOutlineTrackChanges } from "react-icons/md";
import { BiCodeBlock, BiGitBranch, BiNotepad } from "react-icons/bi";
import { AiOutlineDatabase } from "react-icons/ai";

export default function ResourcesPage() {
  const resources = [
    // 📚 Курси / Навчання
    {
      title: "freeCodeCamp ",
      description: "Our mission: to help people learn to code for free. ",
      icon: <FaBookOpen />,
      link: "https://www.freecodecamp.org/learn",
    },
    {
      title: "Learn to Learn (Coursera)",
      description: "Powerful mental tools to master difficult subjects.",
      icon: <HiOutlineLightBulb />,
      link: "https://www.coursera.org/learn/learning-how-to-learn",
    },
    {
      title: "Prometheus",
      description: "Free Ukrainian online education.",
      icon: <HiOutlineLightBulb />,
      link: "https://prometheus.org.ua",
    },

    // 🎧 Аудіо / Подкасти
    {
      title: "Brian Tracy Podcast",
      description: "Self-discipline and 'Eat That Frog'.",
      icon: <HiOutlineMicrophone />,
      link: "https://personaldevelopmentmasterypodcast.com/episode/230-brian-tracy-on-self-discipline-and-eating-that-frog",
    },
    {
      title: "Noisli",
      description: "Create ambient soundscapes for focus and relaxation.",
      icon: <FaHeadphones />,
      link: "https://www.noisli.com",
    },

    // ⏱️ Тайм-менеджмент
    {
      title: "Seinfeld Strategy",
      description: "Build your habit with daily execution.",
      icon: <FaCalendarCheck />,
      link: "https://screenapp.io/blog/seinfeld-strategy-complete-guide",
    },
    {
      title: "ClickUp Time Tracking",
      description: "Project time blocking and tracking.",
      icon: <MdOutlineTimer />,
      link: "https://clickup.com/lp/features/project-time-tracking",
    },
    {
      title: "Time Blocking vs Time Boxing",
      description: "Hubstaff blog on productivity techniques.",
      icon: <MdOutlineTrackChanges />,
      link: "https://hubstaff.com/blog/time-blocking-vs-time-boxing",
    },
    {
      title: "Timeboxing with Clockify",
      description: "Practical guide to timeboxing tasks.",
      icon: <MdOutlineTrackChanges />,
      link: "https://clockify.me/timeboxing",
    },

    // 🗂️ Інструменти для роботи
    {
      title: "Kanban Tool",
      description: "Apps for Kanban and task management.",
      icon: <FaTasks />,
      link: "https://play.google.com/store/search?q=Kanban%20Tool&c=apps",
    },
    {
      title: "Asana",
      description: "Popular project management tool.",
      icon: <FaTasks />,
      link: "https://asana.com",
    },
    {
      title: "Jira",
      description: "Project tracking by Atlassian.",
      icon: <FaTasks />,
      link: "https://www.atlassian.com/software/jira",
    },
    {
      title: "Clockify",
      description: "Time tracker and timesheet app.",
      icon: <MdOutlineTimer />,
      link: "https://clockify.me",
    },
    {
      title: "Notion",
      description: "All-in-one workspace for notes & projects.",
      icon: <BiNotepad />,
      link: "https://www.notion.com",
    },
    {
      title: "Forest App",
      description: "Stay focused by growing virtual trees.",
      icon: <HiOutlineLightBulb />,
      link: "https://play.google.com/store/apps/details?id=cc.forestapp",
    },
    {
      title: "Freedom App",
      description: "Block distractions and focus deeply.",
      icon: <HiOutlineLightBulb />,
      link: "https://play.google.com/store/apps/details?id=to.freedom.android2",
    },

    // 📊 Data Analysis ресурси — нові!
    {
      title: "Kaggle",
      description: "Practice data science with competitions and real datasets.",
      icon: <AiOutlineDatabase />,
      link: "https://www.kaggle.com/",
    },
    {
      title: "Google Dataset Search",
      description: "Find open datasets for your projects.",
      icon: <AiOutlineDatabase />,
      link: "https://datasetsearch.research.google.com/",
    },
    {
      title: "DataCamp",
      description: "Learn data analysis and Python interactively.",
      icon: <HiOutlineLightBulb />,
      link: "https://www.datacamp.com/",
    },
    {
      title: "Awesome Public Datasets",
      description: "Huge curated list of free datasets.",
      icon: <AiOutlineDatabase />,
      link: "https://github.com/awesomedata/awesome-public-datasets",
    },
    {
      title: "Data.gov.ua",
      description: "Official open data portal of Ukraine.",
      icon: <AiOutlineDatabase />,
      link: "https://data.gov.ua/",
    },
    {
      title: "SQLBolt",
      description: "Interactive SQL lessons and exercises.",
      icon: <AiOutlineDatabase />,
      link: "https://sqlbolt.com/",
    },
    {
      title: "Tableau Public",
      description: "Free platform for sharing data visualizations.",
      icon: <FaChartPie />,
      link: "https://public.tableau.com/",
    },
    {
      title: "Towards Data Science",
      description: "Articles and tutorials on data science and analytics.",
      icon: <FaBookOpen />,
      link: "https://towardsdatascience.com/",
    },

    // 💻 Dev / Coding
    {
      title: "React Bits",
      description: "Useful React snippets and patterns.",
      icon: <BiCodeBlock />,
      link: "https://www.reactbits.dev/",
    },
    {
      title: "Git by Bit",
      description: "Modern git commands explained.",
      icon: <BiGitBranch />,
      link: "https://gitbybit.com/",
    },
    {
      title: "Database Build",
      description: "Database prototyping tool.",
      icon: <AiOutlineDatabase />,
      link: "https://database.build/",
    },
    {
      title: "SQLZoo",
      description: "Free interactive SQL tutorial.",
      icon: <AiOutlineDatabase />,
      link: "https://sqlzoo.net/wiki/SQL_Tutorial",
    },
    {
      title: "CodinGame",
      description: "Practice coding through games.",
      icon: <BiCodeBlock />,
      link: "http://codingame.com",
    },
    // 📚 Курси / Навчання
    {
      title: "Eat That Frog (summary - Samuel Davies)",
      description: "Samuel Thomas Davies summary.",
      icon: <FaBookOpen />,
      link: "https://www.samuelthomasdavies.com/book-summaries/business/eat-that-frog",
    },
    // 🎥 Відео / YouTube
    {
      title: "Learning how to learn",
      description: "Barbara Oakley's famous talk on how to learn effectively.",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/watch?v=O96fE1E-rf8",
    },
    {
      title: "Eat That Frog (video)",
      description: "Brian Tracy's method explained on YouTube.",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/watch?v=cvlUaP54w78",
    },
  ];
  const legend = [
    { icon: <FaYoutube />, label: "Video" },
    { icon: <HiOutlineLightBulb />, label: "Course" },
    { icon: <FaBookOpen />, label: "Article / Summary" },
    { icon: <HiOutlineMicrophone />, label: "Podcast" },
    { icon: <FaHeadphones />, label: "Sound / Focus" },
    { icon: <FaCalendarCheck />, label: "Habit / Planning" },
    { icon: <FaTasks />, label: "Task Manager" },
    { icon: <MdOutlineTimer />, label: "Time Tracker" },
    { icon: <AiOutlineDatabase />, label: "Dataset / SQL" },
    { icon: <BiCodeBlock />, label: "Code / Dev" },
    { icon: <FaChartPie />, label: "Data Viz" },
  ];
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Additional Resources</h1>
      <div className={styles.legend}>
        {legend.map((item, idx) => (
          <span key={idx}>
            {item.icon} {item.label}
          </span>
        ))}
      </div>
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
