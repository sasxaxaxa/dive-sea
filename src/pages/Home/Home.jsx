import './Home.scss'
import Hero from "../../sections/Hero/Hero.jsx"
import Weekly from "../../sections/Weekly/Weekly.jsx";
import TopCollection from "../../sections/TopCollection/TopCollection.jsx";
import Explore from "../../sections/Explore/Explore.jsx";
import Unleash from "../../sections/Unleash/Unleash.jsx";
import RecentViewed from "../../components/display/RecentViewed.jsx";
import Banner from "../../sections/Banner/Banner.jsx";
import AccordionAQ from "../../components/ui/Accordion/Accordion.jsx";

const Home = () => {

  return (
    <div>
      <Hero />
      <Weekly />
      <RecentViewed
        position="first"
      />
      <TopCollection />
      <Explore />
      <Unleash />
      <AccordionAQ />
      <Banner />
    </div>
  );
};

export default Home;
