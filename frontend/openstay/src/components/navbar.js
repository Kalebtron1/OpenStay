import { Link } from "react-router-dom";
export default function Navbar(){

        return(
            <nav style={{padding:"1rem",background:"#333"}}>
                <ul style={{display:"flex", listStyle:"none",gap:"1rem", margin: 0}}>
                    <li>
                        <Link to = "/" style={{color:"white", textDecoration:"noce"}}>Home</Link>
                    </li>
                    <li>
                        <Link to = "/Payment" style={{color:"white", textDecoration:"noce"}}>Payments</Link>
                    </li>
                </ul>
            </nav>
        );

    }
