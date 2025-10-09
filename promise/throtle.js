import React, { useCallback,useState,useEffect,useRef } from 'react';
import throttle from 'lodash/throttle';

function App(){

const [m,setm] = useState(0);
const [i,seti] = useState(0);

const iRef = useRef(i);
useEffect(()=>{
iRef.current = i;
},[i]);

const hC = useCallback((i) => {
  const n = iRef.current + 1;
  console.log("Buttton done count: ",n);
  seti(n);

  if( n > 5){
    setm(1)
  }
},[]);

const thrClickref = useRef(throttle(hC,3000));
useEffect(()=>{
  thrClickref.current = throttle(hC,3000);
  return(() => thrClickref.current.cancel());
},[hC]);


useEffect(()=> {
 if(m === 1){
   seti(0);
   setm(0);
   console.log("Re-run")
 }
},[m]);


return (
  <>
  <button onClick={() => thrClickref.current()}>Click Me</button>
  <br/>
  <br/>
  i = {i}
  <br/>
  <br/>
  m = {m}
  </>
);
}

export default App;

