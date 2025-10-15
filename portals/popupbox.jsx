import React,{useEffect} from "react";
import ReactDOM from 'react-dom';
import './popupbox.css'

function PopupBox({isOpen,onClose,children}){
  if(!isOpen) return null;
  
  useEffect(()=>{
    const hE = (e) => {
      if(e.key === "Escape") onClose();
    };
    document.addEventListener("keydown",hE);
    return () => document.removeEventListener("keydown",hE);},[onClose]);
    
    return ReactDOM.createPortal(
      <div className="popup-o" onClick={onClose}>
        <div className="popup-c" onClick={(e)=>e.stopPropagation()}>
          <button className="popup-cl" onClick={onClose}>
            &times;
            </button>
            {children}
          </div>
          </div>,
          document.getElementById("modal-root")
      );
}

export default PopupBox;