// import axios from 'axios';
import { useEffect, useState } from 'react';
import { getImages } from '../../unsplash-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';

export default function App() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getImages('react')
      setImages(fetchedData);
    }

    fetchData();
  }, []);
  // console.log(images);
  return (
    <div>
      <h1>Latest articles</h1>
      <SearchBar/>
      {images.length > 0 && <ImageGallery items={images}/>}
    </div>
  );
}
