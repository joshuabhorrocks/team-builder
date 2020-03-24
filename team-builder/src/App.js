import React, {useState} from 'react';
import Form from "./Form.js";
import './App.css';

const teamFriends = [
  {fName: "Joshua", lName: "Horrocks", role: "Student" },
  {fName: "Devin", lName: "Moore", role: "Student" },
  {fName: "Hunter", lName: "Stevens", role: "Student" },
  {fName: "Mariapala", lName: "Trujillo", role: "Student" },
  {fName: "Cody", lName: "Solomon", role: "Student" },
  {fName: "Jesus", lName: "Guerrero", role: "Student" },
  {fName: "Tommy", lName: "Kindle", role: "Team Lead" }
]

function App() {
  const [friends, setFriends] = useState(teamFriends);
  const [formVal, setFormVal] = useState({
    fName: "",
    lName: "",
    role: "",
})
const onInputChange = event => {
  const iChange = event.target.name;
  const newInputVal = event.target.value;

  setFormVal({
    ...formVal,
    [iChange]: newInputVal, 
  })
}
const onFormSubmit = event => {
  event.preventDefault();
  const newTFriend = {
      fName: formVal.fName,
      lName: formVal.lName,
      role: formVal.role,
  }
  setFriends([...friends, newTFriend])
}
  return (
    <div className = "App">
      <header className = "App-header">
        <Form
          onInputChange = {onInputChange}
          formVal = {formVal}
          onFormSubmit={onFormSubmit}
          />
          <h3>List of friends:</h3>
          {
            friends.map(friend => <div key={friend.id}>{friend.fName} {friend.lName}: {friend.role}</div>)
          }
      </header>
    </div>
  )
}

export default App;
