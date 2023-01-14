import styles from '@/styles/Home.module.css';
import MainHead from '@/components/Head';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <MainHead />
      <NavBar />
      <main className={styles.main}></main>
      <Footer />
    </>
  );
}
