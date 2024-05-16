// import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
export default function ImageGallery({items}) {
  // console.log(items);
  return (

      <ul>
           {items.map((item) => (
            <li key={item.id}> 
              
              <ImageCard item={item}/> 
             </li> 
           ))} 
        </ul>
    
  );
}
