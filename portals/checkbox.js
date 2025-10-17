import React , {useState} from 'react';

function App(){
  const [formData,setForm] = useState({
    name:'',
    color:'',
    agreeTerms:false
  });
  
  const hC = (e) => {
    const {name,type,value ,checked}= e.target;
    setForm((prev) => ({
      ...prev,[name]: type==='checkbox'? checked : value,
    }));
  };
  const hSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData,null,2));
  };
  return(
    <form onSubmit = {hSubmit}>
    <div>
      <label>
        Name: <input type='text' name='name' value={formData.name} onChange={hC}/>
      </label>
    </div>
    
    <div>
      <label>
        
        Favorite color:
        <select name='color' value={formData.color} onChange={hC}>
        <option value= ""> choose Color</option>
        <option value= "red"> red </option>
        <option value= "blue"> blue </option>
        <option value= "green"> green </option>
      
</select>      </label>
      
    </div>
    
    <div>
      <label>
        <input type="checkbox" name='agreeTerms' checked={formData.agreeTerms} onChange={hC} /> Agree To terms 
      </label>
    </div>
    <button type='submit'> Submit </button>
    </form>
    );
}
export default App;