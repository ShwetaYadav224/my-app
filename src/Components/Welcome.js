import React, { Component } from 'react'
class Welcome extends Component {
    render(){
const {name, superName}=this.props
        return (
        <h1>Hello {name} {superName}</h1>
        )
    }

}
export default Welcome