import {useState} from 'react';
function Counter (){
    const [count,setcount] = useState(0);
    const increment = () => {
        setcount(count+1);
        setcount(count+1); // as its async and batched
        //multiple setcount calls in the same event handler may be batched into one update
        // Thus original value is given to all 2 of them and update is done which is in the end 
        // setcount calls use the same count value from the closure 
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



// import Counter from './counter';

// export default function App() {
//   return (<>
//   <Counter />
//   </>);
// }
