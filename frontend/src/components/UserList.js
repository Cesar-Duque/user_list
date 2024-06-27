import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editUserId) {
      axios
        .patch(`http://localhost:5000/api/users/${editUserId}`, { name, email })
        .then((response) => {
          setUsers(
            users.map((user) =>
              user._id === editUserId ? response.data : user
            )
          );
          setEditUserId(null);
          setName("");
          setEmail("");
        })
        .catch((error) => {
          console.error("There was an error updating the user!", error);
        });
    } else {
      axios
        .post("http://localhost:5000/api/users", { name, email })
        .then((response) => {
          setUsers([...users, response.data]);
          setName("");
          setEmail("");
        })
        .catch((error) => {
          console.error("There was an error creating the user!", error);
        });
    }
  };

  const handleEdit = (user) => {
    setEditUserId(user._id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:5000/api/users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user._id !== userId));
      })
      .catch((error) => {
        console.error("There was an error deleting the user!", error);
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">{editUserId ? "Update User" : "Add User"}</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
