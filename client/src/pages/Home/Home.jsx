import News from "./news/News";
import LichChieu from "../LichChieu/LichChieu";
import Banner from "./banner/Banner";
import EventAndSale from "../EventAndSale/EventAndSale";
function Home() {
  return (
    <div className="">
      <Banner />
      <LichChieu />
      <EventAndSale />
      <News />
    </div>
  );
}

export default Home;
