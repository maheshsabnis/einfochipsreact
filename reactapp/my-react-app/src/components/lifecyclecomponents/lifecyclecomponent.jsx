import React, { Component } from 'react'

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             data:0   
        };
    }
    updateData(evt){
        this.setState({data:parseInt(evt.target.value)});
    }
    render() { 
         if(this.state.data % 2 === 0){
            return(
                <div className="container">
                  <h2>The Parent Component</h2>
                  <input type="text"
                   onChange={this.updateData.bind(this)}
                   value={this.state.data}/>
                   <FirstChildComponent></FirstChildComponent>
                </div>
            );
         } else {
             return(
                <div className="container">
                <h2>The Parent Component</h2>
                <input type="text"
                 onChange={this.updateData.bind(this)}
                 value={this.state.data}/>
                 <SecondChildComponent
                  value={this.state.data}></SecondChildComponent>
              </div>
             );
         }
    }
}
 

class FirstChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            x:0,
            y:0
        };
    }

    // async method
    // wait for componr to mount
    // and then start updating the state 
    getMousePositions=(evt)=>{
      //  console.log(`Mouse Mouse ${evt.clientX} and ${evt.clientY}`);
        this.setState({x:evt.clientX});
        this.setState({y:evt.clientY});
        //console.log(`x = ${this.state.x} and y = ${this.state.y}`);
    }

    componentDidMount=()=>{
        console.log('First Child Mounted');
        // register ajax calls
        // register the mouse move event
        window.addEventListener('mousemove', this.getMousePositions);
    }

    componentDidUpdate=()=>{
        console.log('First Child is Updated');
    }
    componentWillUnmount=()=>{
        console.log('First Child is UnMounted ');
         window.removeEventListener('mousemove', this.getMousePositions);
         // de-register ajax calls
    }

    render() { 
        return (  
            <div className="container">
             <h2>The First Child Component</h2>
             <div>
               <strong>
                 X-Pistion {this.state.x} && Y-Position {this.state.y}
               </strong>
             </div>
            </div>
        );
    }
}
 
 
class SecondChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        console.log('Second Child Mounted');
       
    }

    componentDidUpdate(){
        console.log('Second Child is Updated');
    }
    componentWillUnmount(){
        console.log('Second Child is UnMounted ');
    }
    render() { 
        return (  
            <div className="container">
                <h2>The Second Child Component</h2>
                values recieved from parent
                <strong>
                  {this.props.value}
                </strong>
            </div>

        );
    }
}
 
 

export default ParentComponent;