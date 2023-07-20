import React, { useState } from "react";

function Item({ name, category }) {
  const [virtualCart, setVirtualCart] = useState(false)
  let listClass = virtualCart ? 'in-cart' : ''
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button type="button" onClick={() => setVirtualCart(!virtualCart)} className="add">{virtualCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
