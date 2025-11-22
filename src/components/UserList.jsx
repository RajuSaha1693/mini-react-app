import React, { useState, useEffect } from "react";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUsers([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          role: "Developer",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          role: "Designer",
        },
        {
          id: 3,
          name: "Mike Johnson",
          email: "mike@example.com",
          role: "Manager",
        },
        {
          id: 4,
          name: "Sarah Wilson",
          email: "sarah@example.com",
          role: "Developer",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="card">
        <h2>User List</h2>
        <div className="loading">Loading users...</div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>User List</h2>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">{user.name.charAt(0)}</div>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <span className="user-role">{user.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
