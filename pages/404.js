import { useRouter } from 'next/router';


export default function handlErrors() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/country/greece')
    }

    return (
        <main className="bg-[#5cc6c7] py-96 px-32 grid gap-10">
            <h1 className="font-serif font-bold text-7xl">OOOOOPS!</h1>
            <p className="font-serif font-semibold text-5xl">It looks like you're lost. Try a different country in the url</p>
        
            <button className="border border-2 border-white rounded-md p-4 w-44 text-xl font-medium" onClick={handleClick}>Try this</button>
        
        </main>
    )

}