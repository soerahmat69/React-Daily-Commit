// counterReducer.js
const initialState = 0;
const initialText = "400";
const initialAuth = {
  isLogin: false,
  isLogout : false,
  name : ""
}
const LoginAuth = (state = initialAuth,action)=>{
  switch (action.type) {
    case "CHECK_LOGIN":
     console.log("berhaisl login")
     console.log(action.name)
      return {...initialAuth,isLogin :true,name : action.name}
  
    default:
      return initialAuth.isLogin = false
  }
}



const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
const CounterReducerText = (state = initialText, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      state = "200 ok";
      return state 
    case 'DEL_DATA':
      return state = "200 ok del";
    default:
      return state;
  }
};

export {CounterReducer,CounterReducerText,LoginAuth};
