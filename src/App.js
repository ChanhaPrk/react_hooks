//import React from "react";
import React  from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends React.Component{
    state = {
        information : [],
    }
    //자식으로 부터 넘겨받은 데이터는, 부모의 state중 information이라는 배열에 저장하려고 합니다.

    handleCreate = (data) => {
        console.log( data );
        this.setState({information : this.state.information.concat(
            Object.assign( {}, data, {id:this.id++}) 
        ) } );
        //동일한 키가 존재할 경우 대상 객체의 속성은 출처 객체의 속성으로 덮어쓰여집니다. 
        //후에 출처의 속성은 이전의 출처의 속성과 유사하게 덮어씁니다.
        
        //String.prototype.concat()
        //concat() : 메서드는 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환합니다.
        
        //리엑트에서는 "불변성"을 반드시 지켜야 합니다.
        //어떠한 데이터를 수정할 때에는 
            //1. (반드시)setState()을 사용해야 한다.
            //2. 기존의 객체나 배열을 수정하지않고,  
            //   기존에 있던 객체나 배열을 기반으로 새로운 객체 혹은 배열을 만들어서 
            //   데이터를 주입해야 합니다. 
    }
    
    render(){
        return <div>
                    <PhoneForm onCreate={this.handleCreate} />
                    <div><PhoneInfoList data={this.state.information} /></div>
               </div>
    }
}

export default App;
