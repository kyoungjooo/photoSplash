import { useEffect, useState } from "react";
import * as Style from "./navStyle.js";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import navList from "./nav.json";
import { useRecoilState } from "recoil";
import { pageState } from "../../store/atoms/pageState.jsx";
import { searchState } from "../../store/atoms/searchState.jsx";

const Navbar = () => {
  const location = useLocation();
  const [nav, setNav] = useState(navList);
  const [page, setPage] = useRecoilState(pageState);
  const [search, setSearch] = useRecoilState(searchState);
  useEffect(() => {
    nav.forEach((navEl) => {
      navEl.isActive = false;
      if (
        navEl.path === location.pathname ||
        location.pathname.includes(navEl.path)
      ) {
        navEl.isActive = true;
        setSearch(navEl.searchValue);
        setPage(1);
      }
      setNav([...nav]);
    });
    console.log(nav);
  }, [location.pathname]);

  return (
    <Style.Nav>
      {nav.map((item) => {
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
