import React, { useState } from 'react';

const ControlComp: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert(`A name was submitted: ${inputText}`);
    setInputText(""); 
    console.log("Changed");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Controlled Component in React</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={inputText}
            onChange={handleChange}
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
    </div>
  );
};

export default ControlComp;