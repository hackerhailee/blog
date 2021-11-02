import 'tailwindcss/tailwind.css'
import Post from '../components/Post'
import Layout from '../components/Layout'

function MyBlog({ Component, pageProps }) {
  const {slug} = pageProps
  console.log(pageProps) 
  return <Layout><Component {...pageProps} /></Layout>
  return slug ? <Layout><Post><Component {...pageProps} /></Post></Layout> : 
                <Layout><Component {...pageProps} /></Layout>
}

export default MyBlog
