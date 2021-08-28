import React, { useEffect, useState } from "react";
import "./Searchalumni.css";
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
    setFinal(search.filter((item) => item.data?.batch === 2024));
  }, [search]);
  console.log(final);

  // return final.map((s) => {
    return (
      <>
      <div className="searchalumni">
      <div className="searchalumni_head">
            <h2>Search Results :</h2>
      </div>
      <div className="searchalumni_main">
            <a
              href="/profilealumni"
              // onClick={() => localStorage.setItem("admission", s.data?.admission)}
            >
              {/* <div>{s.data?.admission}</div>
              <div>{s.data?.batch}</div>
              <div>{s.data?.name}</div> */}
              <div>Hetu Patel</div>
              <div>2024</div>
              <div>UI20CS48</div>
            </a>
            <a
              href="/profilealumni"
              // onClick={() => localStorage.setItem("admission", s.data?.admission)}
            >
              {/* <div>{s.data?.admission}</div>
              <div>{s.data?.batch}</div>
              <div>{s.data?.name}</div> */}
              <div>Hetu Patel</div>
              <div>2024</div>
              <div>UI20CS48</div>
            </a>
      </div>
        </div>
        </>
    );
  // });
}

export default SearchAlumni;
