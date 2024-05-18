 import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
export default function ImageGallery({items}) {
  // console.log(items);
  return (

      <ul className={css.galery}>
           {items.map((item) => (
            <li key={item.id} className={css.galeryItem}> 
              
              <ImageCard item={item}/> 
             </li> 
           ))} 
        </ul>
    
  );
}
