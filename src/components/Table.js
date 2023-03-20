import React from 'react';
import TableItem from './TableItem';
import '../styles/Table.css';

function Table({ tables, orders, onTableClick }) {
  return (
    <div className="Table">
      <h2>Tables</h2>
      <ul className="Table-list">
        {tables.map((table) => (
          <TableItem
            key={table.id}
            table={table}
            order={orders.find((o) => o.tableId === table.id)}
            onClick={onTableClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default Table;
