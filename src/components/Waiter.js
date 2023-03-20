import React, { useState } from 'react';
import '../styles/Waiter.css';

function Waiter({ onOrderSubmit }) {
  const [tableNumber, setTableNumber] = useState('');
  const [dishName, setDishName] = useState('');
  const [dishQuantity, setDishQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onOrderSubmit(tableNumber, dishName, dishQuantity);
    setTableNumber('');
    setDishName('');
    setDishQuantity('');
  };

  return (
    <div className="Waiter">
      <h2>New Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="Waiter-input">
          <label htmlFor="tableNumber">Table Number:</label>
          <input
            type="number"
            id="tableNumber"
            value={tableNumber}
            onChange={(event) => setTableNumber(event.target.value)}
            required
          />
        </div>
        <div className="Waiter-input">
          <label htmlFor="dishName">Dish Name:</label>
          <input
            type="text"
            id="dishName"
            value={dishName}
            onChange={(event) => setDishName(event.target.value)}
            required
          />
        </div>
        <div className="Waiter-input">
          <label htmlFor="dishQuantity">Dish Quantity:</label>
          <input
            type="number"
            id="dishQuantity"
            value={dishQuantity}
            onChange={(event) => setDishQuantity(event.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Waiter;
