import React from 'react';
// impport the component to be tested
import OrderListComponent from './../components/componentfortest/OrderList';
import OrderListOptionsComponent from './../components/componentfortest/OrderListOptions';
// import emzyme object models
import { shallow } from "./../enzyme";

// define the test suit


// to run the test run the 'npm run test' command from command prompt
// this will call 'jest' test to start running the test. This test will use
// enzyme to test the react component  
describe('Order List Component Test',()=>{
    // write the test-case
    it('render dom element having class name as value from the array pas to the component',()=>{
         // arrange: collect required information(?) to perform test
         // required information: test data, instance of object being tested, expected result, ect.

        const actors = ['Tom Cruiz', 'Sean Connery', 'Roger Moore'];
        // const actors = [];

         // act: use the test data and perform the test by using instance of object to be tested
         // e.g. call method from object and receive actual result, ect.
         const generatedDOM = shallow(<OrderListComponent options={actors}/>);
         // print the DOPM Generated
         console.log(generatedDOM.debug());
         
         // assert: compare the actual result with expected result
        expect(generatedDOM.find('.options').exists()).toBe(true);

        //expect(generatedDOM.find('.empty').exists()).toBe(true);
    });

    it('should render dom having the class name as the value passed from array',()=>{
        const data = ['A','B','C'];
        const wrapper = shallow(<OrderListOptionsComponent value={data[0]}></OrderListOptionsComponent>);
        console.log(wrapper.debug());
        expect(wrapper.find('.A').exists()).toBe(true);
        expect(wrapper.find('li').exists()).toBe(true);
    });
});