import Navbar from "../components/navbar";
import Hero from "../components/hero";
import AdvancedStatistics from "../components/advancedStatistics";
import LinkShortener from "../components/linkShortener";
import Boost from "../components/boost";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LinkShortener />
      <AdvancedStatistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default Home;
