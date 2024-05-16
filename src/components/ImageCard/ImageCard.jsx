// import css from './ImageCard.module.css';

export default function ImageCard( {item} ) {
  return (
    <>
      <p>likes:{item.likes}</p>
              <p>description:{item.description}</p>
              <span>url for modal: {item.urls.regular}</span>
              <img src={item.urls.small} alt={item.alternative_slugs.en}></img>
    </>
  );
}
