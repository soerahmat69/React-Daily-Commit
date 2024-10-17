import React from 'react'
import { useState,useCallback } from 'react';

 const Usecallback= () => {
    const [count, setCount] = useState(0);
  
    // useCallback digunakan untuk menyimpan fungsi handleIncrement
    // agar tidak dibuat ulang setiap kali komponen dirender ulang
    const handleIncrement = useCallback(() => {
      setCount(count + 1);
    }, [count]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    );
  };

  
  const ChildComponent =({onIncrement})=> {
    return (
      <>
      <p>This is componennt child ok</p>
      <button onClick={onIncrement}></button>
      </>
    )
  }
  
  
  function Usecallback2() {
    const [count, setCount] = useState(0);

    // Gunakan useCallback untuk mengelompokkan fungsi increment
    const handleIncrement = useCallback(() => {
      setCount(count + 1);
    }, [count]);
  
    console.log('ParentComponent rendered');
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
  
        {/* Meneruskan fungsi handleIncrement sebagai prop */}
        <ChildComponent onIncrement={handleIncrement} />
      </div>
    );
  }
  
  export {Usecallback,Usecallback2}