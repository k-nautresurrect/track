import styles from '@/styles/Home.module.css';
import MainHead from '@/components/Head';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LandingPage from '@/components/LandingPage';

export default function Home() {
  return (
    <>
      <MainHead />
      <NavBar />
      <LandingPage />
      <Footer />
    </>
  );
}
