import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import BookSearch from "./pages/BookSearch";
import IveRead from "./pages/IveRead";
import ImReading from "./pages/ImReading";
import IWantToRead from "./pages/IWantToRead";
import { Route, Routes } from "react-router-dom";
import { useUserAuth } from "./_utils/auth-context";
import Login from "./pages/LoginPage";

export default function App() {
  const { gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [userCredential, setUserCredential] = useState(null);

  async function handleLogIn() {
    try {
      setUserCredential(await gitHubSignIn());
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {userCredential ? (
        <div>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/BookSearch" element={<BookSearch />} />
              <Route path="/IveRead" element={<IveRead />} />
              <Route path="/ImReading" element={<ImReading />} />
              <Route path="/IWantToRead" element={<IWantToRead />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login handleLogIn={handleLogIn} />
      )}
    </>
  );
}
