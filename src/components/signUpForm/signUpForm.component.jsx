import React, { useState } from "react";
import "./signUpForm.styles.scss";

const SignUpForm = () => {
  const usersArray = localStorage.users ? JSON.parse(localStorage.users) : [];
  const id = localStorage.count ? parseInt(localStorage.count) : 0;
  // const [usersArray, setUsersArray] = useState();
  const [username, setUsername] = useState("");
  const signInHandler = (e) => {
    e.preventDefault();

    if (username !== "" && usersArray.length > 0) {
      let existCounter = 0;
      let userName;
      let userId;
      usersArray.map((user) => {
        if (user.username === username) {
          console.log("User already exists");
          existCounter++;
          userName = user.username;
          userId = user.id;
        }
      });
      if (existCounter === 1) {
        localStorage.setItem("currentUser", userName);
        localStorage.setItem("currentUserId", userId);
        window.location.href = "/dashboard";
      } else if (existCounter === 0) {
        console.log("User does not exist");
        localStorage.setItem("currentUser", username);
        localStorage.setItem("currentUserId", id);
        usersArray.push({ id, username });
        localStorage.setItem("users", JSON.stringify(usersArray));
        window.location.href = "/dashboard";
        localStorage.setItem("count", id + 1);
      }
    } else if (username !== "" && usersArray.length === 0) {
      console.log("let's go");
      localStorage.setItem("currentUser", username);
      localStorage.setItem("currentUserId", id);
      usersArray.push({ id, username });
      localStorage.setItem("users", JSON.stringify(usersArray));
      window.location.href = "/dashboard";
      localStorage.setItem("count", id + 1);
    } else if (username === "") {
      alert("Please enter a username");
    }
  };
  return (
    <form>
      <h1>Sign Up</h1>
      <div className="form__group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
      </div>
      <button onClick={signInHandler}>Sign In</button>
    </form>
  );
};

export default SignUpForm;
