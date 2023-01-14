import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div>
          <span> this is the row </span>
          <div className={styles.column}>
            <span> this is thhe column</span>
            <span> this is thhe column</span>
            <span> this is thhe column</span>
          </div>
        </div>
        <div>
          <span> this is the row </span>
          <div className={styles.column}>
            <span> this is thhe column</span>
            <span> this is thhe column</span>
            <span> this is thhe column</span>
          </div>
        </div>
        <div>
          <span> this is the row </span>
          <div className={styles.column}>
            <span> this is thhe column</span>
            <span> this is thhe column</span>
            <span> this is thhe column</span>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <span>socialmedia links</span>
        <span>socialmedia links</span>
        <span>socialmedia links</span>
      </div>
    </footer>
  );
}
