import React, { Component } from "react";
class DropDown extends Component {
  render() {
    let { label, Name, list,value,onChoose } = this.props;
    if(! list && value ) return null;

    return (
      <div className="form-group">
        <label htmlFor={Name}>{label}</label>
        <select  value={value.Name} onChange ={onChoose} className="form-control" id="exampleFormControlSelect1">
          {list.map((op) => (
            <option key={op.Name}>{op.Name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default DropDown;
