import React, { useEffect, useState } from "react";

import Student_context from "../Context/context1";
import LogoutButton from "./LogoutButton";
import Table from "./Table";
import Search_racord from "./Search";

function Instance1() {
  const [Student, setStudent] = useState([]);
  const [user, setUser] = useState(0);
  const [result, setResult] = useState(false);

  useEffect(() => {
    setUser(Student.length);
  }, [Student]);

  const Add = (name, family, age) => {
    Student.push({
      Name: name,
      Last: family,
      Age: age,
    });

    Student.forEach((v) => {
      if (v.Name == "" || v.Last == "" || v.Age == "") {
        alert("Please Enter correct Information");
        Student.pop();
      }
    });

    setStudent([...Student]);
  };

  const Search = (thing) => {
    Student.filter((v) => {
      if (v.Name == thing || v.Last == thing || v.Age == thing) {
        console.log(v.Age);
        setResult({ Name: v.Name, Last: v.Last, Age: v.Age });
      } else {
        alert("The user isn't");
      }
    });
  };

  return (
    <div
      className="App bg-success"
      style={{ height: "100vh", color: "bisque" }}
    >
      <Student_context.Provider
        value={{ st: Student, add: Add, search: Search }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-md-8">
              <Table />
            </div>
            <div className="col-md-4">
              <LogoutButton />
              <Search_racord />
              <div className="addUser">{`Number users is member : ${user} `}</div>
              {result && (
                <div className="addUser">{`Name is ${result.Name} Last is : ${result.Last} Age is ${result.Age}`}</div>
              )}
            </div>
          </div>
        </div>
      </Student_context.Provider>
    </div>
  );
}

export default Instance1;
