import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			bg-gradient-to-r from-sky-50 via-gray-200 via-gray-200 to-gray-900 border-black border-solid border-2 py-2 px-4 transition-all'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>
                  

                    <div className='flex gap-4'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                     <Link to='/login'> 
                     Sair
                     </Link> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar