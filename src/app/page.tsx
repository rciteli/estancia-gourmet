// app/page.tsx
import Header from '../components/Header/Header';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import Footer from '../components/Footer/Footer';
import SpecialEventsSection from '../components/SpecialEventsSection/SpecialEventSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <WelcomeSection />
      <FeaturesSection />
      <SpecialEventsSection />
      <Footer />
    </div>
  );
}