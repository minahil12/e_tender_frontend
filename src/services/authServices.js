import http from './httpService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import jwtDecode from 'jwt-decode'

const apiPoint = "/api/login/"
const tokenKey = "token"

export async function login(username, password) {
    const {data: jwt} = await http.post(apiPoint, { username, password });
    localStorage.setItem(tokenKey, jwt.token);
    
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
    getCurrentUser
}