import {useState} from 'react';

function todolist(){
    const [todo,settodo] = useState([]); // holds the array of todo list
    const [inp , setinp] = useState("");
    const [error, setError] = useState("")
    const hIc = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    };

    const addTodo = () => {
    if(inp.trim() !== ' ') {
        settodo([...todo,inp]);
        setinp("");
    }   else {
              setError("Please enter a valid task."); // if i/p is empty
    }
    };
    
return (
<h1>Todo List</h1>
    <input type='text' value= {inp} onChange={hIc}>
    <button onClick={addTodo}>Add</button>

    <ul>
    {todo.map((todo,index) =>(
        <li key={index}> {todo} </li>
    )
        )}
);
}
export default todolist;