"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";

const team = [
  {
    name: "Ірина Василевська",
    age: 28,
    interests: "UX-дизайн, дослідження",
    photo: "/image.png",
    role: "Дизайн сайту, концепт",
  },
  {
    name: "Олександр Коваленко",
    age: 32,
    interests: "Next.js, DevOps",
    photo: "/image.png",
    role: "Розробка та інфраструктура",
  },
  {
    name: "Марія Петренко",
    age: 25,
    interests: "Контент, SEO",
    photo: "/image.png",
    role: "Текст і оптимізація",
  },
  {
    name: "Марія Петренко",
    age: 25,
    interests: "Контент, SEO",
    photo: "/image.png",
    role: "Текст і оптимізація",
  },
  {
    name: "Марія Петренко",
    age: 25,
    interests: "Контент, SEO",
    photo: "/image.png",
    role: "Текст і оптимізація",
  },
  {
    name: "Марія Петренко",
    age: 25,
    interests: "Контент, SEO",
    photo: "/image.png",
    role: "Текст і оптимізація",
  },
  {
    name: "Марія Петренко",
    age: 25,
    interests: "Контент, SEO",
    photo: "/image.png",
    role: "Текст і оптимізація",
  },
  {
    name: "Марія Петренко",
    age: 25,
    interests: "Контент, SEO",
    photo: "/image.png",
    role: "Текст і оптимізація",
  },
];

export default function TeamPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      container.scrollBy({ left: 320, behavior: "smooth" });

      // якщо досягнуто кінця — повернутись на початок
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3500); // кожні 3.5 сек

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Наша команда</h1>
      <div className={styles.teamGrid} ref={scrollRef}>
        {team.map((member, i) => (
          <div
            key={i}
            className={styles.card}
            style={{ "--index": i } as React.CSSProperties}
          >
            <Image
              src={member.photo}
              alt={member.name}
              width={140}
              height={140}
              className={styles.photo}
            />
            <h3>
              {member.name}, {member.age}
            </h3>
            <p>
              <strong>Інтереси:</strong> {member.interests}
            </p>
            <p>
              <strong>Роль:</strong> {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
