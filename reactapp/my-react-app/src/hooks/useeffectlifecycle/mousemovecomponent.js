import React, {useEffect, useState} from 'react';
 
import TableContextComponent from './../tableContextComponent';
const MouseMoveComponent=()=>{
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    
    const getMousePosition=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);
    };
 
    useEffect(()=>{
        // code for componentDidMount()
        console.log('Mouse Move called...');
        window.addEventListener('mousemove',getMousePosition);
        return ()=>{
            // code for componentWillUnMount
            console.log('component is unLoaded');
            window.removeEventListener('mousemove',getMousePosition);
        };
    },[]);

    return(
        <div>
            Use Effect x = {x} and y = {y}
            <hr/>
            
        </div>
    );
};

export default MouseMoveComponent;
