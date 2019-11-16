import React, { useState } from 'react';

function App() {
  const [list, setList] = useState([
    'toi gio di ia 1',
    'toi gio di ia',
  ]);
  const [todoItem, setTodoItem] = useState();


  const handleSubmit = (event) => {
    event.preventDefault();
    const tmp = [todoItem, ...list];
    setList(tmp);
    setTodoItem('');
  }

  const handleChange = (event) => {
    setTodoItem(event.target.value)
  }

  return (
    <div>
      <h1>TodoApp</h1>
      <p>Subtitle</p>

      <form onSubmit={handleSubmit}>
        <input placeholder="todo app ne" autoFocus value={todoItem} onChange={handleChange}/>
        <button>Add</button>
      </form>

      {list.map(function(item) {
        return <p style={{ color: 'red'}}>{item}</p>;
      })}

    </div>
  );
}

export default App;
