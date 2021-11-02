/* This example requires Tailwind CSS v2.0+ */
import Footer from '../components/Footer'
import Header from './Header'



export default function Layout({children}) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header/>
        </div>
        <div className="py-10 h-screen">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Title</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 prose lg:prose-xl">
              {children}
              {}
            </div>
          </main>
          <footer className="align-baseline" >
              <Footer/>
          </footer>
        </div>
      </div>
    </>
  )
}
