import { useState } from 'react';

function Todo() {
  const [inp, setInp] = useState('');
  const [tlist, setList] = useState([]);

  const hIc = (e) => {
    setInp(e.target.value);
  };

  const add = () => {
    if (inp.trim() !== '') {
      setList([...tlist, { text: inp, completed: false }]);
      setInp('');
    }
  };

  const toggle = (index) => {
    const newList = tlist.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setList(newList);
  };

  const deletetask = (index) => {
    const newList = tlist.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={inp} onChange={hIc} />
      <br />
      <br />
      <button onClick={add}>Add task</button>
      <ul>
        {tlist.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            <span onClick={() => toggle(index)}>{todo.text}</span>
            <button
              onClick={() => deletetask(index)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
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