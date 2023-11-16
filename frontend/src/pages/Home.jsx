import PokeCard from "@components/PokeCard/PokeCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokeCard, setPokeCard] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pokemon");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPokeCard(data);
      } catch (err) {
        console.error("Fetch error", err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Mes pokemons</h1>
      {pokeCard &&
        pokeCard.map((element) => {
          return <PokeCard pokemon={element} />;
        })}
    </>
  );
}
