//import React from "react";
import React, {useState} from "react";
import ReactDom from "react-dom";

const useInput = (initialValue) => {
    const [value, setValue] = useState( initialValue );
    const onChange = (event) => {
        console.log(event.target);
    }
    return {value,onChange};
};

function App() {
  const name = useInput("Mr.");
  return <div>
      <h1>react hooks useInput.</h1>
      <input placeholder="Name" {...name} />
      //<input placeholder="Name" value={name.value}/>
      //<input placeholder="Name" value={name.value} onChange={name.onChange} />
      </div>
}

export default App;
