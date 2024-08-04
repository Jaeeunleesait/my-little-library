import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function handleStartClicked() {
    navigate("/BookSearch");
  }

  return (
    <view>
      <h1>Enjoy your reading journey with My Little Library</h1>
      <button onClick={handleStartClicked} className="addBookButton">
        Add your book
      </button>
    </view>
  );
}
