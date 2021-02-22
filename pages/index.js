import Link from 'next/link';

function Home() 
{
    return (<div>
        <h1>Home</h1>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>

        <br></br>
        <hr></hr>
        <br></br>

        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>

        <br></br>
        <hr></hr>
        <br></br>

        <h1><b>Formação</b></h1>
        <p>PUC-SP</p>
        <p>SI</p>
        <p>Saga</p>
        <p>SuperGeeks</p>

        <br></br>
        <h1>Competência</h1>
        <p>Inglês Avançado</p>
        <p>Linguagem de Programação C/C++</p>
        <p>Microsoft Visual Studio</p>

        <br></br>
        <h1>Saiba Mais</h1>


        
    </div>)
}

export default Home