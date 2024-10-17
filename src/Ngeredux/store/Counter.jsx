// Counter.js
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

const Counter = ({ count, increment, decrement, textx }) => {
  const [usernames, setuser] = useState("");
  const [PW, setPW] = useState("");
  const { isLogin, name } = useSelector((state) =>state.isLogin );
  const dispatch = useDispatch();
  const submitHandle = () => {
    if (usernames === PW) {
      dispatch({ type: "CHECK_LOGIN", name: usernames });
      // dispatch({payload:"CHECK_LOGIN"})
    } else {
      console.log("login gagal");
    }
  };


  return (
    <div>
      Login waiting
      <h1>Login: {String(isLogin)}</h1>
<h1>username: {name}</h1>
<input onChange={(e) => setuser(e.target.value)} placeholder="Username" />
<input onChange={(e) => setPW(e.target.value)} placeholder="Password" />
<button onClick={submitHandle} type="submit">Submit</button>
<hr />

      <hr />
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <h1>Text Redux store </h1>
      <h1>Counter: {textx}</h1>
      <button onClick={() => dispatch({ type: "ADD_DATA" })}>ADD DATA</button>
      <button onClick={() => dispatch({ type: "DEL_DATA" })}>DEL DATA</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter,
    textx: state.Textset,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
