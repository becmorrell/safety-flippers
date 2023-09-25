import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header 
          className="w-screen fixed h-12 grid grid-cols-[max-content_1fr_max-content] z-10 bg-[#283b49] gap-6 items-center px-6"
        >
          <Link 
            className="hover:underline underline-offset-4"
            href="/">Country List</Link>
          
          <Link 
            className="hover:underline underline-offset-4"
            target="_blank"
            href="https://github.com/becmorrell/safety-flippers">Github Repo</Link>
            <p 
            className="text-lg hidden md:flex"
            >SafetyFlippers 🦭 by &nbsp; 
              <Link
                href="/"
                target="_blank"
                className="hover:underline underline-offset-4">
                Rebecca Morrell
              </Link>
          </p>
        </header>
        <Main />
        <footer className="flex flex-col gap-4 bg-[#283b49] pb-40 p-12">
            <h3 className="text-3xl underline underline-offset-4">Contact me:</h3>
            <p className="px-4 md:px-10 md:text-xl">Rebecca Morrell</p>
            <Link
                href="mailto:becmorrell91@gmail.com"
                className="px-4 md:px-10 md:text-xl hover:underline underline-offset-4"
                >
                    becmorrell91@gmail.com
            </Link>
            
            <Link 
                href="https://www.linkedin.com/in/beccamorrell/" 
                target="_blank" 
                className="px-4 md:px-10 md:text-xl hover:underline underline-offset-4"
                >
                    linkedin.com/in/beccamorrell/
            </Link>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
