export default function SearchResult({ image, title, author, isbn }) {
  return (
    <div className="results">
      <div className="result">
        <img className="searchBookImg" src={image} />
      </div>
      <div className="bookDetail">
        <div className="result">Title: {title} </div>
        <div className="result"> Author: {author} </div>
        <div className="result"> ISBN: {isbn} </div>
      </div>
    </div>
  );
}
