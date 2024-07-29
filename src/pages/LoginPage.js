export default function Login({ handleLogIn }) {
  return (
    <div className="signInPageContainer">
      <div className="heading">Welcome to My Little Library</div>
      <button className="signInButton" onClick={handleLogIn}>
        Sign in with GitHub
      </button>
    </div>
  );
}
