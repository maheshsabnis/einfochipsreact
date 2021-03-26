import {HttpService} from './../../services/httpservice';

// takeLatest: The facade to monitor execution of all long running operations
// thisn isn used inside the Generator function so that generator can keep receiving  result
// process it and return it

// take: listen to an inut action  like takelatest and monitor a single action so that
// its output will be collection and delivered to call()/put() operations 

// call: used to call the extertnal operation that is perfroming Async operations 
// behind the scene and returns promise

// put: Used to dispatch the action based on the return state of the call() operations

// all: a facade to aggrigate all SAGA generators and load them at application level

import { all, put, call, takeLatest, take } from "redux-saga/effects";

// create a saga middleware



// 4. the simple JS function that will make an actual call and subscribe to 
// async response 
function getDataFromService(){
    let serv = new HttpService();
    // getData() returns Promise<AxiosResponse>
    // then() return the Promise that contains the Response data in it
    const response = serv.getData().then((result)=>result.data);
    // resolve the promise object and return it
    // contains a Promise Object that can be 
    // immiditely reolved by the caller to
    // extract data from it
    return Promise.resolve(response);
}


function postDataToService(data){
    let serv = new HttpService();
     
    const response = serv.postData(data).then((result)=>result.data);
    
    return Promise.resolve(response);
}



// 3. the generator function that will perform Async operation
// and subscribe to the result returned from the async operation
// based on the result return (or dispatch) output action 

// the generator function, that will unpack the resolve response
// read data from the resolve and dispatch GET_PORDUCTS_SUCCESS action
// with output data
function* getProductsSuccessAction(){
    console.log('Get Products Dispatched linked with success');
    // the 'output' is the actual response 
    // that is resolved by 'call()' function its it 'yield' (read, process and return)
    const output = yield call(getDataFromService);

    // dispatch the output action
    // the put() method is used to generate (or dispatch) an output action
    yield put({
        type: "GET_PRODUCTS_SUCCESS",
        products: output || [{error: 'SOME_ERROR_OCCURED'}]
    });
}

// 2. the generator function that will listen the input dispatched action 
// and link it with output action

// this generator will listen to GET_PRODUCTS action dispatched
// map to the output action
function* actionWatcherGetProducts(){
    console.log('Get Products Dispatched running');
  yield takeLatest('GET_PRODUCTS', getProductsSuccessAction);
}


// the action is the input action that is dispatched which is mapped with output action
function* saveProductSuccessAction(action){
    console.log('Save Product Dispatched linked with success');

    // read the payload from the dispatched action 
    let parameter = action.payload;
  console.log(`Received data from the dispated action for save ${JSON.stringify(parameter)}`);

     // make call to the function performing async operations by passing data to it
     // and read the result
    const output = yield call(postDataToService, parameter);

    // dispatch the output action
    // the put() method is used to generate (or dispatch) an output action
    yield put({
        type: "SAVE_PRODUCT_SUCCESS",
        product: output || [{error: 'SOME_ERROR_OCCURED'}]
    });
}

function* actionWatcherSaveProduct(){
    console.log('Save Product Dispatched running');
    // the dispatched action will read the payload
  yield takeLatest('SAVE_PRODUCT', saveProductSuccessAction);
}



// 1. create a rootSaga() function that will load all generator functions at application level 
export default function* rootSaga(){
    yield all([actionWatcherGetProducts(),actionWatcherSaveProduct()]);
}
