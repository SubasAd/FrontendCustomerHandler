import { NavLink } from "react-router-dom";
import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/AllCustomers"
                >
                  AllCustomers
                </NavLink>
              </li>
              <li className="nav-item"></li>
              <li>
                <NavLink className="nav-link " to="/storeCustomer">
                  Create Customer
                </NavLink>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.props.onSearch}
              value={this.props.Search}
            />
           
          </form>
        </div>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
