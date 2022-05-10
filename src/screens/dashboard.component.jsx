import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  let usersArray = JSON.parse(localStorage.users);
  const currentUser = localStorage.currentUser
    ? localStorage.currentUser
    : JSON.parse(localStorage.users)[JSON.parse(localStorage.users).length - 1]
        .username;

  const currentUserId = localStorage.currentUserId
    ? localStorage.currentUserId
    : JSON.parse(localStorage.users)[JSON.parse(localStorage.users).length - 1]
        .id;
  console.log(JSON.parse(localStorage.users));

  const users = JSON.parse(localStorage.users);

  const signOutHandler = () => {
    usersArray = usersArray.filter((user) => user.username !== currentUser);
    localStorage.setItem("users", JSON.stringify(usersArray));
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUserId");
    window.location.href = "/";
  };
  return (
    <div>
      <h1>Welcome {currentUser}</h1>
      <div className="link__wrapper">
        <Link to="/">Sign in with another username</Link>
        <button onClick={signOutHandler}>Sign Out</button>
      </div>
      <div>
        <h2>Signed in Users</h2>
        {users &&
          users.map((user) => {
            return <p key={user.id}>{user.username}</p>;
          })}
      </div>
    </div>
  );
};

export default Dashboard;
