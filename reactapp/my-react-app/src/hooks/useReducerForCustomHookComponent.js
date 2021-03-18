import React, {useEffect, useReducer, useState} from 'react';
import axios from 'axios';

// the custom hook that is encapsulatin the useEffect()
const useAxios =(url)=>{
    const [data, updateData] = useState([]);

    useEffect(()=>{
        axios(url).then((response)=>{
            console.log(`Received Data ${response.data}`);
            updateData(response.data);
        }) 
        .catch((error)=>{
            console.log(`Error Occured ${error.message}`);
        });
    },[]);

    return data;
};


const UseReducerCustomHookComponent=()=>{
    // the 'useAxios' will be the custom hook that will encapsulate the 
    // useEffect() with its execution
    const data = useAxios("https://apiapptrainingnewapp.azurewebsites.net/api/Products");
    if(data === undefined){
        return(
            <div>
               <h2>No Data Received</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Data Received from call</h2>
             <ul>
              {
                  data.map((d,i)=>(
                      <li key={i}>
                        {JSON.stringify(d)}
                      </li>
                  ))
              }
             </ul>
        </div>
    );
};

export default UseReducerCustomHookComponent;

