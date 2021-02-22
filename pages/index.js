import Link from 'next/link';

function Home() 
{
    return (<div>

        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>

        <br></br>
        <hr></hr>
        <br></br>

        <h1>Formação</h1>
        <p>PUC-SP</p>
        <p>SI</p>
        <p>Saga</p>
        <p>SuperGeeks</p>

        <br></br>
        <h1>Competência</h1>
        <p>Inglês Avançado</p>
        <p>Linguagem de Programação C/C++ básico</p>
        <p>Microsoft Visual Studio</p>

        <br></br>
        <Link href="/saibaMais">
        <h1><a>Saiba Mais</a></h1>
        </Link>
        
    </div>)
}

export default Home