
import React , {useContext} from "react";
import Student_context from "../Context/context1";

import { v4 as uuidv4 } from "uuid";
uuidv4();
const Table = () => {

  const {st} = useContext(Student_context);

  

  return ( 
  <>
<div>
  <table className="table table-light text-center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Family</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
        {
            st.map((v)=>{
              return (
              <>
              <tr>
                <td>{v.Name}</td>
                <td>{v.Last}</td>
                <td>{v.Age}</td>
              </tr>
              </>
              )
            })
        }
    </tbody>
  </table>
  
</div>
  </>
  );
}
 
export default Table;