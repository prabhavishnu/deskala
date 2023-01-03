import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Input from "../../components/input/input.component";
import {
  signup,
  signin,
  authenticate,
  validateInputs,
} from "../../services/auth.service";
import "../Login/LoginScreenStyles.css";

export default class RegisterScreen extends Component {
  state = {
    email: "",
    password: "",
    phone: "",
    error: "",
    redirectToDashboard: false,
  };

  registerSubmit = (event) => {
    event.preventDefault();
    const { email, password, phone } = this.state;
    const user = { email, password, phone };
    const resp = validateInputs(user);
    if (resp.error) {
      this.setState({ error: resp.error });
      return;
    }
    signup(user).then((data) => {
      if (data.error) this.setState({ error: data.error });
      else {
        signin(user).then((data) => {
          if (data.error) this.setState({ error: data.error });
          else {
            authenticate(data, () => {
              setTimeout(this.redirectToDashboard(), 1000);
            });
          }
        });
      }
    });
  };

  redirectToDashboard = () => {
    this.setState({ redirectToDashboard: true });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: "" });
  };

  render() {
    const { error, redirectToDashboard } = this.state;

    if (redirectToDashboard) {
      return <Navigate to="/candidates" />;
    }

    return (
      <div className="login_page">
        <h3 className="deskala_assignment_title">Deskala - Assignment</h3>
        <div className="shadow bg-white rounded login_box ">
          <h4>Sign up</h4>
          <div className="login_box_div">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={this.registerSubmit}>
              <div className="form-group">
                <Input
                  label="Enter email"
                  placeholder="enter your email"
                  type="email"
                  handleChange={this.handleChange}
                  name="email"
                />
              </div>
              <div className="form-group">
                <Input
                  label="Phone Number"
                  placeholder="enter your phone number"
                  type="number"
                  handleChange={this.handleChange}
                  name="phone"
                />
              </div>
              <div className="form-group">
                <Input
                  label="Password"
                  placeholder="set your password"
                  type="password"
                  handleChange={this.handleChange}
                  name="password"
                />
                <p className="input_sub_text">Minimum 8 Alpha numeric</p>
              </div>

              <div className="text-center">
                <button type="submit" className="deskala_blue_btn">
                  Sign Up
                </button>
              </div>
            </form>
            <a className="deskala_link" href="/">
              Existing User? Login Here
            </a>
          </div>
        </div>
      </div>
    );
  }
}
