import { useState } from 'react';

function SearchBar({ submitSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitSearch(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
