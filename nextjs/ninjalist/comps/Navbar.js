//loads links from client side instead of having server request
import Link from'next/link'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1> Ninja List</h1>
            </div>
           
            <a> Home</a>
            <a>About</a>
            <a>Ninja Listings</a>
        </nav>
     );
}
 
export default Navbar;