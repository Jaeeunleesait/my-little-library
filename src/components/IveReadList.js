export default function IveReadList({
  image,
  title,
  startDay,
  startMonth,
  startYear,
  endDay,
  endMonth,
  endYear,
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
        <div className="searchResult">
          End Date: {`${endMonth} ${endDay}, ${endYear}`}
        </div>
      </div>
      <div className="deleteButton" onClick={onDelete}>
        X
      </div>
    </div>
  );
}
