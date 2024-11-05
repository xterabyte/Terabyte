import Hero from "./components/Hero";
import CareerSection from './components/career-section'
import MarketingSolutions from "./components/marketing-solution";

export default function Home() {
  return (
    <main>
      <Hero />
      <CareerSection />
      <MarketingSolutions />
      {/* Other sections will go here */}
    </main>
  )
}