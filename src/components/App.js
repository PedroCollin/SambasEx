import React, { useState } from 'react';
import Header from './Header';
import Table from './Table';
import Waiter from './Waiter';
import menuData from '../data/menu.json';
import '../styles/App.css';

function App() {
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1', isOccupied: false },
    { id: 2, name: 'Table 2', isOccupied: false },
    { id: 3, name: 'Table 3', isOccupied: false },
    { id: 4, name: 'Table 4', isOccupied: false },
    { id: 5, name: 'Table 5', isOccupied: false }, // Adiciona a vírgula aqui
  ]);
  const [orders, setOrders] = useState([]);
  const [waiterName, setWaiterName] = useState('');

  const handleTableClick = (table) => {
    const tableIndex = tables.findIndex((t) => t.id === table.id);
    const updatedTables = [...tables];
    updatedTables[tableIndex] = {
      ...table,
      isOccupied: !table.isOccupied,
    };
    setTables(updatedTables);
  };

  const handleOrder = (order) => {
    setOrders([...orders, order]);
  };

  const handleClearOrders = () => {
    setOrders([]);
    setTables(
      tables.map((table) => ({
        ...table,
        isOccupied: false
      }))
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Table
          tables={tables}
          orders={orders}
          onTableClick={handleTableClick}
        />
        <Waiter
          menuData={menuData}
          orders={orders}
          onOrder={handleOrder}
          onClearOrders={handleClearOrders}
          onWaiterNameChange={setWaiterName}
          waiterName={waiterName}
        />
      </div>
    </div>
  );
}

export default App;
