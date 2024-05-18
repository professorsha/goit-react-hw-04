 import css from './ImageCard.module.css';

export default function ImageCard( {item} ) {
  return (
    <>
      {/* <p>likes:{item.likes}</p>
              <p>description:{item.description}</p>
              <span>url for modal: {item.urls.regular}</span> */}
              <img className={css.galeryImg} src={item.urls.small} height="300px" alt={item.alternative_slugs.en}></img>
    </>
  );
}
