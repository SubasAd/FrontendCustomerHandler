import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { items, onFilter, selectedItem } = this.props;
    if(! items) return null;
    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.Name}
            onClick={() => {
              onFilter(item);
            }}
          >
            {item.Name}
           {item.Name.trim()!=="All Packages"  ?<button onClick={e=>window.location = "/package/"+item._id}/> : <></>}
          
            
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
