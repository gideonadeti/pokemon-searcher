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

        <div>{searchedString}</div>
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
