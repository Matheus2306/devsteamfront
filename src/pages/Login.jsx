import React, { Children, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const navgate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault(); // Evita o envio do formulário
    if (nome && email) {
        localStorage.setItem("devlogin", JSON.stringify({nome, email}))
        navgate("/"); // Redireciona para a página inicial
    }
  };
    // Aqui você pode adicionar a lógica para autenticar o usuário

  return (
    <div className="container py-5 w-50">
      <form onSubmit={handleLogin}>
        <div>
          <label className="form-label" htmlFor="frmNome">
            Nome
          </label>
          <input
          valor={nome}
          onChange={(e)=>setNome(e.target.value)}
            className="form-control"
            type="text"
            name="frmNome"
            id="frmNome"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="frmEmail">
            Email
          </label>
          <input
          valor={email}
          onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            type="text"
            name="frmEmail"
            id="frmEmail"
          />
        </div>

        <button className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
