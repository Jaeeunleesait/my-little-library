import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../_utils/firebase";
import ImWantToReadList from "../components/IWantToReadList";

export default function IveRead() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getResults() {
      const querySnapshot = await getDocs(collection(db, "iwanttoread"));
      const data = querySnapshot.docs.map((snapshot) => {
        return { ...snapshot.data(), id: snapshot.id };
      });
      const currentUserUid = auth.currentUser.uid;
      const userData = data.filter((e) => e.uid === currentUserUid);
      setResults(userData);
    }
    getResults();
  }, []);

  return (
    <div className="allResults">
      {results.map((searchResult, index) => (
        <ImWantToReadList
          onClick={() => {}}
          key={index}
          image={searchResult.image}
          title={searchResult.title}
          author={searchResult.author}
          isbn={searchResult.isbn}
          onDelete={() => {
            const docRef = doc(db, "iwanttoread", searchResult.id);
            deleteDoc(docRef);
            const myResults = [...results];
            myResults.splice(index, 1);
            setResults(myResults);
          }}
        />
      ))}
    </div>
  );
}
