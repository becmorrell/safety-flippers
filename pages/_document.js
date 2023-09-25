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
            href="/">Github Repo</Link>
            <p 
            className="text-lg"
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
        <NextScript />
      </body>
    </Html>
  )
}
