import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [foods, setFoods] = useState(items)
  function handleFilterChange(event) {
    setSelectedCategory(event.target.value)
  }

  let foodsToDisplay = foods.filter((food) => {
    if (selectedCategory === 'All') {
      return true
    }
    else {
      return food.category === selectedCategory
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((food) => (
          <Item key={food.id} name={food.name} category={food.category} />

        ))}

      </ul>
    </div>
  );
}

export default ShoppingList;
