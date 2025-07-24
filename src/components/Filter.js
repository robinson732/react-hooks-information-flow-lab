// src/components/Filter.jsx
import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <select name="filter" onChange={onCategoryChange}>
      <option value="All">All</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;
