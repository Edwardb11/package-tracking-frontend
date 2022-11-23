import React from "react";

const SearchErrors = () => {
  return (
    <div role="alert" className="w-1/2 text-center ">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        NO ENCONTRADO 
      </div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>Compruebe que el tracking sea el correcto.</p>
      </div>
    </div>
  );
};

export default SearchErrors;
