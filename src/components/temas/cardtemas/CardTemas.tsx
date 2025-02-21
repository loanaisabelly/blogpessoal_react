import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-cyan-50  text-black font-bold text-2xl
            border-black border-solid border-1 transition-all'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-slate-50 h-full'>{tema.descricao}</p>

            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full bg-blue-400  text-white  
                    py-2 px-4 items-center justify-center hover:bg-blue-950 hover:text-white '>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-800 w-full 
		        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas