import Link from 'next/link';

function Home() 
{
    return (<div>
        <h1>Home</h1>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>

        <hr></hr>
        <video width="320" height="240" controls></video>
            <source src="movie.mp4" type="video/mp4"></source>
            <source src="movie.ogg" type="video/ogg"></source>
        
    </div>) 
}

export default Home