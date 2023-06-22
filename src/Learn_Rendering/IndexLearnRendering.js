
import { Music } from "./Music";
import SelectMusic from "./SelectMusic";
import { useEffect, useState } from "react";
import { people } from "./Data";
import { getImageUrl,Avatar } from "./getImage";

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

export default function IndexLearnRendering() {
  // Mmembuat effects Reactive unutk emmlakukan efek pada pembaruan
  const [playmusic, setplay] = useState("Not Play");
  const [lihat, setlihat] = useState(false);

  function play_song() {
    setlihat(true);
    console.log(12);
  }

  return (
    <>
    {/* menmapilkan komponen select msic di erbebda komponen unutk mengisi play muisc */}
      <SelectMusic
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
        {" "}
        {lihat?"load playing":"play"}{lihat && "😪"}
      </button>
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
               <img className="rounded-full" src={getImageUrl(res)} />
               <div className="mx-3">
              <b>{res.name}  </b>
              <p className="">Profession: {res.profession}</p>
              </div></li>
              
          );
        })}
      </ul>
      <hr className="my-7" />
      {/* list komponen ini yang sayabilang sebnernya juga bisa kalau mau di list aja di di tmapilin mager doang gw, 
      ehek */}
      <Avatar person={{imageId:"MK3eW3A",name:"pak ogah"}} size={100} />
    </>
  );
}
