import { Link } from "react-router-dom";
export default function Navbar(){

        return(
            <nav style={{padding:"1rem",background:"#333"}}>
                <ul style={{display:"flex", listStyle:"none",gap:"1rem", margin: 0}}>
                    <li>
                        <Link to = "/" style={{color:"white", textDecoration:"none"}}>Home</Link>
                    </li>
                   
                    <li>
                        <Link to = "/Checkout" style={{color:"white", textDecoration:"none"}}>Publish Property</Link>
                    </li>
                    <li>
                        <Link to = "/login" style={{color:"white", textDecoration:"none"}}>Login</Link>
                    </li>
                    <li>
                        <Link to = "/register" style={{color:"white", textDecoration:"none"}}>Register</Link>
                    </li>
                   
                </ul>
            </nav>
        );

    }
