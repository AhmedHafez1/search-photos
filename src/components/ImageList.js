import ImageItem from './ImageItem';

function ImageList({ images }) {
  console.log(images);
  return (
    <div>
      {images.map((img) => (
        <ImageItem image={img} key={img.id} />
      ))}
    </div>
  );
}

export default ImageList;
