import { combineReducers } from "redux";

// define a pure function that 
// action.type, is the types that is returned from the action that is dispatched
export const addEmployeeReducer=(state, action)=>{
    switch(action.type){
        case 'ADD_EMPLOYEE':
              return{
                  // reading the output returned from action method returning type as 'ADD_EMPLOYEE'
                  // and updateing it in state object 
                  employee: action.employee
              }; 
        default:
              return state;        
    }
};

// initial state for reding employees from store will be an empty array
export const listEmployeesReducer=(state=[], action)=>{
    switch(action.type){
        case 'ADD_EMPLOYEE':
            // the current reducer wil call addEmployeeReducer
            // to retrive the modified state after adding an employee in it
            // and the state will be mutated into store and the modified state from store 
            // will be returned 
            return [...state, addEmployeeReducer(undefined, action)];
        default:
            return state;    
    }
};

// make the above pure functions as reducer functions by using 'combineReducers()' object
// from redux package so that they will be used as application level to montor
// all actions those are dispatched

// 1. the 'reducers' object will be loaded at application level
// to initialize the store

// 2. all components those are subscribing to 'store', when dispatch any action
// action, the 'compbinereducers' will ask the reducer funciton inside it to
// monitor all actions, execute them and collect the return values so that the state in store
// can be updated

// 3. any component that has the store subscription will be able to read data from store
// using selector  

const reducers = combineReducers({listEmployeesReducer});
export default reducers;

