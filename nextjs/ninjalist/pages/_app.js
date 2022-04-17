import Layout from '../comps/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
