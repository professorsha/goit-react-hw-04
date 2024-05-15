// import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
export default function ImageGallery() {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <div>
        <ImageCard/>
          
        </div>
      </li>
    </ul>
  );
}
