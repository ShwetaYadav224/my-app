import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increament(){
        this.setState({
            count:this.state.count + 1
        },
        ( ) => {
            console.log('callback',this.state.count)
        })
       
        console.log(this.state.count)
    }
    decreament(){
        this.setState({
            count:this.state.count - 1
        },
        ( ) => {
            console.log('callback',this.state.count)
        }
        )
        console.log(this.state.count)
    }
  render() {
    return (
    <div>
          <div>Count-{this.state.count}</div>
          <button onClick={() => this.increament()}>Increament</button>
          <div>
          <button onClick={() => this.decreament()}>Decreament</button>
          </div>
          
    </div>
    
    )
  }
}

export default Counter