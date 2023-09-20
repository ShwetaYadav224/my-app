import React from "react";
function FunctionClick(){
   function clickMe() {
        alert("Dont Click")

    }
        return(
            <div>
<button onClick={clickMe}>Click</button>
            </div>
        )
}
export default FunctionClick