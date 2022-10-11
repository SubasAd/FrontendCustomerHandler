import React, { Component } from "react";
class FormElement extends Component {
  render() {
    const { Name, type, label, placeholder, onValueChange, value } = this.props;
    
    return (
      <span className="form-group">
        {label}
        <input
          onChange={onValueChange}
          type={type}
          className="form-control"
          id={Name}
          placeholder={placeholder}
          value={value}
        />
      </span>
    );
  }
}

export default FormElement;
