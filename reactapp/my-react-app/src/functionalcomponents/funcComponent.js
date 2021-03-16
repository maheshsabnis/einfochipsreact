import React from 'react';
// to pass the props
// use 'props' as function parameter
function DemoCompnent(props) {

    
    // contained function can be directly accessed in DOM
    function click(){
        alert('clicked...');
    }    
    // evt is the event object
    // evt.target is the HTML element on which event is raised
    // evt.target.value is the value attribute of the HTML element
    function clickMeParameter(evt){
        alert(`Button is clicked ${evt.target.value}`);
        
    }    
    return(
        <div className="container">
              <h1>The Demo Component</h1> 
              <strong>
                {props.message}
              </strong>
              <input type="button" value="Click Me"
            onClick={click}/> 
            <br/>
            <input type="button" value="Click Me Parameter"
            onClick={(evt)=>{clickMeParameter(evt)}}/> 
        </div>
    );
}

export default DemoCompnent;