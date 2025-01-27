import { Link } from "react-router-dom";

const Nav=()=>{
    return (
        <header className="bg-dark text-light py-4">
            <div className="container d-flex justify-content-between">
                <h2>Booklet</h2>
            <nav className="nav">
<Link className="nav-link" to="/">Books</Link>
<Link  className="nav-link" to="/addbooks">Add Book</Link>
            </nav>
            </div>
       
        </header>
    )
}
export default Nav;