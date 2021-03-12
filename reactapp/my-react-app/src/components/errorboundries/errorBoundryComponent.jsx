 
import React, { Component } from 'react';

class GlobalErrorHandlerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            errorMessage:''
        };
    }


    // listen to actual error message from any child component in tree
    // the 'error' parameter represents the error thrown 
    // this property will internally perform 'setState()' operation
    // for the 'errorMessage' when an exception is ocured  
    static getDerivedStateFromError(error){
        return {
            errorMessage: error.toString()
        };
    }

    // method responsible for listening and loggin errors
    componentDidCatch=(error, logInfo)=>{
        console.log(error.toString(), logInfo.componentStack);
    }
    render() {
        if(this.state.errorMessage) {
            // fallback UI goes here 
        return ( 
            <div className="container">
                <h5>Something has gone wrong</h5>
                <strong>
                  {
                      this.state.errorMessage
                  }
                </strong>
            </div>
         );
        }
        // otherwise keep rendering all children in the Tree
        return this.props.children;
    }
}
 
 


class MyCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            counter:0
        };
    }

    increament=()=>{
        this.setState({counter: this.state.counter+1});
    }
    render() { 
                if(this.state.counter > 8) {
                     throw new Error('Sorry You have reached to max clicks');   
                } else{   
                return (  
                    <div className="container">
                        <strong>
                            The Coubter Value is = {this.state.counter}
                        </strong>      
                        <br/>
                        <input type="button" value="Increament"
                        onClick={this.increament.bind(this)}/>
                    </div>
                );
            }
    }
}
 
class ContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    reload=()=>{
        window.history.go(0);
    }
    render() { 
        return ( 
            <div className="container">
                <GlobalErrorHandlerComponent>
                  <MyCounterComponent></MyCounterComponent>
                </GlobalErrorHandlerComponent>
              <hr/>
              <input type="button" value="Reload"
               onClick={this.reload.bind(this)}/>
            </div>
         );
    }
}
 
export default ContainerComponent;

 