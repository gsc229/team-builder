import React from "react";

function FormList(props) {
  return (
    <div>
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.memberName}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
          <p>{member.id}</p>
          <button>Edit</button>
          <button /* type="reset" onClick={props.deleteMember(member.id)} */>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default FormList;
