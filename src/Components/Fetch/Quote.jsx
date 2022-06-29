import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState(null);
  // Normal Way/ Not Standard Way
  // useEffect(() => {
  //   fetch("https://api.quotable.io/random")
  //     .then((res) => res.json())
  //     .then((data) => setQuote(data));
  // }, []);

  //Standard way of Fetching
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    };
    fetchQuote();
  }, []);
  return (
    <div>
      <h1>Get Quote from Fetch</h1>
      <p>{quote?.content}</p>
    </div>
  );
};

export default Quote;
