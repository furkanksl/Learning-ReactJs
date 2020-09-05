import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'hellooo',
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        this.setState({
            message : 'good bye!'
        })
    }
    


    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                {/*<button onClick = {this.onClickHandler.bind(this)} >Click</button> */}
                {/* <button onClick = {this.onClickHandler.bind(this)} >Click</button> */}
                 <button onClick = {this.onClickHandler} >Click</button> 
            </div>
        )
    }
}

export default EventBind
