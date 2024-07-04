import { useEffect, useState } from "react";

export default function UseEffectApi() {
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [results, setResults] = useState([]);

  async function networkApi() {
    const url = "https://swapi.dev/api/planets";
    const requestApi = await fetch(url).then(async function (resp) {
      const requestApiData = await resp.json();
      const { count, next, previous, results } = requestApiData;

      console.log(requestApiData);
      setCount(() => count);
      setNext(() => next);
      setPrevious(() => previous);
      setResults(() => results);
    });
    // console.log(requestApiData);
  }
  useEffect(() => {
    networkApi();
  }, []);
  return (
    <>
      <div className="container">
        <button
          className="button"
          onClick={() => {
            networkApi(previous);
          }}
        >
          Previous
        </button>

        <button
          className="button"
          onClick={() => {
            networkApi(next);
          }}
        >
          next
        </button>

        <div>
          {results.map((item) => {
            return (
              <div className="rotate">
                <span>{[item.name]} </span>
                <span> {[item.population]}</span>
                <span> {[item.climate]}</span>
                <span> {[item.rotation_period]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
