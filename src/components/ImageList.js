import ImageItem from './ImageItem';

function ImageList({ images }) {
  console.log(images);
  return (
    <div>
      {images.map((img, index) => (
        <ImageItem image={img} key={index} />
      ))}
    </div>
  );
}

export default ImageList;
