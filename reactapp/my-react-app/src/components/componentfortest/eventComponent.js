import React, {useState} from 'react';

const EventComponent=(props)=>{
    const [value, setValue] = useState(false);
//  props.onChange, an event emitted by the button
    return (
        <button
         onClick={
             ()=> {
                 setValue(previousState => !previousState);
                 props.onChange(!value);
             }
         } className="b">
          {value === true ? "Switch Off" : "Switch On"}
        </button>
    );
};

export default EventComponent;
