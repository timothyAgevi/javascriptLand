import Link from 'next/link'
// redirect user to homepage aftermviewing 404
import { useEffect } from 'react';// fires a function when component 1sr mounts
import {useRouter} from 'next/router'// gives us method used to redirect user

const NotFound = () => {
    useEffect( ()=> {

    }, [])// dependency array when empty tell use effect to fire function once,when component first moint and neva again
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 
export default NotFound;