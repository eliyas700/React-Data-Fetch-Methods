import React from "react";
import useSWR from "swr";
const fetcher = async (...arg) => {
  const res = await fetch(arg);
  const data = await res.json();
  return data;
};
export default function Quote() {
  const { data, error } = useSWR("https://api.quotable.io/random", fetcher);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading Data...</div>;

  return (
    <div>
      <div>
        <h1>Get Quote from SWR (stale-while-revalidate,)</h1>
        <p>{data.content}</p>
      </div>
    </div>
  );
}
