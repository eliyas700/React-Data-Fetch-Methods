import React from "react";
import useSWR from "swr";
const fetcher = async (...arg) => {
  const res = await fetch(arg);
  const data = await res.json();
  return data;
};
const QuoteSuspense = () => {
  const { data, error } = useSWR("https://api.quotable.io/random", fetcher, {
    suspense: true,
  });
  console.log(data);

  if (error) return <div>failed to load</div>;
  return (
    <div>
      <div>
        <h1>Get Quote from React Query</h1>
        <p>{data?.content}</p>
      </div>
    </div>
  );
};

export default QuoteSuspense;
