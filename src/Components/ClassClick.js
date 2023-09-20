import React, { Component } from 'react'
class ClassClick extends Component{
    clickMe(){
        alert("Clicked")
    }
    render(){
            return(
                <div>
<button onClick={this.clickMe}>Click</button>
                </div>
            )
    }
}
export default ClassClick