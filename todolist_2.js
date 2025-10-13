import React,{useState,useEffect} from 'react';
function App(){
const [inp,setInp] = useState('');
const [todos,setList] = useState([]);
const [edit,setEdit] = useState(null);

    const add = () => {
          if(inp.trim()!==''){
              setList([...todos,{text: inp , completed:false}]);
              setInp('');
          }
    };
    const del = (index) =>{
        const newList = todos.filter((_,i)=>i!==index);
        setList(newList);
    };
    
    const toggle = (index) =>{
      const newList = todos.map((todo,i) =>{
          if(i===index){
          return {...todo,completed: !todo.completed};
          }
        return todo;
    })
        setList(newList);
    };
return(
    <>
        <div>
        <h1>Todo List Complex (with edit)</h1>
            <input 
                value={inp}
                onChange={(e)=>setInp(e.target.value)}
                placeholder="enter task"
                />

            <button  style={{marginLeft:"10px"}} onClick={add}>Add Task</button>

            <ul style={{marginTop:"20px"}}>
            {todos.map((todo,i) => (
                <li style={{marginTop:"10px", textDecoration: todo.completed? 'line-through': 'none',cursor:'pointer'}}
                    key={i}>

                    {edit === i ? (
                        <>
                        <input 
                            type='text'
                            value={todo.text}
                            onChange={(e)=>{
                                const newTodo = [...todos];
                                newTodo[i].text = e.target.value;
                                console.log(e.target.value)
                                setList(newTodo);
                            }}
                            />
                        <button style={{marginLeft:"10px"}} onClick={()=> setEdit('')}> Done</button>
                        </>
                        ) :(
                        <span onClick={()=> toggle(i)}>{todo.text}</span>
                        )
                    }
                    { edit !== i && (
                        <button  style={{marginLeft:"10px"}} onClick={()=>setEdit(i)}>Edit</button>
                        )}
                <button style={{marginLeft:"10px"}}onClick={()=>del(i)}>Delete</button>
                    </li>
            ))
            }
            </ul>
            </div>
    </>
);
}
export default App;