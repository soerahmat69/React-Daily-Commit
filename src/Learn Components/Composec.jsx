import React from "react";

//membuat komponen dari function 
export const Composec = ({onclick}) => {

  return (
    <>
      <button id="submit" onClick={onclick}
        className="bg-slate-300 mx-3 py-2 hover:ring-black ring-1 px-3 rounded-md"
        type="submit"
      >
        submit
      </button>
    </>
  );
};
