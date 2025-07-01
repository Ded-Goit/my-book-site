import Image from "next/image";
import styles from "./page.module.css";
import FrogTask from "@/components/FrogTask/FrogTask";

const tasks = [
  {
    title: "З'їж жабу",
    description: "Почни день із найскладнішого завдання.",
  },
  {
    title: "Фокус без відволікань",
    description: "Виділи 90 хвилин на роботу без перерв.",
  },
  {
    title: "План на день",
    description: "Пиши 3 ключові цілі щодня зранку.",
  },
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>«Зроби це зараз» — Брайан Трейсі</h1>
          <div className={styles.tasks}>
            {tasks.map((task, index) => (
              <FrogTask
                key={index}
                title={task.title}
                description={task.description}
              />
            ))}
          </div>
        </div>
        <div className={styles.imagesBlock}>
          <div className={styles.imageGroup}>
            <Image
              src="/book.webp"
              alt="Книга"
              width={300}
              height={400}
              sizes="(max-width: 480px) 200px,
                     (max-width: 1024px) 250px,
                     300px"
              priority
              className={styles.imageMain}
            />
            <Image
              src="/frogs/frog_with_red_legs.webp"
              alt="Жабеня"
              width={120}
              height={120}
              className={styles.imageFrog}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
