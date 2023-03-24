import useState from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchPhotos from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const images = await searchPhotos(term);
    setImages(images);
  };

  return (
    <div>
      <SearchBar submitSearch={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
