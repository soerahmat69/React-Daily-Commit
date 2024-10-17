import { Music } from "./Music";
import SelectMusic from "./SelectMusic";
import { useEffect, useState } from "react";
import { people } from "./Data";
import { getImageUrl, Avatar } from "./getImage";
import { Reff, ReffState } from "./reff";
import HighOComponent from "./HighOComponent";
// import { Reff } from "./Reff";
// =======================================================================================================

function Load_Music({ music }) {
  // membuat reactive pada saat component di jalankan
  useEffect(() => {
    // melakukan inisiasi ke componennt function
    const play = Music(music);
    play.connect();
    // setelah melakukan konek maka jika function di alankan melakukan retrurn diskonek
    return () => {
      play.disconnect();
    };
  }, [music]);
}

function Pakcik({ params }) {
  return <li>{params !== "" ? params : "kau tak punya bapak"}</li>;
}

function Input({ value, hancdle }) {
  // const [count,setcount] = useState(0)

  return (
    <input
      className="ring-1 ring-black placeholder:bapa kau berbulu my-3"
      type="text"
      onChange={(e) => {
        hancdle(e.target.value);
      }}
      value={value}
    />
  );
}

function InputRenderProps(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="bapak kao mana we"
      />
      {props.render(value)}
    </>
  );
}
function InputChildrenProps(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="bapak kao mana we"
      />
      {props.children(value)}
    </>
  );
}

export default function IndexLearnRendering() {
  // Mmembuat effects Reactive unutk emmlakukan efek pada pembaruan
  const [playmusic, setplay] = useState("Not Play");
  const [lihat, setlihat] = useState(false);
  const [bapak, setbapak] = useState("ga punya bapak");

  function play_song() {
    setlihat(true);
    console.log(12);
  }

  return (
    <>
      {/* menmapilkan komponen select msic di erbebda komponen unutk mengisi play muisc */}
      <SelectMusic
        value={playmusic}
        onchange={(e) => {
          // play_song(e)
          setplay(e.target.value);
          // Load_Music({music: e.target.value})
        }}
      />
      <button
        className="ring-1 ring-black mx-3 my-2"
        onClick={() => play_song()}
      >
        {lihat ? "load playing" : "play"}
        {lihat && "😪"}
      </button>
      <h1 className="text-[100px] text-center">list key props</h1>
      {/* statemnent react yang diluar nurulll */}
      {lihat && <Load_Music music={playmusic} />}
      {lihat && <h1>Playing {playmusic}</h1>}
      <hr className="my-7" />
      <ul>
        {people.map((res) => {
          // melakukan list data dari data, sebenrnya ini juga bisa di taruh di komponen yagess mager doang gw
          return (
            <li className="flex my-2 text" key={res.id}>
              {/* ni kalau lu tengok getimageurl(), ni metod dari img komponen untuk ngetin text soalnya di komponennya cuman return 
              text doang  */}
              <img
                className="rounded-full"
                src={getImageUrl(res)}
                alt={res.id}
              />
              <div className="mx-3">
                <b>{res.name} </b>
                <p className="">Profession: {res.profession}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="my-7" />
      <h1 className="text-[100px] text-center">Component Props</h1>
      {/* list komponen ini yang sayabilang sebnernya juga bisa kalau mau di list aja di di tmapilin mager doang gw, 
      ehek */}
      <div className="flex mx-3">
        <Avatar person={{ imageId: "MK3eW3A", name: "pak ogah" }} size={100} />
        <Avatar person={{ imageId: "MK3eW3A", name: "pak ogah" }} size={90} />
      </div>{" "}
      <hr />
      {/* menngguakan lifing statet yaitu state parent di gunakan unutk melakukan input dan display input */}
      <h1 className="text-[100px] text-center">lifing state</h1>
      <Input value={bapak} hancdle={setbapak} />
      {/* <ul> */}
      <Pakcik params={bapak} />
      {/* </ul> */}
      <hr />
      <h1 className="text-[100px] text-center">Render Props</h1>
      <InputRenderProps
        render={(value) => {
          return <Pakcik params={value} />;
        }}
      />

    <hr />
      <h1 className="text-[100px] text-center">Children Render Props</h1>
      <InputChildrenProps
        children={(value) => {
          return <Pakcik params={value} />;
        }}
      />
          <hr />
      <h1 className="text-[100px] text-center">Using Reff State</h1>
      <Reff />
      <ReffState /><hr />
      <h1 className="text-[100px] text-center">High O Component</h1>
      <HighOComponent />
    </>
  );
}
