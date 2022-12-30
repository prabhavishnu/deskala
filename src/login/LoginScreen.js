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
      <div className="login_page">
        <h3 className="deskala_assignment_title">Deskala - Assignment</h3>
        <div className="shadow bg-white rounded login_box ">
          <h4>Sign up</h4>
          <div className="login_box_div">
            <form>
              <div className="form-group">
                <label for="emailIp">Email id</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailIp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="phoneIp">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneIp"
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
                <p className="input_sub_text">
                  Minimum 8 Alpha numeric
                </p>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary button-submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
