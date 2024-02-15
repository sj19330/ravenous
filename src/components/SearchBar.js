import React from "react";

function SearchBar() {
  const filters = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviews": "review_count",
  };

  function handleClick(e) {
    const selected = e.target.value;
    document.getElementById("helper").innerHTML = filters[selected];
  }

  return (
    <div>
      <div>
        <button value="Best Match" onClick={handleClick}>
          Best Match
        </button>
        <button value="Highest Rated" onClick={handleClick}>
          Highest Rated
        </button>
        <button value="Most Reviews" onClick={handleClick}>
          Most Reviews
        </button>
      </div>
      <div>
        <input type="text" placeholder="What does your stomach fancy?" />
        <input type="text" placeholder="Where are you located?" />
        <button>Search</button>
      </div>
      <p id="helper"></p>
    </div>
  );
}

export default SearchBar;
