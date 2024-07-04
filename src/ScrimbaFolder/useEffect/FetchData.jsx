import React, { useState, useEffect } from "react";
const [count, setCount] = useState();
const [next, setNext] = useState("");
const [previous, setPrevious] = useState("");
const [results, setResults] = useState([]);

async function FetchRequest() {
  const url = "https://swapi.dev/api/planets";
  const fetchingData = await fetch(url).then(async function (resp) {
    const DataFetched = await resp.json();
    const { count, next, previous, results } = DataFetched;
    setCount(() => count);
    setNext(() => next);
    setResults(() => results);
    setPrevious(() => previous);
  });
  console.log(DataFetched);
}
useEffect(() => {
  FetchRequest();
});
function FetchData() {
  return <></>;
}

export default FetchData;
