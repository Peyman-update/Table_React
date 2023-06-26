import React from "react";


const StudentUser = (props) => {
    // console.log(props.value);
    return (
    <>
    <tr>
        <td>{props.value.Name}</td>
        <td>{props.value.Last}</td>
        <td>{props.value.Age}</td>
    </tr>
    </>
    );
}
 
export default StudentUser;