// components/FrogTask.tsx
import styles from "./FrogTask.module.css";

interface FrogTaskProps {
  title: string;
  description: string;
}

const FrogTask: React.FC<FrogTaskProps> = ({ title, description }) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default FrogTask;
