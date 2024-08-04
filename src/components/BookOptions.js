import { useState } from "react";
import ChoosenBook from "./ChosenBook";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../_utils/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function BookOptions({
  image,
  title,
  author,
  isbn,
  firstSentence,
}) {
  const [optionButtonClicked, setOptionClicked] = useState("");

  const iveReadOption = "IveRead";
  const imReadingOption = "ImReading";

  const navigate = useNavigate();

  async function saveToDbAndNavigate(firebasePath, data, navigatePath) {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw Error();
      await addDoc(collection(db, firebasePath), {
        ...data,
        uid: currentUser.uid,
      });
      alert("Successfully saved");
      navigate(navigatePath);
    } catch (e) {
      alert("Error saving");
    }
  }

  async function handleIveReadSaveClicked() {
    saveToDbAndNavigate(
      "iveread",
      {
        image: image ?? "",
        title: title ?? "",
        author: author ?? "",
        isbn: isbn ?? "",
        firstSentence: firstSentence ?? "",
        startYear: startYear ?? "",
        startMonth: startMonth ?? "",
        startDay: startDay ?? "",
        endYear: endYear ?? "",
        endMonth: endMonth ?? "",
        endDay: endDay ?? "",
      },
      "/IveRead"
    );
  }

  function handleImReadingSaveClicked() {
    saveToDbAndNavigate(
      "imreading",
      {
        image: image ?? "",
        title: title ?? "",
        author: author ?? "",
        isbn: isbn ?? "",
        firstSentence: firstSentence ?? "",
        startYear: startYear ?? "",
        startMonth: startMonth ?? "",
        startDay: startDay ?? "",
        page: page ?? 0,
      },
      "/ImReading"
    );
  }

  function handleIWantToReadSaveClicked() {
    saveToDbAndNavigate(
      "iwanttoread",
      {
        image: image ?? "",
        title: title ?? "",
        author: author ?? "",
        isbn: isbn ?? "",
        firstSentence: firstSentence ?? "",
      },
      "/IWantToRead"
    );
  }

  const [startYear, setStartYear] = useState("2024");
  const [startMonth, setStartMonth] = useState("January");
  const [startDay, setStartDay] = useState("01");
  const [endYear, setEndYear] = useState("2024");
  const [endMonth, setEndMonth] = useState("January");
  const [endDay, setEndDay] = useState("01");
  const [page, setPage] = useState(0);

  if (optionButtonClicked === iveReadOption) {
    return (
      <div>
        <ChoosenBook
          image={image}
          title={title}
          author={author}
          isbn={isbn}
          firstSentence={firstSentence}
        />
        <div>
          <form className="dateSelectionContainer">
            <div>
              <label className="dateLabel">Start Date</label>
              <label className="datePartLabel">Year</label>
              <select
                onChange={(event) => setStartYear(event.target.value)}
                className="datePartSelect"
                name="year"
                id="year"
              >
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
              </select>
              <label className="datePartLabel"> Month </label>
              <select
                onChange={(event) => setStartMonth(event.target.value)}
                className="datePartSelect"
                name="month"
                id="month"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <label className="datePartLabel"> Day </label>
              <select
                onChange={(event) => setStartDay(event.target.value)}
                className="datePartSelect"
                name="day"
                id="day"
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </div>
            <div>
              <label className="dateLabel">End Date</label>
              <label className="datePartLabel">Year</label>
              <select
                onChange={(event) => setEndYear(event.target.value)}
                className="datePartSelect"
                name="year"
                id="year"
              >
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
              </select>
              <label className="datePartLabel"> Month </label>
              <select
                onChange={(event) => setEndMonth(event.target.value)}
                className="datePartSelect"
                name="month"
                id="month"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <label className="datePartLabel"> Day </label>
              <select
                onChange={(event) => setEndDay(event.target.value)}
                className="datePartSelect"
                name="date"
                id="date"
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </div>
          </form>
        </div>
        <div>
          <button onClick={handleIveReadSaveClicked} className="saveButton">
            SAVE
          </button>
          <button onClick={() => setOptionClicked("")} className="backButton">
            BACK
          </button>
        </div>
      </div>
    );
  } else if (optionButtonClicked === imReadingOption) {
    return (
      <div>
        <ChoosenBook
          image={image}
          title={title}
          author={author}
          isbn={isbn}
          firstSentence={firstSentence}
        />
        <div>
          <form className="dateSelectionContainer">
            <div>
              <label className="dateLabel">Start Date</label>
              <label className="datePartLabel">Year</label>
              <select className="datePartSelect" name="year" id="year">
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
              </select>
              <label className="datePartLabel"> Month </label>
              <select className="datePartSelect" name="month" id="month">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <label className="datePartLabel"> Date </label>
              <select className="datePartSelect" name="date" id="date">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </div>
            <div className="page">
              <p>
                Page:
                <input
                  min={1}
                  type="number"
                  placeholder={1}
                  onChange={(event) => setPage(event.target.value)}
                ></input>
              </p>
            </div>
          </form>
        </div>
        <div>
          <button onClick={handleImReadingSaveClicked} className="saveButton">
            SAVE
          </button>
          <button onClick={() => setOptionClicked("")} className="backButton">
            BACK
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <ChoosenBook
          image={image}
          title={title}
          author={author}
          isbn={isbn}
          firstSentence={firstSentence}
        />

        <button
          onClick={() => setOptionClicked(iveReadOption)}
          className="chosenBookButton"
        >
          I've read
        </button>
        <button
          onClick={() => setOptionClicked(imReadingOption)}
          className="chosenBookButton"
        >
          I'm reading
        </button>
        <button
          onClick={handleIWantToReadSaveClicked}
          className="chosenBookButton"
        >
          I want to read
        </button>
      </div>
    );
  }
}
