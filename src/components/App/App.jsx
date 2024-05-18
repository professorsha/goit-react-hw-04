import { useEffect, useState } from 'react';
import { getImages } from '../../unsplash-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getImages(searchQuery);
        setImages((prevState) => [...prevState, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [searchQuery]);
  const handleSearch = async (topic) => {
    setSearchQuery(topic);
    console.log(topic);
    // setPage(1);
    setImages([]);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}
