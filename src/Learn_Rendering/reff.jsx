import React,{ useEffect } from 'react'
import { useRef,useState } from 'react'

export function Reff() {
    const reffHook = useRef(0)
    const handle=()=>{
     reffHook.current++
     console.log(reffHook.current)
    }

  return (
    <>
    <button className='ring-1 ring-black' onClick={()=> handle()} type="submit">PENCED AKUU</button>
    {/* <h1>1{reffHook.current}</h1> */}
    </>)
}


 export function ReffState() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);


  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
    function handleStop() {
      clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
      secondsPassed = (now - startTime) / 1000;
    }

    return (
      <>
        <h1>Time passed: {secondsPassed.toFixed(4)}</h1>
        <button onClick={handleStart}>
          Start
        </button>
        <button onClick={handleStop}>
          Stop
        </button>
      </>
    );
  }


