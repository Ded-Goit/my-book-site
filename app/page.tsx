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
      <h1 className={styles.heading}>«Зроби це зараз» — Брайан Трейсі</h1>
      {tasks.map((task, index) => (
        <FrogTask
          key={index}
          title={task.title}
          description={task.description}
        />
      ))}
    </main>
  );
}
