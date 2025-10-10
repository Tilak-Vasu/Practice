import React from 'react';
import { useState,useEffect } from 'react'

function App() {
  const [load,setLoad] = useState(true);
  const [data,setData] = useState(null);
  const [err,setError] = useState(null);
  const a = '7d3f8a8045f9104f8ddf1d488dee21e9'
  const b = 'Ahmedabad'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=${a}&units=metric`; ;
  const useFetch = (url) => {
    useEffect(()=>{
      const fetchData = async() => {
        try{
          const r = await fetch(url);
          if(!r.ok){throw new Error("Network Not found");}
          const res = await r.json();
          setData(res);
        }
        catch(error){
          setError(error.message);
        } finally {
          setLoad(false);
        }
      }
    })
  }
  return {load,data,err};
}

export default App
