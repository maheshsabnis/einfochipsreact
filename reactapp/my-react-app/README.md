# Creating React Project
1. npm install -g create-react-app
   1. CLI for Creating React Project
2. create-react-app <APP-NAME>
   1. The command to create a project



# Understanding React Project
1. package.json
   1. "@testing-library/jest-dom": "^5.11.4"
      1. The  'jest', the testing frameowrk for react application
   2. "@testing-library/react": "^11.1.0",
      1. The integration of React Object Model with Jest
   3. "@testing-library/user-event": "^12.1.10",
      1. Use to detect the 'user-event' on dom elements e.g. click, change, etc.
   4. "react": "^17.0.1",
      1. The React Library that contains object model for reat Programming
         1. Component class and functional components
            1. Component<P,S> class
               1. P is props
               2. S is State
            2. Functional Components
               1. React 16.8+ the new syntax for creating components
                  1. Hooks
                     1. Objects to maintatin states
                     2. Objects to manage the Communication Across Components
                     3. Object to handle the Onload events for component
         2. State and Props object
            1. Data FLow objects used by React.js
         3. JSX Parser rule enginne for HTML Compilation
            1. JavaScript XML Extensions for compiling HTML for
               1. HTML Tags
               2. Attributes
               3. Events 
            2. The 'JSX' can define 'runtime-attribute' system for HTML elements of which values are set using either 'props' or 'state'
               1. Mostly when values are communicated across components they are set as 'props' object's runtime attributes
         4. Uni-Directional Data Flow   
            1. Bind state/props to UI elements to render them
            2. Listen to events and update the property so taht DOM can be updated
      2. "react-dom": "^17.0.1",
         1. The Object Model that manages
            1. Rendering
            2. Virtual DOM
            3. Parent-Child Relationship across components
         2. This object model 'mount' the DOM on Browser 
      3. "react-scripts": "4.0.3",
         1. The React CLI for
            1. Build
            2. Run
            3. Test
         2. This internally manages
            1. babel and bale-core for transpilations
            2. Manages polyfills
            3. create a compiled JavaScript as output
2. export default <type-name>
   1. export the type-name with default instance
   2. The exported type with defult can be imported as  follows
      1. import <type-name> from '<SOURCE-FILE>' 
3. export <type-name>
   1. the type is expotable but it must be instiated explicitely by the importer
   2. This wll be imported as follows
      1. import {<type-name>} from 'P{SOURCE-FILE}'


4. React Object Model

# Programming with React
1. Components
   1. Class Components
      1. Creating Class Components, Component<P,S>
         1. props, P
            1. The dataobject that contains properties of which values received from parent component
            2. This is an immutable object across components having any number of properties and methods used to communicate across components
         2. state, S
            1. The local state of the Component. THis is 'mutable' object means the scope of state is only limited to the component in which it is declared
            2. Generaally the state is declated inside the constructor  as follows
               1. this.state= {KEY:VALUE};
                  1. KEY is property name
                  2. VALUE is value of the property
            3. To change the state property based on event, define an event to HTML element e.g. 'onChange' for input:text element and in the event handler use 'this.setState()'  method to update state property 
               1. this.setState({'<STATE-PROPERTY>': <NEW_VALEU>}, ()=>{})
                  - the second parameter is callback function that will be used to commit the state mutation
               2. NOTE: We cannot setState() or mutate the state insode the constructor
               3. To steState() of the complext state property use the  'componentDidMount()' method
                  - THis is a lifecycle method that contains logic for mutation of the state object instead of writing in constructor 
                  - This methiod will be executed after the 'render()' method   
         3. render()
            1. This method return HTML DOM for the component 

```  javascript
import React, {Component} from 'react';

// component name must use pascal case
// the component class is derived from 'Component' base class
// for defining local state it must contains constructor taht makes 'super()'
// clas component must have the 'render()' method that return HTML DOM
class SimpleComponent extends Component{
    // the deep linking from child class to its parent class
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            num1:0,
            num2:0,
            res:0,
            info:'The Information Message in the State'
        };
    }

    // evt is an event 
    // evt.target is an element on which an event is raised
    // evt.target.value is the value of an element
    handleNum1Change(evt){
      this.setState({num1:parseInt(evt.target.value)});
    }
    handleNum2Change(evt){
      this.setState({num2:parseInt(evt.target.value)});
    }


    // match the name of the element on which an event is raised
    // with the 'state' property name and assign value of the HTML element
    // to the corresponding 'state' property
    handleInputChanges(evt){
      this.setState({
        [evt.target.name]:parseInt(evt.target.value)
      });
    }


    add(){
      let result = this.state.num1 + this.state.num2;
      this.setState({res:result});
    }
    clear(){
      this.setState({num1:0});
      this.setState({num2:0});
      this.setState({res:0});
    }

    render(){
        return(
            <div>
              <h2>The Simple React Component</h2>
              <strong>
                Message Received from Parent is = {this.props.message}
                <br/>
                {this.props.val1}
              </strong>
              <hr/>
              <strong>
                Local State Info message is = {this.state.info}
              </strong>
              <br/>  
              <table>
                 <tbody>
                    <tr>
                        <td>Num 1</td>
                        <td>
                          <input type="text" value={this.state.num1} name="num1"
                           onChange={this.handleInputChanges.bind(this)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Num 2</td>
                        <td>
                          <input type="text" value={this.state.num2} name="num2"
                           onChange={this.handleInputChanges.bind(this)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Res</td>
                        <td>
                          <input type="text" value={this.state.res} readOnly/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                      <input type="button" value="clear" onClick={this.clear.bind(this)}/>
                    </td>
                    <td>
                      <input type="button" value="add" onClick={this.add.bind(this)}/>
                    </td>
                </tr>
                 </tbody>
              </table> 

              <FirstChildComponent msg={this.state.info}></FirstChildComponent>
            </div>
        );
    }
}
// exporting the component
export default SimpleComponent;


class FirstChildComponent extends Component {
    render(){
        return(
            <div>
                 <h3>The First Child Component</h3>   
                 <p>
                    <strong>
                      Data Received from Immediate Parent is = {this.props.msg} 
                    </strong>
                 </p>
            </div>
        )
    }
}

```
  VERY IMP: The State property cannot be mutated (updated with new value) using assignment statement or by pushing value in it if it is an array. Instead always use the 'setState()' method to mutate the state property.
  Unless setState() is used for mutation, the UI (or virtuakl DOM) will not be updated
   4. The React's Compositional Pattern  
      - Divide the Complex UI into small re-usable components
         - These will be used for creating similar UX across various parent components but with similar or differnt data sources
         - All re-usable components will act as a child of its parent and parent will pass data to them so that they are rendered and implemented as Parent-Child Communication with Component's Reusability

``` javascript
 
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

 
```

   5. Line-of-Business (LOB) UI for React Component
      - Using the Forms with validations
         - No Standard Validator Support available
         - Use of HTML 5 Validation Attrobutes is not preferred
         - Define Custom Logic for Valdiations 
         - Create a vlidator class that validates Employee Component based on following rules
            - EmpNo must ne Unique
            - EmpName mist start from Capital Letter
            - If DeptName is IT then Salart must be min 20000
               - for HRL min salary 18K
               - SALES min salary 10K
            - Change the border of Invalid UI elements to RED and create a validation summury atbthe bottom. 
               - Create a Custom reusable Component for showin Validation summary
            - make sure that the required elements must have red border when the component is loaded   
      - AJAX Calls

      2. Lifecyle
      3. AJAX
      4. Routing
      5. Error Boundries (React.js 16.0+)
         - The Error Country is an approach for handling exceptions globally using 'Error Handler Component' to handle and log errors occure in anyb child component during the rendering
         - This Error Handler Component will have following
            - Implementation of 'componentDidCatch()' method to catch exception occures in any child component
            - Implementation of getDertivedStateFromError () read-only property to listen to errors so that they can be logged 
      6. Code-Spliting
      7. Hight-Order-Components
   2. Funtional Conponents
      1. Concepts of Functional Component
      2. Hooks
         1. State
         2. Context
         3. Effects
         4. Custom Hooks
   
2. Redux  
   1. Concept of Application State Management
      1. Actions
      2. Reducers
      3. Store
      4. Middlewares  




# Hands on Lab
1. Create a Calculator same same UI and functionality like the WIndows Calculator 
2. Create a TableComponent that will accept following props types
   - The 'DataSource' (Mandatory)
      - This will be of the array type based on which the Columns (headers) and Rowes for table will be generated
   - The 'SelectRow' (Mandatory)
      - This will raise the click event on table row so that the selected row value will be emitted to the parent
   - Make sure  that the table will be generated only when the length of DataSource > 0 (Mandatory)
   - The 'CanDelete' property
      - If this property is true then each row will generate the Button for deleting the row (optional) 
   - Generate a Checkbox for each row in the table and also generate checkbox in the header row. If the header checkbox is checked then checkbox for each row must ne checked or unchecked 
   - Define a 'pageSize' prop type for the table to show default number of rows in table and then add a dropdown in the table footer to change the pageSize by shown rows based on selected value for rows in dropdown     

