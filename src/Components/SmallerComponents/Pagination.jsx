import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Pagination extends Component {
  render() {
    const { itemsCount, pageSize } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);

    const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);
    if (pagesCount <= 1) return null;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li className="page-item" key={page}>
              <NavLink
                className="page-link"
                onClick={() => {
                  this.props.onPageChange(page);
                }}
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
