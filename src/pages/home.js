import Navbar from "../components/navbar";
import Hero from "../components/hero";
import AdvancedStatistics from "../components/advancedStatistics";
import Boost from "../components/boost";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AdvancedStatistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default Home;
