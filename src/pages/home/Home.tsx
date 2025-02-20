import "../../cubo.css";


function Home() {
    return (
        <>
            <div className="bg-neutral-50  flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4 ">
                        <h2 className='text-5xl font-bold amatic-sc-regular'>
                            Seja Bem Vindo ao meu Blog!
                        </h2>
                        <p className='text-xl amatic-sc-bold'>
                            Expresso aqui meus pensamentos e opniões
                        </p>

                        <div className="flex justify-center gap-4">
                         <div className='rounded text-black border-black border-solid border-2 py-2 px-4 transition-all hover:bg-gray-900 hover:text-white'>
                            Nova Postagem
                         </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center cube-container ">
                    <div className="cube">
                        <div className="front"></div>
                        <div className="back"></div>
                        <div className="left"></div>
                        <div className="right"></div>
                        <div className="top"></div>
                        <div className="bottom"></div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Home