import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../loginForm.css"

export function LoginAddForm() {

  return (
    <div className="login-container">
      <form
        className="login-form"
        //onSubmit={handleLogin}
      >
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username" class="label-login">
            Username:
          </label>
          <input
            class="input-login"
            type="text"
            id="username"
            //value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" class="label-login">
            Password:
          </label>
          <input
            class="input-login"
            type="password"
            id="password"
            // value={password}
            //onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button class="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
