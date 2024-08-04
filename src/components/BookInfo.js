export default function BookInfo({ image, title, summary }) {
  return (
    <main>
      <div className="results">
        <div className="result">
          <img className="searchBookImg" src={image} />
        </div>
        <div className="bookDetail">
          <div className="result">Title: {title} </div>
          <div className="result">Summary: {summary}</div>
        </div>
      </div>
      <div>
        <div>Start Date</div>
        <div>End Date</div>
        <button className="saveButton">SAVE</button>
      </div>
    </main>
  );
}
