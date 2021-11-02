// import { serialize } from 'next-mdx-remote/serialize'
// import { MDXRemote } from 'next-mdx-remote'

// import Heading from '../components/heading'

// const components = { Heading }

export default function Post(post) {
  return (
    <Post {...post}>
      {/* <MDXRemote {...source} components={components} /> */}
    </Post>
  )
}

export async function getStaticProps({params}) {
//   const {slug} = params
//   const post = fetch(`https://hailee.blogs.sh/api/posts/${slug}`).then(req => req.json())
//   const source = post.content
//   const mdxSource = await serialize(source)
//   return { props: { ...post, source: mdxSource } }
return { props: params }
}

export async function getStaticPaths() {
    return { paths: [], fallback: 'blocking' }
  }