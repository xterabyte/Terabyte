import EventsSection from "./components/EventsSection";
import Hero from "./components/Hero";
import MarketingLaunchpad from "./components/MarketingLaunchpad";
import CareerSection from './components/career-section'
import MarketingSolutions from "./components/marketing-solution";
import PortfolioCompanies from "./components/portfoliosection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CareerSection />
      <MarketingSolutions />
      <PortfolioCompanies />
      <EventsSection />
      <MarketingLaunchpad />
    </main>
  )
}