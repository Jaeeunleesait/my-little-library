export default function ChoosenBook({
  image,
  title,
  author,
  isbn,
  firstSentence,
}) {
  return (
    <div className="chosenBookContainer">
      <img className="chosenBookImg" src={image} alt="Book Cover" />
      <div className="chosenBookDetailContainer">
        <div className="chosenBookDetail">Title: {title} </div>
        <div className="chosenBookDetail">Author: {author} </div>
        <div className="chosenBookDetail">{firstSentence} </div>
      </div>
    </div>
  );
}
