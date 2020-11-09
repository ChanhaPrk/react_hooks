//PhoneInfo의 리스트 입니다. 
import React from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends React.Component{
    static defaultProps = {
        data : []
    };

    render(){
        const {data} = this.props;
        const list = data.map( info => (<PhoneInfo info={info} key={info.id} />));
        return <div>{list}</div>
    }
}


export default PhoneInfoList;
