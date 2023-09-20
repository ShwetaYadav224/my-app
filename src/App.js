
import { Component } from 'react';
import './App.css';
// import EventBind from './Components/EventBind'
//   import Greet from './Components/Greet';
//  import Welcome from './Components/Welcome';
//  import Message from './Components/Message';
// import Hello from './Components/Hello';
// import Counter from './Components/Counter';
// import FunctionClick from './Components/FunctionClick';
// import ClassClick from './Components/ClassClick';
// import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
class App extends Component {
  render() {
  return (
    <div className="App">
      {/* <Message></Message>
      <Counter/> */}
       {/* <Greet name="Neha" superName="BAtman">
        <p>I am child</p>
       </Greet>
       <Greet name="Reeha"superName="CAtman">
        <button>Click</button>
        </Greet> 
       <Greet name="Sneha" superName="Superman">
        <input></input>
        </Greet>
       <Hello/> 
       <Welcome name="OMkar" superName="dabarman"/>   */}
       {/* <FunctionClick></FunctionClick> */}
{/* <ClassClick></ClassClick> */}
{/* <EventBind></EventBind> */}
{/* <ParentComponent ></ParentComponent> */}
<UserGreeting></UserGreeting>
    </div>
  );
}
}


export default App;
