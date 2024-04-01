import { Route, Routes } from "react-router-dom";
import { PATH } from "./utils/path";
import Home from "./pages/Home";
import Layout from "./templates/Layout";

import Profile from "./pages/Profile";
function App() {
  return (
    <Routes>
      <Route path={PATH.LAYOUT} element={<Layout />}>
        <Route path={PATH.HOME} index element={<Home />} />
      </Route>
      <Route path={PATH.PROFILE} element={<Profile />} />
    </Routes>
  );
}

export default App;
