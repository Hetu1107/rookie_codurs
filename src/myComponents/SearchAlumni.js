import React, { useEffect, useState } from "react";
import db from "../FireBase";

function SearchAlumni() {
  const [final, setFinal] = useState([]);
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

  useEffect(() => {
    setFinal(
      search.filter((item) => item.data?.batch === localStorage.getItem("id"))
    );
  }, [search]);
  console.log(final);
  console.log(localStorage.getItem("id"));

  return final.map((s) => {
    return (
      <>
        <a
          href="/vieweralumni"
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
