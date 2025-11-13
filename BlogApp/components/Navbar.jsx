// components/Navbar.jsx

import {Link} from "react-router-dom";

function Navbar() {
  
return(
  <nav style ={{padding:"1rem",background:"#eee"}}>
<Link to="/">Home </Link>
<Link to="/about">About </Link>
<Link to="/posts"> Posts </Link>
    </nav>
    );
}
export default Navbar;
