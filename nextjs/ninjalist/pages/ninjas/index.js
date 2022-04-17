import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

//getStaticProps only runs at build time,dont write browser code here
export const getStaticProps=async ()=>{ //fetch data at build time
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
        <h1>All Ninjas</h1> 
            {ninjas.map(ninja=> (
                <Link href ={'/ninjas/' + ninja.id} key={ninja.id}> 
                    <a className={ styles.single}>
                       <h3> { ninja.name}</h3>
                   </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;