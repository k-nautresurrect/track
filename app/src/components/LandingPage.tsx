import { animateText } from '@/scripts/animateText';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.animate}>
        <h1 className={styles.mainHead} id='main-head'>
          {animateText(
            'Learn and Contribute, Spread the word',
            'main-head',
            100
          )}
        </h1>
      </div>
      <div className={styles.description}>
        <p className={styles.about}>
          want to learn something new, concrete your learning
        </p>
        <p className={styles.about}>
          let&apos;s give back to the community and get confident in your
          learnings
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Explore</button>
          <button className={styles.button}>Contribute</button>
        </div>
      </div>
    </main>
  );
}
