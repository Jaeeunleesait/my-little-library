export default function ImReadingList({
  image,
  title,
  startMonth,
  startDay,
  startYear,
  page,
  onDelete,
}) {
  return (
    <div className="readListContainer">
      <div className="searchResult">
        <img className="searchBookImg" src={image} alt="Book Cover" />
      </div>
      <div className="searchResultbookDetail">
        <div className="searchResult">Title: {title} </div>
        <div className="searchResult">
          Start Date: {`${startMonth} ${startDay}, ${startYear}`}
        </div>
        <div className="searchResult">Page: {page}</div>
      </div>
      <div className="deleteButton" onClick={onDelete}>
        X
      </div>
    </div>
  );
}
