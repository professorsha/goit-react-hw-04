// import css from './ImageCard.module.css';

export default function ImageCard( {likes, description,urls:{small,regular},alternative_slugs:{en}} ) {
  return (
    <>
      <p>likes:{likes}</p>
              <p>description:{description}</p>
              <span>url for modal: {regular}</span>
              <img src={small} alt={en}></img>
    </>
  );
}
