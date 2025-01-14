import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import BackToTop from "../components/BackToTop";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
}

export default Layout;
