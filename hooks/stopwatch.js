// Stopwatch: using useRef for intervals.

import {useState,useRef,useEffect} from 'react';
function App(){
  const [timer,setTimer] = useState(0);
  const [run,setRun] = useState(false);
  const iRef = useRef(null);
  
  const start = ()=>{
    if(iRef.current !== null){
      return;
    }
    iRef.current=setInterval(() => {
      setTimer(prev=>prev+1);
    },1000);
    setRun(true);
  };
  
  const stop = ()=>{
    if(iRef.current!==null){
      clearInterval(iRef.current);
      iRef.current = null;
      setRun(false);
    }
  };

  
  return(<>
    
    Time Runner : {timer}
    <button onClick={start} disabled={run}>Start</button>
    <button onClick={stop} disabled={!run}>Stop</button>
  </>);
}
export default App;