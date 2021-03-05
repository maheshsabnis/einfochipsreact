// function getData(){
//     console.log('Calling method');
//     let produtcs = [];
//     // the object that is used to make HTTP calls
//     // to externally hosted HTTP Services
//     // e.g. Web Services, REST APIs 
//     // this object makes an Asynchornous HTTP calls to
//     // services
//     let xhr = new XMLHttpRequest();

//     // subscribe to the event to receive data
//     // success-callback
//     xhr.onload = function(){
//         // states is OK
//         if(xhr.status === 200) {
//             produtcs = xhr.response;
//             console.log('Response Receivd from Service ' + JSON.stringify(produtcs));
//         }   
//     };

//     // subscribe to the error event if the call fails
//     // error-callback
//     xhr.onerror = function(){
//         console.log('Error Occured ' + xhr.responseText);
//     };

   


//     // an async call to REST API
//     // P1: the HTTP Method
//     // P2: the URL to be resquested
//     // the defaul is asynchronous so pass the 'false' as value for asyc to execute it synchrnously
//     //xhr.open('GET', "https://apiapptrainingnewapp.azurewebsites.net/api/Products", false);
//     xhr.open('GET', "https://apiapptrainingnewapp.azurewebsites.net/api/Products");

//     // send the resuest
//     xhr.send();
   
//     console.log('returning method');
//     return produtcs;
// }

// method returning Promise object
// this object accepts 2 callback
// 1. resolve, the successful execution
// 2 reject, failure execution
function getData(){
    return new Promise((resolve, reject)=> {
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            // states is OK
            if(xhr.status === 200) {
                // successful execution
                console.log('Reponse received ' + xhr.response);
                resolve(xhr.response);
            }   
        };
        xhr.onerror = function(){
           reject('Error Occured ' + xhr.responseText);
        };
        xhr.open('GET', "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
        xhr.send();
    });
}

function postData(data){
    return new Promise((resolve, reject)=> {
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            // states is OK
            if(xhr.status === 201) {
                // successful execution
                console.log('Reponse received ' + xhr.response);
                resolve(xhr.response);
            }   
        };
        xhr.onerror = function(){
           reject('Error Occured ' + xhr.responseText);
        };
        xhr.open('POST', "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
        // set the request header
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    });
}

