import React, { useContext, useEffect, useState } from "react";
import Student_context from "../Context/context1";

function LogoutButton(props) {
  const { add } = useContext(Student_context);

  const [Name, setName] = useState("");
  const [Family, setFamily] = useState("");
  const [Age, setAge] = useState("");

  const handleSubmite = (e) => {
    e.preventDefault();
    add(Name, Family, Age);

    setName("");
    setFamily("");
    setAge("");
  };

  return (
    <>
      <form className="form-user" onSubmit={handleSubmite}>
        <div className="Form-control">
          <label className="mx-3" id="Name">
            Name :{" "}
          </label>
          <input
            type="text"
            name="Name"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="Form-control  ">
          <label className="mx-3" id="Family">
            Last :{" "}
          </label>
          <input
            type="text"
            name="Family"
            value={Family}
            onChange={(e) => {
              setFamily(e.target.value);
            }}
          />
        </div>

        <div className="Form-control ">
          <label className="mx-3" id="Age">
            Age :{" "}
          </label>
          <input
            type="number"
            name="Age"
            value={Age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default LogoutButton;
