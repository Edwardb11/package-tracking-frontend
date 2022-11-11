import React, { useEffect, useState } from "react";
import { url } from "../../api/api";
import SearchErrors from "./SearchErrors";
import SearchResults from "./SearchResults";

const TrackingForms = () => {
  const [tracking, setTracking] = useState("");
  const [data, setData] = useState({ package: [], state: []});
  const [viewError, setViewError] = useState(false);
  const [viewResults, setViewResults] = useState(false);
  const endpoint = `tracking/${tracking}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setViewError(false);
    await fetch(`${url}/${endpoint}`)
      .then((response) => response.json())
      .then((response) => setData(response));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!data.package.length) {
        setViewError(true);
      } else {
        setViewError(false);
        setViewResults(true);
      }
    }, 1000);

    return () => {
      setViewError(false);
      clearTimeout(timer);
    };
  }, [setViewError, data.package.length]);

  console.log(data);
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
            placeholder="Tracking UPS "
          />
          <button
            type="submit"
            className="w-full rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max">
            Buscar
          </button>
        </form>
        {viewError && (
          <>
            <SearchErrors />
          </>
        )}
        {viewResults && (
          <>
            <SearchResults data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default TrackingForms;
