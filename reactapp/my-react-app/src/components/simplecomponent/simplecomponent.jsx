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