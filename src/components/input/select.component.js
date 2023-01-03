import { Component } from "react";
import "./input.styles.css";
import data from "./states.json";

export default class Select extends Component {
  render() {
    const { label, placeholder, type, handleChange, name } = this.props;
    return (
      <div className="form-group mt-3">
        <label className="deskala_std_input_label">{label}</label>
        <select
          className="deskala_std_input form-control"
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          name={name}
        >
          {data.states.map((state) => (
            <option value={state}>{state}</option>
          ))}
        </select>
      </div>
    );
  }
}
