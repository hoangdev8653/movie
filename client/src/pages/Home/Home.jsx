import News from "./news/News";
import LichChieu from "./lichChieu/LichChieu";
import Event from "./event/Event";
import Banner from "./banner/Banner";
function Home() {
  return (
    <div className="">
      <Banner />
      <LichChieu />
      <Event />
      <News />
    </div>
  );
}

export default Home;
