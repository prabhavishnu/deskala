import React, { Component } from "react";
import "./LoginScreeenStyles.css";

export default class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };
  render() {
    return (
      <div className="LoginPage">
        <div className="loginBox">
          <h2>Sign up</h2>
          <div className="LoginPage_SubBox">
            {/* <h3>Email</h3>
            <input
              className="Login_Input_Box"
              style={{ marginTop: "30px" }}
              id="user_input"
              placeholder="Enter your Emil ID"
              type="email"
              // value={}
              // onChange={(event) => {
              //   this.handleChange(event, "email");
              // }}
            />
            <h3>Phone Number</h3>
            <input
              className="Login_Input_Box"
              style={{ marginTop: "30px" }}
              id="user_input"
              placeholder="Enter your Phone Number"
              type="email"
              // value={email}
              // onChange={(event) => {
              //   this.handleChange(event, "email");
              // }}
            />
            <h3>Password</h3>
            <input
              className="Login_Input_Box"
              style={{ marginTop: "30px" }}
              id="user_input"
              placeholder="Password"
              type="password"
              // value={email}
              // onChange={(event) => {
              //   this.handleChange(event, "email");
              // }}
            />
            <text>Minimum 8 Alpha numeric</text>
            <button
              className="Login_With_Your_Email_button"
              id="LoginWithEmail"
              onClick={() => {
                this.onSubmit();
              }}
            >
              Login With Your Email
            </button> */}
            <form>
              <div className="form-group">
                <label for="emailIp">Email id</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailIp"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="phoneIp">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneIp"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Phone number"
                />
              </div>
              <div className="form-group">
                <label for="passwordIp">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordIp"
                  placeholder="Password"
                />
                <small id="emailHelp" className="text-xs-right small-text">
                  Minimum 8 Alpha numeric
                </small>
              </div>

              <button type="submit" className="btn btn-primary button-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
