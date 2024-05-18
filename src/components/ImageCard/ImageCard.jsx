 import css from './ImageCard.module.css';

export default function ImageCard( {imgUrl, imgUrlBig, imgDescr, imgLikes, onClick} ) {
  const handleClick =()=>{
    onClick(imgUrlBig,imgLikes)
  }
  return (
    <div onClick={handleClick}>
      {/* <p>likes:{item.likes}</p>
              <p>description:{item.description}</p>
              <span>url for modal: {item.urls.regular}</span> */}
              <img className={css.galeryImg} src={imgUrl} height="300px" alt={imgDescr.en}></img>
    </div>
  );
}
