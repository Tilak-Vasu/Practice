import React , { useState } from "react";
import PopupBox from './popupbox.jsx';

function App(){
 const [isOpen,setOpen] = useState(false);
  
  return(
    <div style= {{padding:'2rem'}}>
    <h1>PopupBox - Modal using React Portal</h1>
    <button onClick={()=>setOpen(true)}>Open Popup</button>
    <PopupBox isOpen={isOpen} onClose= {()=>setOpen(false)}>
      <h2>Hello from PopupBox</h2>
      <p>This is PopupBox react portal</p>
      <button onClick = {()=> setOpen(false)}> Close </button>
      </PopupBox>
    </div>
    );
}

export default App;