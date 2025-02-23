import axios from 'axios';
import { baseURL } from '../baseurl/api'
import { createContext, useEffect, useState } from 'react';

export const CounterContext = createContext({});

const ComponentProvider = ({ children }) => {
 const [account, setCount] = useState([]);
 const [transaction, setTransactions] = useState([]);
 const [invest, setInvest] = useState([]);
 const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const  fetchAccountBalance = async ()=>{
    try{
        const response = await axios.get(`${baseURL}/posts`);
        console.log(response.data)
    }catch(error){
        setError(error)
        console.log(error)
    }finally{
        setLoading(false)
    }
 }
 useEffect(()=>{
    fetchAccountBalance()
 },[])

 const  fetchTransactions = async ()=>{
    try{
        const response = await axios.get(`${baseURL}/posts`);
        console.log(response.data)
    }catch(error){
        setError(error)
        console.log(error)
    }finally{
        setLoading(false)
    }
 }
 useEffect(()=>{
    fetchTransactions()
 },[])

 const  fetchInvestments = async ()=>{
    try{
        const response = await axios.get(`${baseURL}/posts`);
        console.log(response.data)
    }catch(error){
        setError(error)
        console.log(error)
    }finally{
        setLoading(false)
    }
 }
 useEffect(()=>{
    fetchInvestments()
 },[])


 return (
   <CounterContext.Provider value={{ account, transaction, invest, loading,error }}>
     {children}
   </CounterContext.Provider>
 );
};

export default ComponentProvider ;