import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

function Nav() {
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
          <NavLink to={"/"}>
            <Button className="bg-primary">Login</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
