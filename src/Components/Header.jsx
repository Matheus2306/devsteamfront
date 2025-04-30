import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    const salvaUsuario = localStorage.getItem("devlogin");
    salvaUsuario && setUsuario(JSON.parse(salvaUsuario));
  }, []);

  return (
    <header className="w-100 navbar navbar-dark bg-dark text-light justify-content-around pt-3">
      <div id="logo-pesq" className="d-flex gap-5 w-50 justify-content-between">
        <div role="button" className="d-flex align-items-center">
          <i className="bi bi-controller fs-1 me-3"></i>
          <span className="navbar-brand fw-bold fs-3">DevSteam</span>
        </div>
        <input
          type="text"
          placeholder="Buscar..."
          className="w-100 d-none d-md-block border-0 rounded-1 buscar px-4 my-2"
        />
      </div>
      <div
        role="button"
        id="devcarrinho"
        className="position-relative d-flex align-items-center justify-content-center gap-2"
      >
        {usuario && <span>Olá, {usuario.nome.split(" ")[0]}</span>}
        <i
          className="bi bi-cart4 accordion text-light fs-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#carrinhoOffCanvas"
        ></i>
        {props.contadorJogos > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.contadorJogos}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
