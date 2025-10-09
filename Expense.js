import {useState} from 'react';

function Expense(){
    const [spent,setspent] = useState([]);
    const [spentInp,setspentInp] = useState('');
    const [detailInp,setdetInp] = useState('');

    const add = () => {
        if(spentInp.trim() !== '' && detailInp.trim() !== '' ){
            const newExpense = {
      id: Date.now(),
      amount: Number(spentInp),
      detail: detailInp
    };
        
            setspent([...spent,newExpense]);
            setspentInp('');
            setdetInp('');
            console.log(newExpense.id);
        }
    }; 

    const deleteItem = (index) => {
        const refinedlist = spent.filter((_, i) => i !== index)
        setspent(refinedlist);
    };
    return (
        <>
        <div>
        <h1> Expense Tracker </h1>
            <input type = "number" value={spentInp} onChange={(e) => setspentInp(e.target.value)} placeholder="enter expense "/> 
            <br/>
            <br/>
            <input type = "text" value={detailInp}   onChange={(e) => setdetInp(e.target.value)}  placeholder="enter expense details"/>

            <br/>
            <br/>
            <button onClick={add}> Add </button>

            <ul>
                {spent.map((item,index) => (
               <li key={item.id}>
      ₹{item.amount} - {item.detail}
            <button onClick={() => deleteItem(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
               </li>
                ))}
            </ul>
    Total: ₹{spent.reduce((total, item) => total + item.amount, 0)}
        </div>
        </>
    );
}
export default Expense;

// import Expense from './expense'
// export default function App() {
//   return <Expense />
// }
