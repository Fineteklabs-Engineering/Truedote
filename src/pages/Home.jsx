import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import SolutionsSection from '../components/SolutionsSection';
import ResearchSection from '../components/ResearchSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Truedote | AI-Powered Diagnostics for Healthcare Providers</title>
        <meta
          name="description"
          content="Truedote gives healthcare providers real-time, AI-backed decision support to reduce diagnostic errors at every stage of care."
        />
        <link rel="canonical" href="https://www.truedote.com/" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SolutionsSection />
      <ResearchSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Home;