import React, { useEffect, useState } from "react";
import "../style/Api.css";
function UseEffectApi() {
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [results, setResults] = useState([]);

  async function FetchRequest() {
    const url = "http://swapi.dev/api/planets";
    const fetchingData = await fetch(url).then(async function (resp) {
      const dataFetched = await resp.json();
    });

    // const { count, previous, next, results } = dataFetched;
    setCount(() => count);
    setPrevious(() => previous);
    setNext(() => next);
    setResults(() => results);
  }
  console.log(dataFetched);

  useEffect(() => {
    console.log(FetchRequest());
  }, []);
  return (
    <>
      <div className="container">
        <button
          id="previousbtn"
          onClick={() => {
            FetchRequest(previous);
          }}
        >
          &larr; Prev
        </button>
        <button
          id="nextbtn"
          onClick={() => {
            FetchRequest(next);
          }}
        >
          Next &rarr;
        </button>

        {/* <ul>
          {results.map((fetch) => {
            <li value={fetch.results.id}>{fetch.results.count}</li>;
          })}
        </ul> */}
      </div>
    </>
  );
}

export default UseEffectApi;
