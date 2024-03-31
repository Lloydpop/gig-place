import { AboutSection } from "./HomeComponent/About";
import Hero from "./HomeComponent/Hero";
import { DownloadSection } from "./HomeComponent/HowToDownload";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
