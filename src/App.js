//import React from "react";
import React, {useState} from "react";
import ReactDom from "react-dom";

function App() {
  const [item,setItem] = useState(100);
  const incrementItem = () => setItem( item + 1);
  const decrementItem = () => setItem( item - 1);
  return <div>
      <h1>react hooks useState.</h1>
      <div>item number is : {item}</div>
      <div>item number is : {setItem}</div>
      <button onClick={incrementItem}>incrementItem</button>
      <button onClick={decrementItem}>decrementItem</button>
      </div>
}


//위 방식을 class component 방식으로 똑같이 만들어보자.! 
class uglyApp extends React.Component{
    state = {
      item : 1
    };
    render(){
        return <div>
        <h1>react hooks useState.</h1>
        <div>item number is : {this.state.item}</div>
        <button onClick={this.incrementItem}>incrementItem</button>
        <button onClick={this.decrementItem}>decrementItem</button>
        </div>
    };
    incrementItem = () => {
       this.setState( state => {
           return {
               item : state.item +1
           }
       })
   }
    decrementItem = () => {
       this.setState( state => {
           return {
               item : state.item -1
           }
       })
   }
}

export default App;
