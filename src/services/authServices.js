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
export async function getBids(){
    return http.get("http://127.0.0.1:8000/api/bid/")
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

export function searchTender(data){
    const search="http://127.0.0.1:8000/api/publish-tender/?search="+data
    return http.get(search)
}

export function searchBids(data){
    const search="http://127.0.0.1:8000/api/bid/?search="+data
    return http.get(search)
}
export function deleteTender(id){
    const getTender="http://127.0.0.1:8000/api/publish-tender/"+id+"/"
    return http.delete(getTender)
}
export function deleteBid(id){
    const getTender="http://127.0.0.1:8000/api/bid/"+id+"/"
    return http.delete(getTender)
}

    const apiEndPoint1 = "/api/bid/"
    export async function postBid(data){
            return http.post(apiEndPoint1, data)
        }
    
export function logout(){
    localStorage.removeItem(tokenKey);
    localStorage.removeItem("organization");
}

export function getCurrentUser(){
    try {
        const jwt = localStorage.getItem(tokenKey);
        const jwt2 = localStorage.getItem("organization");

       return jwt,jwt2;
       
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
    deleteTender,
    searchTender,
    getBids,
    searchBids

}