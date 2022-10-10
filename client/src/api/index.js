import axios from 'axios';
 

const API  = axios.create({baseURL : " https://hackthon-deployment.herokuapp.com"});

export const signup = (authData)=>API.post('/auth/signup',authData);
export const login = (authData)=>API.post('/auth/login',authData);