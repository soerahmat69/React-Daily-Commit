import React from "react";
// import { Nav } from "./Nav"
// import Porto from './Porto/Porto';
import IndexLearnCompo from "./Learn Components/IndexLearnCompo";
import { Nav } from "./nav"

export const Main = () => {
  return (
    <>
    <Nav />
    
      <div className=" mx-10">
        <IndexLearnCompo />
      </div>
    </>
  );
};
