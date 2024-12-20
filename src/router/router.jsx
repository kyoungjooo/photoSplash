import { createBrowserRouter } from "react-router-dom";
import Home from "../page/index/home";
import About from "../page/about";
import Edit from "../page/edit";

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
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "/edit",
    element: (
      <>
        <Edit />
      </>
    ),
  },
]);

export default router;
