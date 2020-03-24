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

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

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
          <li key={todo.id}>{todo.text}
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppComponent;
