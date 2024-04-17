import Banner from "./Banner";
import CinemaSystem from "./CinemaSystem";
import News from "./news/News";
import Application from "./Aplication";

function Home() {
  return (
    <div>
      <p>Home</p>
      {/* <Banner /> */}
      <CinemaSystem />
      <News />
      <Application />
    </div>
  );
}

export default Home;
