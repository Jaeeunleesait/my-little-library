export default function ImWantToReadList({
  image,
  title,
  author,
  isbn,
  onDelete,
}) {
  return (
    <div className="readListContainer">
      <div className="searchResult">
        <img className="searchBookImg" src={image} alt="Book Cover" />
      </div>
      <div className="searchResultbookDetail">
        <div className="searchResult">Title: {title} </div>
        <div className="searchResult">Author: {author} </div>
        <div className="searchResult">ISBN: {isbn} </div>
      </div>
      <div className="deleteButton" onClick={onDelete}>
        X
      </div>
    </div>
  );
}
