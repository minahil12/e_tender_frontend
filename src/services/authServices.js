import http from './httpService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import jwtDecode from 'jwt-decode'

const apiPoint = "/api/login/"
const tokenKey = "token"

export async function login(username, password) {
    const {data: jwt} = await http.post(apiPoint, { username, password });
    localStorage.setItem(tokenKey, jwt.token);
    localStorage.setItem("organization", jwt.organization);
    
}

export async function getTenders(){
    const getTender="http://127.0.0.1:8000/api/publish-tender/"
    return http.get(getTender)
}
const apiEndPoint = "/api/publish-tender/"
/**
 * export async function publishTender(organization_name, title, category, availibility,region,
    description, contact, opening_date, last_date){
        return http.post(apiEndPoint, {organization_name, category, title, availibility, region,description,contact,
        opening_date, last_date})
    }
 */
export function publishTender(data){
    return http.post(apiEndPoint,data)
}

export function deleteTender(id){
    const getTender="http://127.0.0.1:8000/api/publish-tender/"+id+"/"
    return http.delete(getTender)
}

    const apiEndPoint1 = "/api/bid/"
    export async function postBid(name, contact, no_of_days, tenderId,bidding_amount){
            return http.post(apiEndPoint1, {name, contact, no_of_days, tenderId,bidding_amount})
        }
    
export function logout(){
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
    try {
        const jwt = localStorage.getItem(tokenKey);

       return jwt;
       
      } catch (ex) {
        return null
      }
}
export default{
    login,
    logout,
    getCurrentUser,
    publishTender,
    getTenders,
    deleteTender
}