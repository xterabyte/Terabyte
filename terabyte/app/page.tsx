import Hero from "./components/Hero";
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
      {/* Other sections will go here */}
    </main>
  )
}