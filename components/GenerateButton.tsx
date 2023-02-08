import React from "react";

export const GenerateButton = () => {
  return (
    <div className="max-w-xl w-full">
      <button
        className="bg-purple-500 rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
        onClick={(e) => alert("tmp")}
      >
        Generate your bio &rarr;
      </button>
    </div>
  );
};
