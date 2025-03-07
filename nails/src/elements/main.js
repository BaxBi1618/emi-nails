import "../styles/main.css";
import Header from "./header";
import PriceList from "./priceList";
import Contact from "./contact";
import AboutMe from "./aboutMe";
import Gallery from "./gallery";

function Main() {
  return (
    <main>
      <Header />
      <PriceList />
      <Contact />
      <AboutMe />
      <Gallery />
    </main>
  );
}

export default Main;
