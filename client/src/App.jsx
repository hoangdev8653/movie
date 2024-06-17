import { Route, Routes } from "react-router-dom";
import { PATH } from "./utils/path";
import Home from "./pages/Home/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import News from "./pages/news/News";
import HeThongRap from "./pages/HeThongRap/HeThongRap";
import EventAndSale from "./pages/EventAndSale/EventAndSale";
import LichChieu from "./pages/LichChieu/LichChieu";
import Rap from "./pages/RapDeatail/RapDeatail";
import Layout from "./templates/Layout";

import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import BookTicket from "./pages/BookTicket/BookTicKet";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path={PATH.LAYOUT} element={<Layout />}>
        <Route path={PATH.HOME} index element={<Home />} />
        <Route path={PATH.MOVIE} element={<MovieDetail />} />
        <Route path={PATH.TINTUC} element={<News />} />
        <Route path={PATH.HETHONGRAP} element={<HeThongRap />} />
        <Route path={PATH.RAP} element={<Rap />} />
        <Route path={PATH.EVENTANDSALE} element={<EventAndSale />} />
        <Route path={PATH.LICHCHIEU} element={<LichChieu />} />
      </Route>
      <Route path={PATH.PROFILE} element={<Profile />} />
      <Route path={PATH.DATVE} element={<BookTicket />} />
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.REGISTER} element={<Register />} />
      <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={PATH.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={PATH.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
