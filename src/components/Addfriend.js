import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import axios from "axios";

const AddFriend = () => {
  const { push } = useHistory();
  const [addFriend, setAddFriend] = useState({
    name: "",
    age: '',
    email: ""
  })
  
  const handleChange = (e) => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value
    })
    
  }
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const token = localStorage.getItem("token")
    axios.post("http://localhost:9000/api/friends", addFriend, {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      push('/friends')

    })
    .catch(err => {
      console.log(err)
    })
  }
    return (
      <div>
        <h2>AddFriend</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>name:</label>
            <input onChange={handleChange} name="name" id="name"/>
          </div>
          <div>
            <label htmlFor='age'>Age:</label>
            <input onChange={handleChange} name="age"  id="age"/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input onChange={handleChange}  name="email" id="email"/>
          </div>
            <button>Submit</button>
          </form>
      
      </div>)
  }


  export default AddFriend;
   