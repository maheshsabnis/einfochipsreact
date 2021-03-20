// the enzyme configuration file
// define the confifuration for Enzyme to Test React Component

// configure: the object that will configure the enzyme with react
// using the enzyme adapter
// shallow is used to test the DOM for specific component w/o its children
import Enzyme, { configure,shallow } from "enzyme";
// Adapter: act a sa bridge between React and Enzyme
import Adapter from 'enzyme-adapter-react-16';

// define the condifuration

configure({
    adapter: new Adapter()
});

// export shallow object from the configuration and also export the 
export {shallow}
export default Enzyme;