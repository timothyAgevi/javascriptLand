import Link from 'next/link'
import { useEffect } from 'react';// redirect user to homepage aftermviewing 404
import {useRouter} from 'next/router'// gives us method used to redirect user 
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 
export default NotFound;