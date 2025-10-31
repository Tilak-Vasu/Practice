import React,{useState} from "react";

class E extends React.Component {
  constructor(props){
    super(props);
    this.state={ hasError: false };
  }
  static getDerivedStateFromError (error){
    return {hasError:true}
  }
  componentDidCatch(error,info){
    console.log("Error Caught by boundary: ",error,info);
  }
  render(){
    if(this.state.hasError){
      return(
        <button onClick={()=> this.setState({hasError:false})}>
          Try again
          </button>
      );
    }
    return this.props.children;
  }
  
}
function Bcomponent(){
  
  const [e,setE] = useState(false);
  if(e){
    throw new Error ("Opps errror");
  }
     <h1> Buggy thing</h1>
     return <button onClick={()=>setE(true)}> Explode </button>
}
  export default function App() {
    return (
    <div>
    <E>
        <Bcomponent />
    </E>
    <hr />
    
    </div>

  );
}
