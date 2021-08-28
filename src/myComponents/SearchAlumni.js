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
    setFinal(
      search.filter((item) => item.data?.batch === localStorage.getItem("id"))
    );
  }, [search]);
  console.log(final);
  console.log(localStorage.getItem("id"));

  // return final.map((s) => {
  return (
    <div>
      <div>
        <div class="Background">
          <div className="Title">
            <h2>Search Results</h2>
          </div>
          {final.map((s) => {
            return (
              <>
                <a
                  href="/vieweralumni"
                  onClick={() =>
                    localStorage.setItem("admission", s.data?.admission)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="ProfileBackground">
                    <div className="Profile">
                      <div>
                        <h3>Name:{s.data?.name}</h3>
                      </div>
                      <div>
                        <h3>Batch:{s.data?.batch}</h3>
                      </div>
                      <div>
                        <h3>Addmission No:{s.data?.admission}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
  // });
}

export default SearchAlumni;

