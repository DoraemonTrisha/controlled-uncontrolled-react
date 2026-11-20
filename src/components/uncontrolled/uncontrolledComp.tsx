import React, { useRef } from "react";

const UncontrolComp: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      alert(`A name was submitted: ${inputRef.current.value}`);
      inputRef.current.value = "";
    }
    console.log("Value persist");
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
        Uncontrolled Component in React
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 border border-gray-300 rounded-xl shadow-md bg-white"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            ref={inputRef}
            id="name"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default UncontrolComp;
