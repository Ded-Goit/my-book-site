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
    interests: "Personal development and learning new things",
    photo: "/team/vitalii_korolkov.webp",
    hobby: "I enjoy saunas and going on bike rides",
    email: "korolkovitalii@gmail.com",
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
    interests: "Linguistics and foreign language exploration",
    photo: "/team/inessa.webp",
    hobby: "Traveling, reading books,engaging materials and doing sports",
    email: "dlya.del27@gmail.com",
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
    age: 38,
    interests: "Traveling,reading historical and psychological literature",
    photo: "/team/tetiana_lvova.webp",
    hobby: "Baking cakes",
    email: "ltvlvova@gmail.com",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://t.me/",
      youtube: "https://youtube.com/",
      instagram: "https://www.instagram.com/tl_lvova?igsh=MXhybW15aWJleGc5Yw==",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "DED",
    age: 53,
    interests:
      "Deepening my expertise in IT and staying immersed in the digital world",
    photo: "/team/DEDda.webp",
    hobby: "Gardening and coding—nurturing both plants and programs",
    email: "mgm.agro04@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/andrii-ded-romanov/",
      telegram: "https://web.telegram.org/a/#1078273912",
      youtube: "http://www.youtube.com/@DED_8_8_8_8_8",
      instagram: "https://www.instagram.com/panna_agnes?igsh=ZHM3cG55NHB4YWJr",
      facebook: "https://www.facebook.com/bzhenchakivska?locale=uk_UA",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Maryna Pasichnyk",
    age: 26,
    interests: "Self-development and achieving career success",
    photo: "/team/maryna_pasichnyk.webp",
    hobby: "Reading books, playing computer games, traveling",
    email: "marikimbzenshik@gmail.com",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://web.telegram.org/a/#367969527",
      youtube: "https://youtube.com/",
      instagram: "https://www.instagram.com/panna_agnes?igsh=ZHM3cG55NHB4YWJr",
      facebook: "https://www.facebook.com/bzhenchakivska?locale=uk_UA",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Daria",
    age: 39,
    interests: "Education and lifelong learning",
    photo: "/team/daria.webp",
    hobby: "Reading",
    email: "daria2k7@ukr.net",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://web.telegram.org/a/#484211666",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Nataliia Nazarovska",
    age: 40,
    interests: "Data analytics, self-development, and sports",
    photo: "/team/nataliia_nazarovska.webp",
    hobby: "Traveling and reading paper books",
    email: "nnazarowska@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/nataliia-nazarovska/",
      telegram: "https://web.telegram.org/a/#536694160",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Anton Rusanov",
    age: 48,
    interests:
      "Studying data analysis and uncovering patterns behind the numbers",
    photo: "/team/anton_rusanov.webp",
    hobby: "Playing guitar and enjoying a good match of badminton",
    email: "ruanvlad@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/anton-ruan-rusanov",
      telegram: "https://web.telegram.org/a/#543588586",
      youtube: "http://www.youtube.com/@antonrusanov6149",
      instagram: "https://instagram.com/",
      facebook: "https://www.facebook.com/share/1AsbtgtsQT/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Yuliia Artiuk",
    age: 39,
    interests:
      "Career growth and travel. I enjoy working with numbers and analyzing data",
    photo: "/team/yuliia_artiuk.webp",
    hobby: "Baking desserts",
    email: "artiukyu@gmail.com",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://web.telegram.org/a/#5753277014",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Alisa Tsurukova",
    age: 40,
    interests: "Self-development and studying data analysis",
    photo: "/team/alisa_tsurukova.webp",
    hobby:
      "Traveling, graphic novels, handcrafting (leather work, embroidery), baking",
    email: "alisa.tsurukova@gmail.com",
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
    name: "Kateryna Rudnyk",
    age: 25,
    interests:
      "Data analysis, numerical problem-solving, and performing complex calculations",
    photo: "/team/kateryna_rudnyk.webp",
    hobby:
      "Staying active through sports, experimenting in the kitchen, exploring new places, and learning foreign languages",
    email: "katyarudnik00@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/katya-rudnik256h452/",
      telegram: "https://web.telegram.org/a/#434197496",
      youtube: "https://youtube.com/",
      instagram: "https://www.instagram.com/iwannabeapinkwhale_/",
      facebook: "https://www.facebook.com/profile.php?id=100008417738629",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Natalya",
    age: 39,
    interests: "Traveling and staying active through sports",
    photo: "/team/natalya_demarchuk_1.webp",
    hobby: "Baking desserts in my free time",
    email: "nata.demarchuk@gmail.com",
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
    name: "Larysa Yevsiukova",
    age: 52,
    interests: "Self-development and modern information technologies",
    photo: "/team/larysa_evsiukova.webp",
    hobby: "Spending time in nature, growing plants, sewing",
    email: "laraevs18@gmail.com",
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
    name: "Oleksandra Baranchuk",
    age: 20,
    interests: "Personal and career development",
    photo: "/team/oleksandra-baranchuk.webp",
    hobby: "Reading, staying active, solving logic puzzles",
    email: "baranchukoleksandra@gmail.com",
    socials: {
      linkedin: "https://linkedin.com/",
      telegram: "https://web.telegram.org/a/#1177936501",
      youtube: "https://youtube.com/",
      instagram: "https://www.instagram.com/asp_id0?igsh=dWtwNHp2YnV3eDM2",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Anna Popko",
    age: 26,
    interests: "Information technology and creative professions",
    photo: "/team/anna_popko.webp",
    hobby: "Reading, drawing, enjoying walks in nature",
    email: "a.popko@goit.ua",
    socials: {
      linkedin: "https://www.linkedin.com/in/anna-popko-1ab964272/",
      telegram: "https://web.telegram.org/a/#381015143",
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

  /*useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % team.length;
      scrollToIndex(nextIndex);
    }, 100000);
    return () => clearInterval(interval);
  }, [activeIndex]);*/

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
                {member.email ? (
                  <a
                    href={`mailto:${member.email}?subject=Hello ${member.name}`}
                    className={styles.emailLink}
                  >
                    {member.name}
                  </a>
                ) : (
                  member.name
                )}
                , {member.age}
              </h3>
              <p>
                <strong>Interests:</strong> {member.interests}
              </p>
              <p>
                <strong>Hobbies:</strong> {member.hobby}
              </p>
            </div>
            <div className={styles.socials}>
              {member.socials?.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  data-tooltip="Send email"
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
