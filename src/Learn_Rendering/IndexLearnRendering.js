import React from 'react'
import { Music } from './Music'
import SelectMusic from './SelectMusic'
import { useEffect,useState } from 'react'

function Load_Music({music}){

    useEffect(()=>{

        const play  = Music(music)
        play.connect();
        return ()=>{play.disconnect()}
    }, [music])

}

export default function IndexLearnRendering() {
    // Mmembuat effects Reactive unutk emmlakukan efek pada pembaruan  
    const [playmusic,setplay] = useState("Not Play")
    const [lihat,setlihat] = useState(false)
    
   function play_song(){
    setlihat(true)
        console.log(12)
    }

  return (
    <>
    <SelectMusic onchange={(e)=>{
        // play_song(e)
        setplay(e.target.value)
        // Load_Music({music: e.target.value})
    }} />
    <button className='ring-1 ring-black mx-3 my-2' onClick={()=>play_song()}> Play{lihat && "😪"}</button>
    {lihat && <Load_Music music={playmusic} /> }
    {lihat && <h1>Playing {playmusic}</h1>}
    </>)

}

