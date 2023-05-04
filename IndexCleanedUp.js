import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// - React Forms: https://reactjs.org/docs/forms.html

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    avatar: "",
    accountType: "pro",
    newsletter: true
  })
// all states in one place 

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  
  function handleChange(event) {
    const key = event.target.id
    // 'id' shows which of the input fields is being changed. use 'console.log'. 
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    // 'checkbox' data format is different than others, so we need extra functioin
    setFormData({ 
      ...formData, 
      [key]: value
    })
    // set all FormData that was set previously and whatever changed occurs according to key. 
  }
//   pulled out of jsx portion
  
  console.log(formData)

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />

      <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={formData.avatar}
        onChange={handleChange}
      />
      <img
        src={formData.avatar || "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"}
        alt="Avatar preview"
      />

      <label htmlFor="type">Account Type</label>
      <select
        id="accountType"
        value={formData.accountType}
        onChange={handleChange}
      >
        <option value="free">Free</option>
        <option value="normal">Normal</option>
        <option value="pro">Pro</option>
      </select>

      <label>
        Get Our Newsletter!
        <input
          type="checkbox"
          id="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
      </label>

      <input type="submit" value="Sign Up" />
    </form>
  );
}

ReactDOM.render(<SignUp />, document.getElementById('root'));