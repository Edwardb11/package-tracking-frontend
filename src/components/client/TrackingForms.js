import React, { useEffect, useState } from "react";
import { url } from "../../api/api";
import Loadings from "./Loading";
import SearchErrors from "./SearchErrors";
import SearchResults from "./SearchResults";

const TrackingForms = () => {
  const [tracking, setTracking] = useState("");
  const [data, setData] = useState();
  const [viewError, setViewError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewResults, setViewResults] = useState(false);
  const endpoint = `tracking/${tracking}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setViewError(false);
    setLoading(true);
    setTracking("");
    setData();
    await fetch(`${url}/${endpoint}`)
      .then((response) => response.json())
      .then((response) => setData(response))
      .then(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => {
          setViewError(false);
          clearTimeout(timer);
        };
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (data?.package !== undefined) {
        if (!data?.package?.length) {
          setViewError(true);
        } else {
          setViewError(false);
          setViewResults(true);
        }
      }
    }, 2000);

    return () => {
      setViewError(false);
      clearTimeout(timer);
      setViewResults(false);
    };
  }, [setViewError, data?.package]);
  return (
    <div className="container mx-auto px-4 py-14 sm:px-6 xl:px-12">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
          <input
            type="text"
            required="true"
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            className="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Tracking"
          />
          <button
            type="submit"
            className="bg-emerald-500 text-white active:bg-emerald-600  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150
            ">
            Buscar
          </button>
        </form>
        {viewError ? <SearchErrors /> : <></>}
        {viewResults ? <SearchResults data={data} /> : <></>}
        {loading && <Loadings />}
      </div>
    </div>
  );
};

export default TrackingForms;
