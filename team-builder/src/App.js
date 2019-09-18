import React, { useState } from "react";
import Create from "./components/Create";

import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      memberName: "Bugs Bunny",
      email: "bugs@hole.com",

      role: "Full Stack Developer"
    }
  ]);

  return (
    <div className="App">
      <h1>Add Team Member</h1>
      <Create members={members} setMembers={setMembers} />
      {members.map((member, index) => (
        <div className="note" key={index}>
          <h2>{member.memberName}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
