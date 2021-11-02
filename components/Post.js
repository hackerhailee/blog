import Head from 'next/head'
import Footer from './Footer'

export default function Post({
    title = 'How to use search engine optimization to drive sales',
    header = 'Introducing',
    href = '#',
    category = { name: 'Video', href: '#' },
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date = 'Mar 10, 2020',
    datetime = '2020-03-10',
    imageUrl = 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime = '4 min',
    author = {
      name: 'Hacker Hailee',
      href: 'https://hailee.blogs.sh',
      imageUrl: 'https://hailee.blogs.sh/me.jpg',
    },
    children
  }) {
    return (
      <div className="antialiased text-gray-900">
        <Head>
          <title>{title}</title>
        </Head>
        <div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
          <article>
            <h1 className="sr-only">{title}</h1>
            
            <h3>{description}</h3>
            
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
              {children}
            </div>
          </article>
        </div>
      </div>
    )
  }