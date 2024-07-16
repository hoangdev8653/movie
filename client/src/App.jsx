import { Route, Routes } from "react-router-dom";
import { PATH } from "./utils/path";
import Home from "./pages/user/home/Home";
import MovieDetail from "./pages/user/movie-detail/MovieDetail";
import News from "./pages/user/news/News";
import HeThongRap from "./pages/user/he-thong-rap/HeThongRap";
import EventAndSale from "./pages/user/event-sale/EventAndSale";
import LichChieu from "./pages/user/lich-chieu/LichChieu";
import Rap from "./pages/user/rap-detail/RapDeatail";
import LayoutUser from "./templates/Layout";

import Profile from "./pages/user/profile/Profile";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import BookTicket from "./pages/user/book-ticket/BookTicKet";
import ForgotPassword from "./pages/user/ForgotPassword";
import ResetPassword from "./pages/user/ResetPassword";
import NotFound from "./pages/user/not-found/NotFound";
import LayoutAdmin from "./templates/admin/Layout";

import DashBoard from "./pages/admin/DashBoard";
import TheaterSystem from "./pages/admin/TheaterSystem";
import Theater from "./pages/admin/Rap";
import Movies from "./pages/admin/Movies";
import User from "./pages/admin/User";

function App() {
  return (
    <Routes>
      <Route path={PATH.LAYOUT} element={<LayoutUser />}>
        <Route path={PATH.HOME} index element={<Home />} />
        <Route path={PATH.MOVIE} element={<MovieDetail />} />
        <Route path={PATH.TINTUC} element={<News />} />
        <Route path={PATH.HETHONGRAP} element={<HeThongRap />} />
        <Route path={PATH.RAP} element={<Rap />} />
        <Route path={PATH.EVENTANDSALE} element={<EventAndSale />} />
        <Route path={PATH.LICHCHIEU} element={<LichChieu />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
      </Route>

      <Route path={PATH.LAYOUTADMIN} element={<LayoutAdmin />}>
        <Route path={PATH.DASHBOARD} index element={<DashBoard />} />
        <Route path={PATH.THEATER_SYSTEM} element={<TheaterSystem />} />
        <Route path={PATH.THEATER} element={<Theater />} />
        <Route path={PATH.MOVIES} element={<Movies />} />
        <Route path={PATH.USER} element={<User />} />
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
