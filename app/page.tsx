import Image from "next/image";
import styles from "./page.module.css";
import FrogTask from "@/components/FrogTask/FrogTask";

const tasks = [
  {
    title: "«Eat a frog»",
    description: "Start your day with the most difficult task",
  },
  {
    title: "«Focus without distractions»",
    description: "Allocate 90 minutes to work without interruption",
  },
  {
    title: "«Plan your day»",
    description: "Write down 3 key goals every morning",
  },
];

export default function HomePage() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>«Do It Now» by Brian Tracy</h1>
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
      </div>
    </section>
  );
}
