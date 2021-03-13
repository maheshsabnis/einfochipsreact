// https://apiapptrainingnewapp.azurewebsites.net/api/Products

import axios from 'axios';

export class HttpService {

    constructor(){
        this.url = "https://apiapptrainingnewapp.azurewebsites.net/api/Products";
    }

    getData(){
        let response = axios.get(this.url);
        return response;
    }
    getDataById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postData(product){
        let response =  axios.post(this.url, product, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response;
    }
    putData(id,product){
        let response =  axios.put(`${this.url}/${id}`, product, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response;
    }
    delete(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }
}