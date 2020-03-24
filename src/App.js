import React, { useState } from 'react';
import './App.css';

const AppComponent = () => {
  const [newTodo, setNewTodo] = useState('');
  
  function handleNewTodoChange(e) {
    e.preventDefault();
  }

  return (
    <div className="Todo-App">
      <h1>🤘 Todos! 🤘</h1>
      <form action="">
        <input 
          type="text" 
          placeholder="write todo here..."
          onChange={handleNewTodoChange}
        />
        <ul>
          <li>buy groceries</li>
          <li>get gas</li>
          <li>clean room</li>
        </ul>
      </form>
    </div>
  );
};

export default AppComponent;
