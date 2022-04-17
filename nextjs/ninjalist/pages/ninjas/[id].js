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
    //get data for individual ninja
   export const getStaticProps=async (context)=>{ //context object attaches evey ninja id
    const id = context.params.id;
    //fetch request to each id
    const res= await fetch('https://jsonplaceholder.typicode.com/users' +id);
    const data = await res.json();

    return{
        props:{ninja:data}
    }
   }
}
const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>Details Page</h1>
        </div>
     );
}
 
export default Details;