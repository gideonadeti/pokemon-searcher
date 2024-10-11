import { useState } from "react";
import { PokemonData, Type, StatElement } from "../types";

export default function Main() {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const input = event.currentTarget[0] as HTMLInputElement;
    
    fetchPokemon(input.value);
    
    input.value = "";
  }

  async function fetchPokemon(nameOrId: string) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nameOrId}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex-grow-1 container-fluid mt-5">
      <div className="container d-flex flex-column align-items-center">
        <Search handleSubmit={handleSubmit} />

        <div className="row w-100">
          {pokemonData && <Display pokemonData={pokemonData} />}
          {pokemonData && <TableStats pokemonData={pokemonData} />}
        </div>
      </div>
    </main>
  );
}

export function Search({
  handleSubmit,
}: {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form className="w-50" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input className="form-control" id="search-input" placeholder="1" />
        <label htmlFor="search-input">Enter Pokémon name or ID</label>
        <button className="btn position-absolute top-0 bottom-0 end-0 border-0">
          <i className="bi-search"></i>
        </button>
      </div>
    </form>
  );
}

function Display({ pokemonData }: { pokemonData: PokemonData }) {
  return (
    <div className="col bg-light d-flex flex-column p-3 rounded border shadow-sm">
      <div>
        <div>
          {pokemonData.name} #{pokemonData.id}
        </div>
        <div>
          Weight: {pokemonData.weight} Height: {pokemonData.height}
        </div>
      </div>
      <div>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      </div>
      <div>
        {pokemonData.types.map((type: Type) => (
          <span key={type.type.name}>{type.type.name} </span>
        ))}
      </div>
    </div>
  );
}

function TableStats({ pokemonData }: { pokemonData: PokemonData }) {
  return (
    <div className="col">
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>Base</th>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          {pokemonData.stats.map((stat: StatElement) => (
            <tr key={stat.stat.name}>
              <td>{stat.stat.name}</td>
              <td>{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
