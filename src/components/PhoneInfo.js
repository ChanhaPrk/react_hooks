//각각 전화번호 정보를 보여주는 .js입니다.
import React from "react";

class PhoneInfo extends React.Component{
    render(){
        const style = {
            border : "1px solid black",
            padding : "8px",
            margin : "8px" 
        };        
        
        const { name, phone, id} = this.props.info;
        return <div style={style} key={id}>
            <div><b>{name}</b></div>
            <div>{phone}</div>
        </div>
    }
}

export default PhoneInfo;