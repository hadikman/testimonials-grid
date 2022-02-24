export default function Image({className, file, alt}) {
  let image;
  if (file) {
    image = (
      <img
        src={require(`../assets/${file}`)}
        alt={alt}
        className={className ? className : 'image'}
      />
    );
  } else {
    <span>No Image!</span>;
  }
  return image;
}
