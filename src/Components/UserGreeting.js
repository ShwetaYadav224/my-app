import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state= {
isLoggedIn: true
        }
    }
  render() {
    return(
        this.state.isLoggedIn ?
        <div>Hello Shwete</div> :
        <div>Hello Guest</div>
    )
// let message
// if(this.state.isLoggedIn){
//     message=<div>HEllo Shwetee</div>
// }
// else{
//     message=<div>HEllo Guest</div>
// }
// return(
//     <div>{message}</div>
// )


// if(this.state.isLoggedIn){
//     return<div>
//         Welcome Shwete!!
//     </div>
// }
// else{
//     return <div>
//         hello Guest
//     </div>
// }



    // return (<div>
    //     <div>Welcome Shweta</div>
    //   <div>Welcome Guest</div>
    // </div>
      
    // )
  }
}

export default UserGreeting