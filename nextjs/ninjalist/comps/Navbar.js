//loads links from client side instead of having server request
import Link from'next/link'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1> Ninja List</h1>
            </div>
           
            <link href="/"><a> Home</a></link>
            <link href="/about"><a>About</a></link>
            <link href="/ninjas"><a>Ninja Listings</a></link>
        </nav>
     );
}
 
export default Navbar;