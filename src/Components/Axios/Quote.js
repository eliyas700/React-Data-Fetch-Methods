import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Quote() {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get("https://api.quotable.io/random");
      setQuote(res.data);
      console.log(res.data);
    };
    fetchQuote();
  }, []);
  return (
    <div>
      <div>
        <h1>Get Quote from Axios</h1>
        <p>{quote?.content}</p>
      </div>
    </div>
  );
}
