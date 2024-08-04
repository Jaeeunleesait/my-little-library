import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../_utils/firebase";
import ImReadingList from "../components/ImReadingList";

export default function IveRead() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getResults() {
      const querySnapshot = await getDocs(collection(db, "imreading"));
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
        <ImReadingList
          onClick={() => {}}
          key={index}
          image={searchResult.image}
          title={searchResult.title}
          startDay={searchResult.startDay}
          startMonth={searchResult.startMonth}
          startYear={searchResult.startYear}
          page={searchResult.page}
          onDelete={() => {
            const docRef = doc(db, "imreading", searchResult.id);
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
