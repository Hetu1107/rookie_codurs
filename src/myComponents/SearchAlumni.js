import React, { useEffect, useState } from "react";
import db from "../FireBase";

function SearchAlumni() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    db.collection("institute").onSnapshot((snapshhot) => {
      setSearch(
        snapshhot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  console.log(search);

  return search.map((s) => {
    return (
      <>
        <a
          href="/profilealumni"
          onClick={() => localStorage.setItem("admission", s.data?.admission)}
        >
          <div>{s.data?.admission}</div>
          <div>{s.data?.batch}</div>
          <div>{s.data?.name}</div>
        </a>
        <br />
      </>
    );
  });
}

export default SearchAlumni;
