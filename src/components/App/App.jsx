import { useEffect, useState } from 'react';
import { getImages } from '../../unsplash-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [imageLikes,setImageLikes]=useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getImages(searchQuery, page);
        setImages(prevState => [...prevState, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (searchQuery != '') {
      fetchData();
    }
  }, [searchQuery, page]);

  const handleSearch = async topic => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = async () => {
    setPage(page + 1);
  };
  const openModal = (imageUrl,likes) => {
    setSelectedImageUrl(imageUrl);
    setImageLikes(likes);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onClick={openModal} />
      )}
      {images.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
        <ImageModal
        isOpen={modalIsOpen}
        imageLikes={imageLikes}
        onClose={closeModal}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
}
