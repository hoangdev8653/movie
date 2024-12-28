import News from "../TinTuc";
import LichChieu from "../lich-chieu/LichChieu";
import Banner from "./banner/Banner";
import EventAndSale from "../event-sale/EventAndSale";
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
