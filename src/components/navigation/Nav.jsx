import defaultUser from "@/assets/default-user.png";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

function Nav() {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center border-b border-border px-4 py-2">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">NextMove</h1>
          </Link>
        </div>
        <div>
          <ul className="flex items-center *:px-4">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4 ">
              <img
                title={user?.displayName ? user?.displayName : "N/A"}
                className="w-10 h-10 object-cover rounded-full"
                src={user?.photoURL ? user?.photoURL : defaultUser}
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
        </div>
      </div>
    </div>
  );
}

export default Nav;
