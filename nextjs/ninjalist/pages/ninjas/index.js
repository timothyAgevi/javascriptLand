//getStaticProps only runs at build time,dont write browser code here
export const getStaticProps=async ()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
} 
const Ninjas = () => {
    return ( 
        <div>
            {/* <Navbar/> */}
           <h1>All Ninjas</h1> 
        </div>
     );
}
 
export default Ninjas;