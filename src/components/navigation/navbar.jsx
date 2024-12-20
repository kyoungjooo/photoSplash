import { useState } from "react";
import * as Style from "./navStyle.js";
import { Link } from "react-router-dom";
import { navList } from "./nav.js";

const Navbar = () => {
  const [navigate, setNavigate] = useState(navList);
  return (
    <Style.Nav>
      {navigate.map((item) => {
        return (
          <Link to={item.path} key={item.label}>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </Style.Nav>
  );
};
export default Navbar;
