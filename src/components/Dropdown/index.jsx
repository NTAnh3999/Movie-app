import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ listItem }) => {
  return (
    <div className="dropdown">
      <ul className="dropdown__list">
        {listItem.map((itemName) => (
          <li className="dropdown__item">
            <Link className="dropdown__link" to={`/${itemName}`}>
              {itemName[0].toUpperCase() + itemName.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
