import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery'

export default function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      await axios
        .get(
          'https://api.unsplash.com/search/photos?client_id=kAC5N1ugVhBQNEKoK7GlGSSH_wSZ5q-3XGJiB6o26EU&page=1&query=office'
        )
        .then(response => {
          setImages(response.data.results);
          console.log(response.data.results);
        });
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      
      {images.length > 0 && (
       <ImageGallery images={images}/>
      )}
    </div>
  );
}
