import { GithubLogo, InstagramLogo, LinkedinLogo, } from '@phosphor-icons/react'
import { AuthContext } from '../../context/AuthContext'
import { ReactNode, useContext } from 'react'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className="flex justify-center text-white bg-slate-900">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Blog Pessoal  | Copyright:{' '}
                        {data}
                    </p>
                    <p className="text-lg">
                        Acesse nossas redes sociais
                    </p>
                    <div className='flex gap-2'>
                        <a href="www.linkedin.com/in/loana-isabelly" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/looaana__?igsh=NzZmZmU4OTBiZzJv" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/loanaisabelly" target="_blank" rel="noopener noreferrer">
                            <GithubLogo size={48} weight='bold' />
                        </a>
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

export default Footer