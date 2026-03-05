import Contact from './components/Contact';
import FAQ from './components/FAQ';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Location from './components/Location';
import MobileStickyCta from './components/MobileStickyCta';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import ServiceDetails from './components/ServiceDetails';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import { siteData } from './data';
import { theme } from './theme';

function App() {
  return (
    <div className="min-h-screen pb-20 md:pb-0" style={{ backgroundColor: theme.colors.muted }}>
      <Navbar data={siteData} theme={theme} />
      <main>
        <Hero data={siteData} theme={theme} />
        <Services data={siteData} theme={theme} />
        <ServiceDetails data={siteData} theme={theme} />
        <Schedule data={siteData} theme={theme} />
        <Team data={siteData} theme={theme} />
        <Location data={siteData} theme={theme} />
        <Contact data={siteData} theme={theme} />
        <Testimonials data={siteData} theme={theme} />
        <FAQ data={siteData} theme={theme} />
        <Gallery data={siteData} theme={theme} />
      </main>
      <Footer data={siteData} theme={theme} />
      <FloatingWhatsApp data={siteData} theme={theme} />
      <MobileStickyCta data={siteData} theme={theme} />
    </div>
  );
}

export default App;
