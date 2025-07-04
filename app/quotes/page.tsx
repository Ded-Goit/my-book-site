/*export default function QuotesPage() {
  return (
    <section>
      <h1>Quotes from the book</h1>
      <blockquote>
        «Clarity is the most important concept for personal productivity»
      </blockquote>
      <blockquote>
        «All big goals seem unachievable only while they are whole»
      </blockquote>
      <blockquote>«The Pareto Principle (the 80/20 rule)»</blockquote>
      <blockquote>
        «Direct all your forces toward one specific direction»
      </blockquote>
      <blockquote>«Postpone eating the smaller and prettier frogs»</blockquote>
      <blockquote>«The First Law of Success - Concentration»</blockquote>
      <blockquote>
        «Your weakest area of key results sets the ceiling for how effectively
        you can use all your skills and abilities»
      </blockquote>
      <blockquote>«The 3 most important tasks are 90% of success»</blockquote>
      <blockquote>
        «Have everything you might need ready before you start»
      </blockquote>
      <blockquote>«Take it one step at a time»</blockquote>
      <blockquote>
        «Whenever you stop striving to become better, you inevitably become
        worse»
      </blockquote>
      <blockquote>
        «In your life, you must have the honesty to look deep within yourself,
        searching for the limiting factor»
      </blockquote>
      <blockquote>
        «Personal responsibility, self-discipline, and initiative are the keys
        to success»
      </blockquote>
      <blockquote>
        «Gather your resources, unite your talents, focus your energy, and
        channel your abilities toward mastering at least one field that aligns
        with your aspirations»
      </blockquote>
      <blockquote>
        «You can only get your time and your life under control to the degree to
        which you discontinue lower-value activities»
      </blockquote>
      <blockquote>«Think of technology as a servant, not a master»</blockquote>
      <blockquote>
        «It`s psychologically much easier to complete one small part of a big
        project than to start doing everything at once»
      </blockquote>
      <blockquote>
        «Doing truly important work often requires long, uninterrupted stretches
        of time»
      </blockquote>
      <blockquote>
        «Highly productive people take the time to think, plan, and prioritize,
        and only then immediately and steadily begin moving toward their goals»
      </blockquote>
      <blockquote>
        «The more you focus on a single task, the higher your productivity and
        work quality»
      </blockquote>
    </section>
  );
}*/
import styles from "./page.module.css";

const quotes = [
  "«Clarity is the most important concept for personal productivity»",
  "«All big goals seem unachievable only while they are whole»",
  "«The Pareto Principle (the 80/20 rule)»",
  "«Direct all your forces toward one specific direction»",
  "«Postpone eating the smaller and prettier frogs»",
  "«The First Law of Success - Concentration»",
  "«Your weakest area of key results sets the ceiling for how effectively you can use all your skills and abilities»",
  "«The 3 most important tasks are 90% of success»",
  "«Have everything you might need ready before you start»",
  "«Take it one step at a time»",
  "«Whenever you stop striving to become better, you inevitably become worse»",
  "«In your life, you must have the honesty to look deep within yourself, searching for the limiting factor»",
  "«Personal responsibility, self-discipline, and initiative are the keys to success»",
  "«Gather your resources, unite your talents, focus your energy, and channel your abilities toward mastering at least one field that aligns with your aspirations»",
  "«You can only get your time and your life under control to the degree to which you discontinue lower-value activities»",
  "«Think of technology as a servant, not a master»",
  "«It`s psychologically much easier to complete one small part of a big project than to start doing everything at once»",
  "«Doing truly important work often requires long, uninterrupted stretches of time»",
  "«Highly productive people take the time to think, plan, and prioritize, and only then immediately and steadily begin moving toward their goals»",
  "«The more you focus on a single task, the higher your productivity and work quality»",
];

export default function QuotesPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Quotes from the book</h1>
      {quotes.map((quote, idx) => (
        <blockquote key={idx} className={styles.quote}>
          {quote}
        </blockquote>
      ))}
    </section>
  );
}
