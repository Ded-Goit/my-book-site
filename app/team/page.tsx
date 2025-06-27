"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import {
  RiLinkedinFill,
  RiTelegramFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterXFill,
} from "react-icons/ri";

const team = [
  {
    name: "Vitalii Korolkov",
    age: 34,
    interests: "To develop, to learn new things",
    photo: "/team/vitalii_korolkov.webp",
    hobby: "I love saunas and bike rides.",
    socials: {
      linkedin: "https://www.linkedin.com/in/vitalii-korolkov-1ab800339/",
      telegram: "https://web.telegram.org/a/#330808029",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Inessa",
    age: 30,
    interests: "Linguistics. Study of foreign languages",
    photo: "/team/inessa.jpeg",
    hobby: "Travel. Reading books, interesting texts and materials. Sports.",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://t.me/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Tetiana Lvova",
    age: 18,
    interests: "??????????",
    photo: "/team/tetiana_lvova.jpeg",
    hobby: "???????????????",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://t.me/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "DED",
    age: 53,
    interests: "Immersion in IT",
    photo: "/team/DEDda.webp",
    hobby: "Working in your garden, coding",
    socials: {
      linkedin: "https://www.linkedin.com/in/andrii-ded-romanov/",
      telegram: "https://web.telegram.org/a/#1078273912",
      youtube: "http://www.youtube.com/@DED_8_8_8_8_8",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "student",
    age: 18,
    interests: "??????????",
    photo: "/team/image.png",
    hobby: "???????????????",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://t.me/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "student",
    age: 18,
    interests: "??????????",
    photo: "/team/image.png",
    hobby: "???????????????",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://t.me/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "student",
    age: 18,
    interests: "??????????",
    photo: "/team/image.png",
    hobby: "???????????????",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://t.me/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "student",
    age: 18,
    interests: "??????????",
    photo: "/team/image.png",
    hobby: "???????????????",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://t.me/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
];
export default function TeamPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Автоскрол
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

  // Паралакс при скролі
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const speed = 0.1 + index * 0.02;
          card.style.transform = `translateY(${scrollY * speed}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Our team</h1>
      <h2 className={styles.heading}>Slogan:</h2>
      <h3 className={styles.heading}>Description:</h3>
      <div className={styles.teamGrid} ref={scrollRef}>
        {team.map((member, i) => (
          <div
            key={i}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className={styles.card}
            style={{ "--index": i } as React.CSSProperties}
            // 3D-поворот при русі миші
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const rotateX = -(y / rect.height - 0.5) * 10;
              const rotateY = (x / rect.width - 0.5) * 10;
              card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              card.style.transform = "rotateX(0) rotateY(0)";
            }}
          >
            <div className={styles.cardContent}>
              <Image
                src={member.photo}
                alt={member.name}
                width={140}
                height={140}
                className={styles.photo}
                priority={i === 0}
              />
              <h3>
                {member.name}, {member.age}
              </h3>
              <p>
                <strong>Interests:</strong> {member.interests}
              </p>
              <p>
                <strong>Hobby:</strong> {member.hobby}
              </p>
            </div>
            <div className={styles.socials}>
              {member.socials?.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiLinkedinFill />
                </a>
              )}
              {member.socials?.telegram && (
                <a
                  href={member.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiTelegramFill />
                </a>
              )}
              {member.socials?.youtube && (
                <a
                  href={member.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiYoutubeFill />
                </a>
              )}
              {member.socials?.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiInstagramFill />
                </a>
              )}
              {member.socials?.facebook && (
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiFacebookFill />
                </a>
              )}
              {member.socials?.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                >
                  <RiTwitterXFill />
                </a>
              )}
            </div>
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
