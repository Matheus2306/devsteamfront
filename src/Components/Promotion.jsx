import React, { useEffect, useState } from "react";
import PromoCard from "./PromoCard";

const promotion = (props) => {
  const [randomizedGames, setRandomizedGames] = useState([]);

  const games = [
    {
      id: 1,
      titulo: "Counter-Strike 2",
      preco: 0.0,
      desconto: 0,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
    },
    {
      id: 2,
      titulo: "Cyberpunk 2077",
      preco: 129.99,
      desconto: 20, // 20% off
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    },
    {
      id: 3,
      titulo: "Elden Ring",
      preco: 249.9,
      desconto: 35, // 35% off
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    },
    {
      id: 4,
      titulo: "Red Dead Redemption 2",
      preco: 199.9,
      desconto: 40, // 40% off
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    },
    {
      id: 5,
      titulo: "The Witcher 3: Wild Hunt",
      preco: 149.9,
      desconto: 25, // 25% off
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
    },
  ];

  useEffect(() => {
    const shuffledGames = games
      .filter((jogo) => jogo.desconto > 0)
      .sort(() => Math.random() - 0.5) // Ordena os jogos aleatoriamente
      .slice(0, 3); // Limita a exibição a apenas 3 jogos
    setRandomizedGames(shuffledGames);
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <div id="promotion" className="container w-75 my-4">
      <h2 className="text-uppercase text-center  text-md-start ms-md-5 ps-md-3 mb-4">
        Promoções
      </h2>
      <div
        id="itensPromo"
        className="d-flex flex-wrap gap-4 justify-content-between"
      >
        {randomizedGames.map((jogo) => (
          <PromoCard
            key={jogo.id}
            titulo={jogo.titulo}
            preco={jogo.preco.toFixed(2)}
            desconto={jogo.desconto}
            imagem={jogo.imagem}
            onAddCarrinho={() => props.onAddCarrinho(jogo)} // Passa a função de adicionar ao carrinho
          />
        ))}
      </div>
    </div>
  );
};

export default promotion;
