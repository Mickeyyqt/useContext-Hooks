import { useReducer } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
const firstReducer = (state, action) => {
  switch (action.type) {
    case "minus":
      return { ...state, count: state.count - 1 };
    case "plus":
      return { ...state, count: state.count + 1 };
    case "updateKey":
      return { ...state, key: action.payload };
    default:
      throw new Error();
  }
};

const ACTION ={
  PLUS : "plus",
  MINUS : "minus",
  UPDATEKEY :"updateKey",
};
function App() {
  const [state, dispatch] = useReducer(firstReducer, { key: "", count: 0 });
  // const [key, setKey] = useState('');
  // const [count, setCount] =useState(0);
  // useEffect(() =>{
  //   console.log("I'm use effect");
  // },[]);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) =>
          dispatch({
            type: "updateKey",
            payload: e.target.value,
          })
        }
      ></input>
      <h1>Your key is -{state.key}</h1>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <span>{state.count}</span>
      <button
        onClick={() => dispatch({ type: "plus" })}
        // onClick={() => {
        //   setCount((prev) => prev + 1);
        // }}
      >
        +
      </button>
    </div>
  );
}

export default App;
