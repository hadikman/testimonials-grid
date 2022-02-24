export default function Image({file, alt}) {
  let image;
  if (file) {
    image = (
      <img src={require(`../assets/${file}`)} alt={alt} className="image" />
    );
  } else {
    <span>No Image!</span>;
  }
  return image;
}
