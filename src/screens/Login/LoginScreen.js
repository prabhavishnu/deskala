import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Input from "../../components/input/input.component";
import { signin, authenticate } from "../../services/auth.service";
import "./LoginScreenStyles.css";

export default class LoginScreen extends Component {
  state = {
    user: "",
    redirectToDashboard: false,
    email: "",
    password: "",
  };

  signInUser = (user) => {
    signin(user).then((data) => {
      if (data.error) this.setState({ error: data.error });
      else {
        authenticate(data, () => {
          setTimeout(this.redirectToDashboard(), 1000);
        });
      }
    });
  };

  loginSubmit = (event) => {
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    event.preventDefault();
    this.signInUser(user);
  };

  redirectToDashboard = () => {
    this.setState({ redirectToDashboard: true });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
          <h4>Login</h4>
          <div className="login_box_div">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={this.loginSubmit}>
              <div className="form-group">
                <Input
                  label="Email ID"
                  placeholder="enter your email id"
                  type="email"
                  handleChange={this.handleChange}
                  name="email"
                />
              </div>
              <div className="form-group">
                <Input
                  label="Password"
                  placeholder="enter your password"
                  type="password"
                  handleChange={this.handleChange}
                  name="password"
                />
                <p className="input_sub_text">Minimum 8 Alpha numeric</p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="deskala_blue_btn"
                >
                  Login
                </button>
              </div>
            </form>
            <a className="deskala_link" href="/register">
              New User? Register Here
            </a>
          </div>
        </div>
      </div>
    );
  }
}
