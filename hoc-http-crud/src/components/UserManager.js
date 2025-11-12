import React, { useState } from "react";
import withHttpRequests from "./withHttpRequests";
import "./UserManager.css"; // for custom styles

const UserManager = ({ data, addData, updateData, deleteData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    if (!name || !email) {
      alert("⚠️ Please fill all fields");
      return;
    }
    addData({ name, email });
    alert("✅ User added successfully!");
    setName("");
    setEmail("");
  };

  const handleUpdate = (id) => {
    const updatedName = prompt("Enter new name:");
    if (updatedName) {
      updateData(id, { name: updatedName, email: "updated@email.com" });
      alert("✏️ User updated!");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteData(id);
      alert("🗑️ User deleted!");
    }
  };

  return (
    <div className="manager-container">
      <div className="card">
        <h2 className="title">👥 User Manager (CRUD with HOC)</h2>

        {/* Add New User */}
        <div className="form-section">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="add-btn" onClick={handleAdd}>
            ➕ Add
          </button>
        </div>

        {/* User List */}
        <ul className="user-list">
          {data.slice(0, 5).map((user) => (
            <li key={user.id} className="user-item">
              <div>
                <strong>{user.name}</strong>
                <p className="email">{user.email}</p>
              </div>
              <div className="btn-group">
                <button className="edit-btn" onClick={() => handleUpdate(user.id)}>
                  ✏️ Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withHttpRequests(
  UserManager,
  "https://jsonplaceholder.typicode.com/users"
);