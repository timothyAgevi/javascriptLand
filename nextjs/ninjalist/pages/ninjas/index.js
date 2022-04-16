//getStaticProps only runs at build time,dont write browser code here
export const getStaticProps=async ()=>{
    // res object of the fetch request
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    //data from json 
    const data= await res.json();
    // to use this data inside component
    return {
        props:{ninjas:data} // props property is a object
    }
} 
const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            {/* <Navbar/> */}
           <h1>All Ninjas</h1> 
        </div>
     );
}
 
export default Ninjas;