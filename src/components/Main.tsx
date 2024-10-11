import { useState } from "react";

export default function Main() {
  const [searchedString, setSearchedString] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const input = event.currentTarget[0] as HTMLInputElement;

    setSearchedString(input.value);

    input.value = "";
  }

  return (
    <main className="flex-grow-1 container-fluid mt-5">
      <div className="container d-flex flex-column align-items-center">
        <Search handleSubmit={handleSubmit} />

        <div className="row">
          <Display />
          <TableStats />
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

function Display() {
  return (
    <div className="col bg-light d-flex flex-column p-3 rounded border shadow-sm">
      <div>
        <div>BULBASAUR #1</div>
        <div>Weight: 69 Height: 7</div>
      </div>
      <div>
        <img src="/vite.svg" alt="" />
      </div>
      <div>
        <span>grass</span>
        <span>poison</span>
      </div>
    </div>
  );
}

function TableStats() {
  return (
    <div className="col">
      <table className="table table-bordered text-center">
        <tr>
          <th>Base</th>
          <th>Stats</th>
        </tr>

        <tr>
          <td>HP</td>
          <td>45</td>
        </tr>

        <tr>
          <td>Attack</td>
          <td>49</td>
        </tr>

        <tr>
          <td>Defense</td>
          <td>49</td>
        </tr>

        <tr>
          <td>Sp. Attack</td>
          <td>65</td>
        </tr>

        <tr>
          <td>Sp. Defense</td>
          <td>65</td>
        </tr>

        <tr>
          <td>Speed</td>
          <td>45</td>
        </tr>
      </table>
    </div>
  );
}
