import IndexHooks from "../Hooks/IndexHooks";
// import { Main } from "../Main";
import {createBrowserRouter} from "react-router-dom"
import IndexLearnCompo from "../Learn Components/IndexLearnCompo";
import IndexLearnRendering from "../Learn_Rendering/IndexLearnRendering";
import OrderWithID from "./OrderWithID";
import NestedRoute from "./NestedRoute";
import Page404 from "./Page404";
// bisa menggunakan router element contoh <Route path:"/s" elem:<A /> /> 
// create browser di cocokan untuk peggunaan api kayanya, gatau gw bejir

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexHooks />,
  },
  {
    path: "/learn-component",
    element: <IndexLearnCompo />,
  },
  {
  path: "/learn-rendering",
    element: <IndexLearnRendering />,
  },
  {
  path: "/404",
    element: <Page404 />,
  },
  {
    path: "/order/:id",
    element: <OrderWithID />,
    children: [
    {
      path: "Nested/:idNes",
      element: <NestedRoute />,
    },
  ]},

]);