import React, {useState} from "react";

export default function SearchBar ({ setQuery }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) setQuery(input);
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center mb-6">
            <input 
            type="text"
            placeholder="Search for a movie...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-2/3 p-2 rounded-l-lg border border-gray-300
    focus:outline-none"
    />
    <button
    type="submit"
    className="bg-blue-600 text-white px-4 rounded-r-lg
hover:bg-blue-700 ml-5">
    Search
  </button>
 </form>
    );
}