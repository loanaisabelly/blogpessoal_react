

function Home() {
  return (
   <div style={{
    width:"100vw",
    display: "flex",
    justifyContent: "center",
   }}>
    <div>
        <div style={{
            width: "80vw",
            display: "felx",
            flexDirection: "column",
            alignItems: "center"
        }}>

        <h2>Seja Bem Vindos!</h2>
        <p>Expresse aqui seus pensamentos e opniões</p>
        </div>

        <img src="https://i.imgur.com/VpwApCU.png" 
                            alt="Imagem da Página Home" 
                            width="400px"
        >
        </img>

    </div>

   </div>
  )
}

export default Home