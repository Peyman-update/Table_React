import React, { useContext, useState } from "react";
import Student_context from "../Context/context1";
const Search_racord = () => {
  const [Search, setSearch] = useState("");

  const { st, search } = useContext(Student_context);

  const HandleClick = () => {
    search(Search);
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={HandleClick}>Search</button>
      </div>
    </>
  );
};

export default Search_racord;
