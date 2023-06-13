import React, { useEffect } from "react";
import Compone from "./Compone";
import { Composec } from "./Composec";
import { useState } from "react";

// props adalah parameter pada pada komponen yang dapat 
// di gunakan untuk melakukan penyimpanan sementara mungkin awokaokw
// props sendiri di parameterkan dalam tipe object
const IndexLearnCompo = ({ props }) => {
// end

  //  state adalah  melingkupi lifecycle state hook seperti dibawah ini 
  // state adalah penyimpanan sementara seperti contohnya varibel yang menampug nilai
  // namun kenapa tidak menggunakan variabel saja yaa
  let [username, setusername] = useState();
  let [showName, setShowname] = useState("");
  let [Active,SetActive] = useState(false)
  // end

  // ini state untuk masangin setactive nya kalau di true nntri setelah 10 detik yo matio  
useEffect(ok=>{
  setInterval(parms=>{
SetActive(false)
  },10000)
})  
  function inputSubm(e) {
    setusername(e.target.value);
   
  }

  const clicked = (e) => {
    e.preventDefault();
    setShowname(username);
    SetActive(true)
  };

  return (
    <>
      <Compone />
      <form action="POST" onSubmit={clicked}>
        <input
          onChange={inputSubm}
          className="my-3 text-[15px] px-[30px] py-2 ring-1 ring-black rounded-md"
        ></input>
        <Composec
        />
      </form>
      <h1>Nama saya  : {username}</h1>
      <h1>Nama saya jika di klik : {showName}</h1>
      <Lists warn={showName} active={Active} />
    </>
  );
};

function Lists({warn,active}) {
  // Mmembuat conditional untuk melakukan coditional pada data yang di inginkan 
  // dari yag biasa menjadi di luar binasa pokoknya 
  if(active){
    return <li>{warn} 😪</li>
}else{
  return <li>Not Active 😂</li>
}


}

export default IndexLearnCompo;
