export default function SearchResult({ image, title, author, isbn, onClick }) {
  return (
    <div onClick={onClick} className="searchResultsContainer">
      <div className="searchResult">
        <img className="searchBookImg" src={image} alt="Book Cover" />
      </div>
      <div className="searchResultbookDetail">
        <div className="searchResult">Title: {title} </div>
        <div className="searchResult">Author: {author} </div>
        <div className="searchResult">ISBN: {isbn} </div>
      </div>
    </div>
  );
}
