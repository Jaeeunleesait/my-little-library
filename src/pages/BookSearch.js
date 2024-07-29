import React from "react";
import SearchResult from "../components/SearchResult";

export default function BookSearch({ title, author, isbn }) {
  const bookObj = {
    title: title,
    author: author,
    isbn: isbn,
  };

  return (
    <div className="bookSearch">
      <label>
        Book Search: <input className="searchBar" />
      </label>
      <div>
        <SearchResult
          image={"https://edit.org/images/cat/book-covers-big-2019101610.jpg"}
          title={"The lord of the rings"}
          author={"Ngo Poo"}
          isbn={"234"}
        />
      </div>
    </div>
  );
}

function BookList() {
  return <button>Save</button>;
}
