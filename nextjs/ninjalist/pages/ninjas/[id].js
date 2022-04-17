export const getStaticPaths =async() =>{//specify dynamic routes to pre-render pages based on data
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    //data from json 
    const data= await res.json();
    //individual paths 
    const paths =data.map(ninja=>{
        return{// array of objects
            // paths:[ { params :{id :}}]
            params:{id :ninja.id.toString() }
        }
    })
    return{
        paths,
        fallback:false
    }
   
}
const Details = () => {
    return ( 
        <div>
            <h1>Details Page</h1>
        </div>
     );
}
 
export default Details;