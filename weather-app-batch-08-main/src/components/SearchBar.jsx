import { useState } from "react";

function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(text);
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        placeholder="Search City.."
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-4 py-2 cursor-pointer font-medium text-white hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
