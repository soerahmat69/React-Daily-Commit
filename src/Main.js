import React from "react";
// import { Nav } from "./Nav"
// import Porto from './Porto/Porto';
// import IndexLearnCompo from "./Learn Components/IndexLearnCompo";
// import IndexLearnRendering from "./Learn_Rendering/IndexLearnRendering";
// import IndexHooks from "./Hooks/IndexHooks";
import { Nav } from "./nav"
import IndexRoutes from "./LearnRouter/IndexRoutes";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {Actions} from "./Ngeredux/store/Actions";
import Counter from "./Ngeredux/store/Counter";

export const Main = () => {

  return (
    <>
    <Nav />
  
      <div className=" mx-10">
        {/* <IndexLearnCompo /> */}
        {/* <IndexLearnRendering /> */}
        {/* <IndexHooks /> */}
        <IndexRoutes />
        <Counter />
      </div>
    </>
  );
};
