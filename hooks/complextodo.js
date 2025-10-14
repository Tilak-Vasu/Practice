import React, {useState,useReducer,useRef,useEffect} from 'react';

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TASK':
                return[...state, {text: action.text , completed : false}];
        case 'DELETE_TASK':
            return state.filter((_,i)=> i!==action.index);
        case 'TOGGLE_TASK':
            return state.map((todo,i)=>
                i=== action.index ? {...todo,completed: !todo.completed}: todo);
        case 'EDIT_TASK':
            return state.map((todo,i)=>
            i === action.index ? {...todo, text:action.text } : todo
   );
        default:
            return state;
    }
};


function App(){
const [inp,setInp] = useState('');
const iRef = useRef(null);
const [edit,setEdit] = useState(null);
const [todos,dispatch] = useReducer (reducer,[]);

    const add = () => {
        if(inp.trim()!==''){
            dispatch({ type:'ADD_TASK', text:inp});
            setInp('');
        }
    };
    const del = (index) => {
        dispatch({ type:'DELETE_TASK', index});
    };
    const toggle = (index) => {
        dispatch({ type:'TOGGLE_TASK', index});
    };
    
    const handleEditChange = (e,index) => {
        dispatch({ type:'EDIT_TASK', index, text: e.target.value });
    };

    useEffect(()=>{
        if(edit!== null){
            iRef.current.focus();
        }
    },[edit]);
    
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
                          ref={iRef}
                            type='text'
                            value={todo.text}
                            onChange={(e)=>handleEditChange(e,i)}
                            />
                        <button style={{marginLeft:"10px"}} onClick={()=> setEdit(null)}> Done</button>
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