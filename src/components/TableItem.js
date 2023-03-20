import React from 'react';
import '../styles/TableItem.css';

function TableItem({ table, order, onClick }) {
  const handleClick = () => {
    onClick(table);
  };

  const isTableAvailable = !order || order.status === 'finished';

  return (
    <li className={`TableItem ${isTableAvailable ? 'available' : 'unavailable'}`} onClick={handleClick}>
      <h3>
        Table
        {table.number}
      </h3>
      {isTableAvailable ? (
        <p>Available</p>
      ) : (
        <p>
          {order.dishes.length}
          {' '}
          {order.dishes.length === 1 ? 'dish' : 'dishes'}
        </p>
      )}
    </li>
  );
}

export default TableItem;
