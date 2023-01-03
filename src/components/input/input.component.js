import { Component } from "react";
import "./input.styles.css";

export default class Input extends Component {
  render() {
    const { label, placeholder, type, name, handleChange, defaultValue } =
      this.props;
    return (
      <div className="form-group mt-3">
        <label className="deskala_std_input_label">{label}</label>
        <input
          className="deskala_std_input form-control"
          placeholder={placeholder}
          type={type}
          required={true}
          onChange={handleChange}
          name={name}
          minLength={type === "password" ? 8 : 1}
          defaultValue={defaultValue}
          
        />
      </div>
    );
  }
}
