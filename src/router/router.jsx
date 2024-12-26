import { createBrowserRouter } from "react-router-dom";
import Home from "../page/index/home";
import About from "../page/about";
import KakaoMap from "../components/kakaoMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/search/:id",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
]);

export default router;
