import React, {Component} from "react"

class PhoneForm extends Component{
    
    state = {
        name : '',
        phone : ''
    }

    handleChange = (e) => {
        //this.setState({e.target.value : e.target.value}); ???
        this.setState({ [e.target.name] : e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.onCreate({name : this.state.name, phone : this.state.phone});
        this.props.onCreate(this.state);
        this.setState({ name : '' });
        this.setState({ phone : ''});
    }
    
    render(){
        return <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} 
                           name = "name" 
                           value={this.state.name}/>
                    <input onChange={this.handleChange} 
                           name = "phone" 
                           value={this.state.phone}/>
                    <button type="submit">submit!</button>
                </form>
                <h1>{this.state.name}</h1>
                <h1>{this.state.phone}</h1>
                </div>
    }
}

export default PhoneForm;