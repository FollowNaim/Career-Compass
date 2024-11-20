import defaultUser from "@/assets/default-user.png";
import logo from "@/assets/nav-logo.png";
import { AuthContext } from "@/provider/AuthProvider";
import { Squash as Hamburger } from "hamburger-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

function Nav() {
  const { user, handleLogout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [pathname]);
  let userDP = user?.photoURL ? user.photoURL : defaultUser;
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center border-b border-border px-4 py-2">
        <div className="w-1/6 xl:w-1/12">
          <Link to={"/"}>
            {/* <h1 className="text-2xl font-bold">NextMove</h1> */}
            <img className="w-20" src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center *:px-4">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/my-profile"}>My Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/online-booking"}>Online Booking</NavLink>
            </li>
          </ul>
        </div>

        <div
          className={`transition-all ${
            isOpen ? "translate-y-0" : "-translate-y-[990px]"
          } duration-300 ease-in-out z-50 bg-black/90 text-white absolute left-0 w-full py-10 top-20 backdrop-blur-md
        `}
        >
          <ul className="flex flex-col items-center gap-6 *:px-4">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/my-profile"}>My Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/online-booking"}>Online Booking</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-4 ">
              <img
                title={user?.displayName ? user.displayName : "N/A"}
                className="w-10 h-10 object-cover rounded-full"
                src={userDP}
                alt=""
              />
              <Button onClick={handleLogout} className="bg-primary">
                Log Out
              </Button>
            </div>
          ) : (
            <NavLink to={"/auth/signin"}>
              <Button className="bg-primary">Login</Button>
            </NavLink>
          )}
          <div className="block md:hidden">
            <Hamburger size={22} toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
