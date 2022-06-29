import React from "react";
import { useQuery } from "react-query";
import getQuote from "./getQuote";
const Quote = () => {
  const { data } = useQuery("quote", () => getQuote());
  console.log(data, "data");
  return (
    <div>
      <h1>Get Quote from React Query</h1>
      <p>{data?.content}</p>
    </div>
  );
};

export default Quote;
