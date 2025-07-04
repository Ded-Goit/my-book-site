// app/about/page.tsx
import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Про книгу</h1>
      <div className={styles.images}>
        <Image
          src="/summary_of_book_chapters.webp"
          alt="Summary of Book Chapters"
          width={600}
          height={400}
          className={styles.image}
        />
        <Image
          src="/brian_tracy.webp"
          alt="Brian Tracy"
          width={400}
          height={400}
          className={styles.image}
        />
      </div>

      <div className={styles.textBlock}>
        <blockquote className={styles.quote}>
          “To develop the habit of focusing and concentrating, you need to
          master three key qualities: decision, discipline, and determination.”
        </blockquote>
        <ul className={styles.keyPoints}>
          <li>
            ✅ It is the ability to prioritize, act quickly, and follow through
            on tasks that leads to success.
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
        <p className={styles.bio}>
          Браян Трейсі – канадсько‑американський мотиваційний спікер, письменник
          і спеціаліст із розвитку особистості. Народився 5 січня 1944 року в
          Чарлоттауні, острів Принца Едварда, Канада. Він заснував компанію
          Brian Tracy International у 1984 році в Ванкувері; сьогодні вона
          базується в Сан-Дієго, Каліфорнія, і надає послуги у сфері лідерства,
          продажів, цілеорієнтації, стратегії, творчості та психології успіху.
        </p>
        <p className={styles.bio}>
          Досяг значних успіхів у кар’єрі: за понад 30 років написав понад 80
          книг, у тому числі бестселери Eat That Frog!, No Excuses! та The
          Psychology of Achievement. Трейсі провів більше 5 000 семінарів і
          виступив перед більш ніж 5 млн людей у понад 55 країнах.
        </p>
        <p className={styles.bio}>
          Освіта: університет Альберти (Канада). Кар’єра: пройшов шлях від
          роботи в продажах до COO компанії з капіталом $265 млн, згодом
          заснував індустрію навчання і тренінгів. Книги: понад 80 видань; Do it
          now! продано 1.6 млн копій та перекладено на 42 мови.
        </p>
      </div>
    </section>
  );
}
