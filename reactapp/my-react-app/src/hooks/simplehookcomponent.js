import React,{useState} from 'react'

// constant expression 
const SimpleHook=(props)=>{
// define the state hook
// de-structuring
// used to store multiple values into a single object
// x: the state property
// updateX: the callback that will be used to update the x
// useState(0), the default value of x is 0
const [x, updateX] = useState(0);
const [y, updateY] = useState(0);
const [result,updateResult] = useState(0);


 const click=()=>{
   
    alert('clicked');
 };   

 const clickWithEvent=(evt)=>{
    alert(`clicked ${evt.target.value}`);
 };   

 const add=()=>{
    let res = x+y;
    updateResult(res);
 };

 return (
    <div className="container">
      <h2>The Simple Hook Component</h2>
      <div>
        <strong>
         {props.message}
        </strong>
      </div>
      <div className="container">
        <div className="form-group">
          x: <input type="text" value={x} onChange={(evt)=> updateX(parseInt(evt.target.value))}/>
        </div>
        <div className="form-group">
        y: <input type="text" value={y} onChange={(evt)=> updateY(parseInt(evt.target.value))}/>
      </div>
      <hr/>
      <input type="button" value="Add" onClick={add}/>
      <br/>
      <strong>
        Resulty is = {result}
      </strong>
      </div>
      <hr/>
      <input type="button" value="Click Me" onClick={click}/>
      <br/>
      <input type="button" value="Click Me with Event"
       onClick={(evt)=>{clickWithEvent(evt)}}/>

    </div>
 );
};

export default SimpleHook;