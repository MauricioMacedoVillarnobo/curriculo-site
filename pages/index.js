import Link from 'next/link';

function Home() 
{
    return (<div>
        <h1>Home</h1>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>

        <hr></hr>
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        
    </div>)
}

export default Home