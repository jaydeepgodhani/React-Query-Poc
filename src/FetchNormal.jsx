import React, { useState } from "react";
import { mockAPICall } from "./helper/mockAPICall";

const FetchNormal = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const clicked = async () => {
    if (inProgress) return;
    setInProgress(true);
    setLoading(true);
    setErr(null);
    setData(null);
    await mockAPICall()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setErr(error);
      })
      .finally(() => {
        setLoading(false);
        setInProgress(false);
      });
  };

  return (
    <div>
      <button
        className="flex m-auto border-solid border-black px-7 py-3 border-2 hover:border-gray-400 active:text-gray-400"
        onClick={clicked}
      >
        Fetch Normal
      </button>
      <div className="py-3 flex m-auto justify-center">
        {loading && <div className="text-slate-400">{"Loading..."}</div>}
        {data && <div className="text-green-500">{data}</div>}
        {err && <div className="text-red-500">{err}</div>}
      </div>
    </div>
  );
};

export default FetchNormal;
