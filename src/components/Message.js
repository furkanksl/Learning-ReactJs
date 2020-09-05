import React, { Component } from 'react';
// it is a Class Component
class Message extends Component {

    constructor(){
        super();
        this.state = {
            message : 'Welcome visitor'
        }
    }
    changeMessage(){
        
        if(this.state.message === "Subscribed"){
            this.setState({
                message : "Welcome visitor"
            })
        }else if(this.state.message === "Welcome visitor"){
            this.setState({
                message : "Subscribed"
            })
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()} >Subscribe</button>
            </div>
            
            )
    }
}

export default Message;