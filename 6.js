import {useState} from 'react';

function Todo() {
    const [inp,setinp] = useState ('');
    const [tlist , setlist] = useState([]);

    const hIc = (e) => {
        setinp(e.target.value);
    };
    const add = () => {
        if(inp.trim() !== ''){
            setlist([...tlist,inp]);
            setinp('');
        }
    };
    return(
        <div>
        <h1> Todo List</h1>
            <input 
                type="text"
                value = {inp}
                onChange={hIc}
                />
            <br />
            <br />
            <button onClick={add}>Add task</button>
            <ul>
                {tlist.map((todo,index)=>(
                        <li key={index}> {todo}</li>
                ))}
            </ul>
        </div>
    );
}
export default Todo;



// import Todo from './todolist'; 
// function App() {
//   return (
//     <>
//     <Todo />
//     </>  
//   );
// }
// export default App;