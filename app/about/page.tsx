// app/about/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./about.module.css";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Заборона скролу та Esc
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isModalOpen]);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Про книгу</h1>

      {/* Top Block */}
      <div className={styles.row}>
        <div className={styles.colImage}>
          <Image
            src="/summary_of_book_chapters.webp"
            alt="Summary of Book Chapters"
            width={600}
            height={400}
            className={styles.image}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div className={styles.colText}>
          <p>
            «Зроби це зараз» — книга Брайана Трейсі про те, як позбутися звички
            відкладати важливе на потім. Вона містить 21 метод подолання
            прокрастинації.
          </p>
          <blockquote className={styles.quote}>
            “To develop the habit of focusing and concentrating, you need to
            master three key qualities: decision, discipline, and
            determination.”
          </blockquote>
          <ul className={styles.keyPoints}>
            <li>
              ✅ It is the ability to prioritize, act quickly, and follow
              through on tasks that leads to success.
            </li>
            <li>
              ✅ The “frog” is a metaphor for the most unpleasant yet most
              important task—the one you should tackle first.
            </li>
            <li>
              ✅ Consistently completing such tasks builds a habit of
              productivity, boosts self-esteem, and drives positive change.
            </li>
          </ul>
        </div>
      </div>

      {/* Author Block */}
      <div className={styles.row}>
        <div className={styles.colText}>
          <p>
            Браян Трейсі – канадсько‑американський мотиваційний спікер,
            письменник і спеціаліст із розвитку особистості. Народився 5 січня
            1944 року в Чарлоттауні, острів Принца Едварда, Канада.
          </p>
          <p>
            Він заснував компанію Brian Tracy International у 1984 році в
            Ванкувері; сьогодні вона базується в Сан-Дієго, Каліфорнія, і надає
            послуги у сфері лідерства, продажів, цілеорієнтації, стратегії,
            творчості та психології успіху.
          </p>
          <p>
            За понад 30 років написав понад 80 книг, у тому числі бестселери Eat
            That Frog!, No Excuses! та The Psychology of Achievement. Провів
            більше 5 000 семінарів і виступив перед більш ніж 5 млн людей у
            понад 55 країнах.
          </p>
          <p>
            Освіта: університет Альберти (Канада). Книги: понад 80 видань; Do it
            now! продано 1.6 млн копій та перекладено на 42 мови.
          </p>
        </div>
        <div className={styles.colImage}>
          <Image
            src="/brian_tracy.webp"
            alt="Brian Tracy"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              ✖
            </button>
            <Image
              src="/summary_of_book_chapters.webp"
              alt="Summary of Book Chapters"
              width={1200}
              height={800}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
