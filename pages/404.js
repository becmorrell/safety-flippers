import Link from 'next/link';

export default function HandleErrors() {

    return (
        <main className="bg-[#5cc6c7] py-48 md:py-96 px-4 md:px-32 grid gap-10">
            <h1 className="font-serif font-bold text-3xl md:text-7xl">OOOOOPS!</h1>
            <p className="font-serif font-semibold text-xl md:text-5xl">It looks like you are lost. Try a different country in the url</p>
        
            <Link role="button" className="border border-2 border-white rounded-md p-4 w-full md:w-2/5 text-xl font-normal" href="/">Select a country from our list 🌍</Link>
        
        </main>
    )

}