import React, { useState } from "react";
import "../App.css";

function Create(props) {
  /*  const [title, setTitle] = useState();
  const handleTextChange = event => {
    setTitle(event.target.value);
    console.log(event.target.value);
  }; */

  /* forms submits have default functionality in the browser to send you to a new page
 therefore you need preventDefault() to stop this while developing  */
  /* don't need stopPropagation() because only one thing can have focus at any single time,
 input fields can only have a single target */
  /*  const handleSubmit = event => {
   
    event.preventDefault();
   
    console.log("form submited");
  }; */

  const [newMember, setNewMember] = useState({
    memberName: "",
    email: "",
    role: ""
  });

  const handleChange = event => {
    setNewMember({
      ...newMember,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setMembers([...props.members, newMember]);
    resetForm(event);
  };
  console.log(newMember);
  const resetForm = event => {
    event.preventDefault();
    setNewMember({
      memberName: "",
      email: "",
      role: ""
    });
  };

  return (
    <div>
      {/* onSubmit on the form is a synthetic event */}
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleChange}
          type="text"
          name="memberName"
          id=""
          placeholder="Enter First and Last Name"
          value={newMember.memberName}
        />
        {/* adding type submit makes this work in conjunction with the form onSubmit synthetic event */}
        <input
          onChange={handleChange}
          type="text"
          name="email"
          id=""
          placeholder="Your Email"
          value={newMember.email}
        />
        <input
          onChange={handleChange}
          type="text"
          name="role"
          id=""
          placeholder="Your Role"
          value={newMember.role}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Create;
