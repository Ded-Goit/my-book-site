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
      <h1 className={styles.heading}>About book</h1>

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
            `Do It Now` is a book by Brian Tracy about how to break the habit of
            putting off important things until later. It contains 21 methods for
            overcoming procrastination.
          </p>
          <blockquote className={styles.quote}>
            «To develop the habit of focusing and concentrating, you need to
            master three key qualities: decision, discipline, and determination»
          </blockquote>
          <ul className={styles.keyPoints}>
            <li>
              It is the ability to prioritize, act quickly, and follow through
              on tasks that leads to success.
            </li>
            <li>
              The «frog» is a metaphor for the most unpleasant yet most
              important task—the one you should tackle first.
            </li>
            <li>
              Consistently completing such tasks builds a habit of productivity,
              boosts self-esteem, and drives positive change.
            </li>
          </ul>
        </div>
      </div>

      {/* Author Block */}
      <div className={styles.row}>
        <div className={styles.colText}>
          <p>
            Brian Tracy is a Canadian-American motivational speaker, author, and
            personal development expert. Born on January 5, 1944 in
            Charlottetown, Prince Edward Island, Canada.
          </p>
          <p>
            He founded Brian Tracy International in 1984 in Vancouver; today it
            is based in San Diego, California, and provides services in
            leadership, sales, goal orientation, strategy, creativity, and the
            psychology of success.
          </p>
          <p>
            Over the course of more than 30 years, he has written more than 80
            books, including the bestsellers Eat That Frog!, No Excuses!, and
            The Psychology of Achievement. He has conducted more than 5,000
            seminars and spoken to more than 5 million people in more than 55
            countries.
          </p>
          <p>
            Education: University of Alberta (Canada). Books: Over 80
            publications. Do it now! sold 1.6 million copies and translated into
            42 languages.
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
