import { Route, Routes } from "react-router-dom";
import { PATH } from "./utils/path";
import Home from "./pages/Home/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Layout from "./templates/Layout";

import Profile from "./pages/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import BookTicket from "./pages/BookTicket/BookTicKet";
function App() {
  return (
    <Routes>
      <Route path={PATH.LAYOUT} element={<Layout />}>
        <Route path={PATH.HOME} index element={<Home />} />
        <Route path={PATH.MOVIE} element={<MovieDetail />} />
      </Route>
      <Route path={PATH.PROFILE} element={<Profile />} />
      <Route path={PATH.DATVE} element={<BookTicket />} />
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.REGISTER} element={<Register />} />
    </Routes>
  );
}

export default App;
