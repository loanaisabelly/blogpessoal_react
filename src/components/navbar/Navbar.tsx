import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

 

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }
    
    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <div 
                className="w-full flex justify-center bg-cover bg-center"
                style={{  backgroundImage: "url('https://ik.imagekit.io/23lwgdahj/Design%20sem%20nome%20(3).png?updatedAt=1740059125957')",  height: "200px", }}>
               
                <div className="container flex justify-between items-center text-lg">
                   
                    <Link to='/home' className="bg-white bg-opacity-80 px-3.5 py-2 rounded-md shadow-md text-2xl font-bold text-gray-800  
                    satisfy-regular ">Loana Isabelly</Link>
                    
                    <div className='flex gap-4 text-gray-800'>
                        <Link to='/postagens' className='bg-white border-solid 
                         border-2 py-2 px-4 transition-all hover:bg-gray-900 hover:text-white  rounded-md shadow-md hover:underline'>Postagens</Link>
                        <Link to='/temas' className='bg-white border-solid 
                        border-2 py-2 px-4 transition-all hover:bg-gray-900 hover:text-white  rounded-md shadow-md hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className= 'bg-white border-solid border-2 py-2 px-4 transition-all hover:bg-gray-900 hover:text-white  rounded-md shadow-md hover:underline'>
                        Cadastrar tema</Link>
                        <Link to="/perfil"  className="bg-white bg-opacity-80 px-3.5 py-2 rounded-md shadow-md hover:underline"
                        >Perfil</Link>
                        <Link  to='' onClick={logout} className="bg-white border-solid border-2 py-2 px-4 transition-all hover:bg-gray-900 hover:text-white  rounded-md shadow-md hover:underline"
                        > Sair</Link>
                    </div>
                </div>
            </div>
       )

    }

    return (
        <>
            { component }
        </>
    )
}

export default Navbar