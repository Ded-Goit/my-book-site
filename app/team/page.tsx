"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Vitalii Korolkov",
    age: 18,
    interests: "??????????",
    photo: "/team/vitalii_korolkov.jpeg",
    hobby: "???????????????",
  },
  {
    name: "Inessa",
    age: 18,
    interests: "??????????",
    photo: "/team/inessa.jpeg",
    hobby: "???????????????",
  },
  {
    name: "Tetiana Lvova",
    age: 18,
    interests: "??????????",
    photo: "/team/tetiana_lvova.jpeg",
    hobby: "???????????????",
  },
  {
    name: "DED",
    age: 53,
    interests: "??????????",
    photo: "/team/DEDda.webp",
    hobby: "???????????????",
  },
  {
    name: "Vitalii Korolkov",
    age: 18,
    interests: "??????????",
    photo: "/team/vitalii_korolkov.jpeg",
    hobby: "???????????????",
  },
  {
    name: "Vitalii Korolkov",
    age: 18,
    interests: "??????????",
    photo: "/team/vitalii_korolkov.jpeg",
    hobby: "???????????????",
  },
  {
    name: "Vitalii Korolkov",
    age: 18,
    interests: "??????????",
    photo: "/team/vitalii_korolkov.jpeg",
    hobby: "???????????????",
  },
  {
    name: "Vitalii Korolkov",
    age: 18,
    interests: "??????????",
    photo: "/team/vitalii_korolkov.jpeg",
    hobby: "???????????????",
  },
];

export default function TeamPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement;
    container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % team.length;
      scrollToIndex(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

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
              <strong>Хобі:</strong> {member.hobby}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {team.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              activeIndex === i ? styles.active : ""
            }`}
            onClick={() => scrollToIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
