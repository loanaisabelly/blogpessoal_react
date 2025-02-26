import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="flex justify-center mx-4">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden shadow-lg bg-white p-6 flex flex-col lg:flex-row items-center">
        <ProfilePicture src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />
        <ProfileDetails nome={usuario.nome} email={usuario.usuario} />
      </div>
    </div>
  );
}

function ProfilePicture({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-6">
      <img
        className="rounded-full w-56 border-8 border-white"
        src={src}
        alt={alt}
      />
    </div>
  );
}

function ProfileDetails({ nome, email }: { nome: string; email: string }) {
  return (
    <div className="flex flex-col bg-slate-800 text-white text-xl p-6 rounded-xl flex-grow">
      <p className="text-2xl font-bold mb-2">Nome: {nome}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Perfil;
