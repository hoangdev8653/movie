import { Route, Routes } from "react-router-dom";
import { PATH } from "./utils/path";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/movie-detail/MovieDetail";
import News from "./pages/news/News";
import HeThongRap from "./pages/he-thong-rap/HeThongRap";
import EventAndSale from "./pages/event-sale/EventAndSale";
import LichChieu from "./pages/lich-chieu/LichChieu";
import Rap from "./pages/rap-detail/RapDeatail";
import Layout from "./templates/Layout";

import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import BookTicket from "./pages/book-ticket/BookTicKet";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/not-found/NotFound";

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
        <Route path={PATH.PROFILE} element={<Profile />} />
      </Route>
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
