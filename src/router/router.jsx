import { createBrowserRouter } from "react-router-dom";
import Home from "../page/index/home";
import About from "../page/about";
import RenderKakaoMap from "../components/kakaoMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <RenderKakaoMap />
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
