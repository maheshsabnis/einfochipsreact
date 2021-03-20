import React from 'react';
// using the test utilities provided by jest and react dom test
// render: call the rendering of DOM in memory
// unmountComponentAtNode: unmounting the component node from DOM
import { render, unmountComponentAtNode  } from "react-dom"; 
// the test Object model for executing the test
// act, act of the test to execute it
import { act } from "react-dom/test-utils";


import EventComponent from './../components/componentfortest/eventComponent';
// define the test suit

describe('Event Test',()=>{
    // define DOM Setup first in memory

    // this will perofrm DOM setup before running each test
    let domContainer = null;
    beforeEach(()=>{
        domContainer = document.createElement('div');
        document.body.appendChild(domContainer);
    });

    // once the tests are executed successfully (success / fail) clear memory
    afterEach(()=>{
        // unmount the DOM
        unmountComponentAtNode(domContainer);
        // clear all children
        domContainer.remove();
        domContainer = null;
    });

    // wrtite the test case
    it('button must change its value for each click',()=>{
        // detect the onChnage function
        const onChange = jest.fn();
        // act on the frunction
        // mount the component in domContainer
        // this component will have 'button' and this button's event must be tested
        act(()=>{
            render(<EventComponent onChange={onChange}/>, domContainer);
        });

        // reteiev the button from mount
        const button = document.querySelector("button");
        expect(button.innerHTML).toBe("Switch On");

        // lets dispatch an event
        // mouse 'click' event
        act(()=>{
            button.dispatchEvent(new MouseEvent('click', {bubbles:true}));
        });
       
        // check the single click only
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(button.innerHTML).toBe("Switch Off");

    });
});