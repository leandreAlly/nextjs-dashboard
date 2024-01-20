import { Metadata } from 'next';
import Hero from './components/Hero';
import About from './components/Home/About';
import Header from './components/Home/Header';
import Navbar from './components/Home/NavBar';
import Pricing from './components/Home/Pricing';
import Testimoni from './components/Home/Testimoni';
import testmoni from '../scripts/testimoni';
import Newsletter from './components/Home/NewLetter';
import Contact from './components/Home/Contact';
import Footer from './components/Home/Footer';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="flex min-h-screen flex-col px-6">
        <Hero />
        <About />
        <Pricing />
        <Testimoni listTestimoni={testmoni} />
        <Newsletter />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
