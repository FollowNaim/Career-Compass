import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="font-lato">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
