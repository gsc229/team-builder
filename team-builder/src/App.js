import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import FormList from "./components/FormList";

import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      id: 0,
      memberName: "Bugs Bunny",
      email: "bugs@hole.com",
      role: "Full Stack Developer"
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState({
    memberName: "",
    email: "",
    role: ""
  });

  const deleteMember = id => {
    setMembers(members.filter(person => person.id !== id));
  };

  return (
    <div className="App">
      <h1>Add Team Member</h1>
      <Form
        members={members}
        setMembers={setMembers}
        memberToEdit={memberToEdit}
      />

      <FormList
        setMembers={setMembers}
        members={members}
        deleteMember={deleteMember}
      />
    </div>
  );
}

export default App;
