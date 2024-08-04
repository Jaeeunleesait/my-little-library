import React, { useState } from "react";
import SearchResult from "../components/SearchResult";
import BookOptions from "../components/BookOptions";

export default function BookSearch() {
  const [results, setResults] = useState([]);
  const [bookSearchTerm, setBookSearchTerm] = useState("");
  const [bookClicked, setBookClicked] = useState(false);
  const [chosenIndex, setChosenIndex] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${bookSearchTerm}&limit=5`
    );
    const json = await response.json();
    let results = json.docs.map((result) => {
      return {
        title: result.title,
        author: result.author_name,
        isbn: result.isbn ? result.isbn[0] : "",
        firstSentence: result.first_sentence,
      };
    });

    for (let i = 0; i < results.length; i++) {
      let image = (
        await fetch(
          `https://covers.openlibrary.org/b/ISBN/${results[i].isbn}-L.jpg`
        )
      ).url;

      results[i] = { ...results[i], image };
    }

    setResults(results);
  }

  function handleBookChosen(index) {
    setBookClicked(true);
    setChosenIndex(index);
  }

  if (results.length === 0) {
    return (
      <div className="bookSearch">
        <form onSubmit={handleSubmit}>
          <label>
            Book Search
            <input
              className="searchBar"
              type="text"
              placeholder="Title, Author, ISBN"
              onChange={(event) => setBookSearchTerm(event.target.value)}
            />
          </label>
        </form>
      </div>
    );
  } else if (!bookClicked) {
    return (
      <div className="allResults">
        {results.map((searchResult, index) => (
          <SearchResult
            onClick={() => handleBookChosen(index)}
            key={index}
            image={searchResult.image}
            title={searchResult.title}
            author={searchResult.author}
            isbn={searchResult.isbn}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="allResults">
        <BookOptions
          image={results[chosenIndex].image}
          title={results[chosenIndex].title}
          author={results[chosenIndex].author}
          isbn={results[chosenIndex].isbn}
          firstSentence={results[chosenIndex].firstSentence}
        />
      </div>
    );
  }
}
