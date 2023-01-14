import styles from '@/styles/Navbar.module.css';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.heading}>
          <h2>TRACK</h2>
        </div>
        <div className={styles.options}>
          <ul className={styles.option}>
            <li>
              <a href='#'>solve</a>
            </li>
            <li>
              <a href='#'>ability</a>
            </li>
            <li>
              <a href='#'>maths</a>
            </li>
            <li>
              <a href='#'>development</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
