import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios"

function App() {

  const [listOfUsers, setListOfUsers] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  const createUser = () =>{
    Axios.post("http://localhost:3001/createUser", {
      name:name, age:age, username:username,
    }).then((response)=>{
      alert("User Created");
    })
  }

  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=>{
      setListOfUsers(response.data)
    })
  },[])
 

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user)=>{
          return (
          <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
          </div>
        )
        })}
        
      </div>
      <div>

        <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
        <input type="number" placeholder='Age' onChange={(e)=>{setAge(e.target.value)}}/>
        <input type="text" placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/>

        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
