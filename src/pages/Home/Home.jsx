import './Home.scss'
import Hero from "../../sections/HomeMain/Hero.jsx"
import Weekly from "../../sections/Weekly/Weekly.jsx";
import Table from "../../components/ui/Tables/Table.jsx";

const Home = () => {

  return (
    <div>
      <Hero />
      <Weekly />
      <Table />
    </div>
  );
};

export default Home;
