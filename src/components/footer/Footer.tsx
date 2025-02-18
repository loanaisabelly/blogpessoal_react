import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (

        <>
    
            <div className="flex justify-center bg-gradient-to-r from-sky-50 via-gray-200 via-gray-200 to-gray-900  border-black border-solid border-2 py-2 px-4 transition-all">
                <div className="container flex flex-col  items-center py-4 text-black">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Loana | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
	<a href="www.linkedin.com/in/loana-isabelly" target="_blank">
    	<LinkedinLogo size={48} weight='bold' />
    </a>
    <a href="https://www.instagram.com/looaana__?igsh=NzZmZmU4OTBiZzJv" target="_blank">
    	<InstagramLogo size={48} weight='bold' />
    </a>
    <a href="https://github.com/loanaisabelly" target="_blank" rel="noopener noreferrer">
        <GithubLogo size={48} weight='bold'/>
	</a>
</div>
                </div>
                
            </div>
        </>
    )
}

export default Footer