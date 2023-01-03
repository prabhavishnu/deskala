import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login/LoginScreen";
import CandidatesList from "./screens/CandidateList/CandidatesList";
import RegisterScreen from "./screens/Register/RegisterScreen";

export default class MainRouter extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route path="/candidates" element={<CandidatesList />} />
      </Routes>
    );
  }
}
