import {useState} from 'react';
function Counter (){
    const [count,setcount] = useState(0);
    const increment = () => {
        setcount(count+1);
    };
    const decrement = () => {
        setcount(count-1);
    };
    const reset = () => {
        setcount(0);
    };

    return (
        <>
        <h1>Counter : {count}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        </>
    );
}
export default Counter ;



import Counter from './counter';

export default function App() {
  return (<>
  <Counter />
  </>);
}
