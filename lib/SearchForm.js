import { useState } from "react";

export default function SearchForm() {
  const [hits, setHits] = useState([]);

  const search = async (event) => {
    const q = event.target.value;
    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch("/api/search?" + params);

      const result = await res.json();
      console.log(result);
      setHits(result["cars"]);
    }
  };

  return (
    <div className="flex flex-col space-y-5">
      <input
        className="border-black border-2 w-40"
        onChange={search}
        type="text"
      />

      <ul>
        {hits.map((hit) => (
          <li
            className="flex w-96 border-black border-2 items-center justify-between h-40"
            key={hit.entityId}
          >
            <div className="flex flex-col">
              <p>{hit.make}</p>
              <p>{hit.model}</p>
            </div>
            <img className="w-32 h-14" src={hit.image} />
            <p className="w-20">{hit.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
