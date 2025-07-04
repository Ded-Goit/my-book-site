"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {new Date().getFullYear()} Do It Now |{" "}
        <Link href="/team" className={styles.link}>
          team UAnalytica
        </Link>{" "}
        &{" "}
        <a
          href="https://github.com/Ded-Goit"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          creative studio DED production
        </a>
      </p>
    </footer>
  );
}
