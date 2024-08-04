import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../_utils/firebase";
import IveReadList from "../components/IveReadList";

export default function IveRead() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getResults() {
      const querySnapshot = await getDocs(collection(db, "iveread"));
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
        <IveReadList
          onClick={() => {}}
          key={index}
          image={searchResult.image}
          title={searchResult.title}
          startDay={searchResult.startDay}
          startMonth={searchResult.startMonth}
          startYear={searchResult.startYear}
          endDay={searchResult.endDay}
          endMonth={searchResult.endMonth}
          endYear={searchResult.endYear}
          onDelete={() => {
            const docRef = doc(db, "iveread", searchResult.id);
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
