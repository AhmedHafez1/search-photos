import SearchBar from "./components/SearchBar";
import searchPhotos from "./api";

function App() {
  const handleSubmit = (term) => {
    searchPhotos(term).then((photos) => console.log(photos));
  };

  return (
    <div>
      <SearchBar submitSearch={handleSubmit} />
    </div>
  );
}

export default App;
