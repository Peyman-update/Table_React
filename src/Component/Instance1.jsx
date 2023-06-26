import React, { setState, useContext, useEffect, useState } from "react";

import Student_context from "../Context/context1";
import LogoutButton from "./LogoutButton";
import Table from "./Table";
import Search_racord from "./Search";

function Instance1() {
  const [Student, setStudent] = useState([]);

  const Add = (name, family, age) => {
    Student.push({
        Name: name , 
        Last: family, 
        Age: age
    })
    setStudent([...Student ])
  };

  const Search = (thing) =>{
    
     Student.filter((v)=>{
      if (v.Name == thing || v.Last == thing || v.age == thing) {
         return alert(`Name is : ${v.Name} LastName is :${v.Last} Age is : ${v.Age}`)
      }
    })

    
  }

  
  return (
    <div className="App">
      <Student_context.Provider value={{st: Student , add :Add ,  search : Search }}>
        <div className="container">
        <div className="row">
          <div className="col-md-6"><Table/></div>
          <div className="col-md-6" ><LogoutButton /></div>
        </div>
        <Search_racord/>
        </div>
      </Student_context.Provider>
    </div>
  );
}

export default Instance1;
