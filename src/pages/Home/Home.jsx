import './Home.scss'
import Hero from "../../sections/Hero/Hero.jsx"
import Weekly from "../../sections/Weekly/Weekly.jsx";
import TopCollection from "../../sections/TopCollection/TopCollection.jsx";
import Explore from "../../sections/Explore/Explore.jsx";
import Unleash from "../../sections/Unleash/Unleash.jsx";
import RecentViewed from "../../components/display/RecentViewed.jsx";

const Home = () => {

  return (
    <div>
      <Hero />
      <Weekly />
      <TopCollection />
      <Explore />
      <Unleash />
      <RecentViewed />
    </div>
  );
};

export default Home;
