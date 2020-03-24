import React, { useState } from 'react';
import './App.css';

const AppComponent = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  
  const handleNewTodoChange = (e) =>{
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (newTodo === '') return;
    setTodos([...todos, {id: Date.now(), text: newTodo}]);
    e.target.reset();
  };
  console.log(todos);
  return (
    <div className="Todo-App">
      <h1>🤘 Todos! 🤘</h1>
      <form onSubmit={handleNewTodo}>
        <input 
          type="text" 
          placeholder="write todo here..."
          onChange={handleNewTodoChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppComponent;
