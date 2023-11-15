import logo from './logo.svg';
import './App.scss';

import Nav from './views/Nav';
import Todo from './views/Todo';

import { useState } from 'react';

const App = () => {
  let [state, setState] = useState({
    name: 'Hoang Minh',
    age: 28
  })//Destructuring Assignment

  let [todos, setTodos] = useState([
    { id: 1, title: 'Front-end', status: true },
    { id: 2, title: 'Reactjs', status: false },
    { id: 3, title: 'Vuejs', status: false }
  ]);

  const handleClick = () => {
    // console.log('handleClick', state.name);
    let data = {
      id: Math.floor(Math.random() * 1000),
      title: state.name,
      status: true
    }
    setTodos([
      ...todos,
      data
    ])

    setState({
      name: '',
      age: 28
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  }

  const handleDeleteTodo = (todo) => {
    // console.log('handleDeleteTodo', todo);
    todos = todos.filter(item => item.id !== todo.id);
    setTodos(todos)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Todo
          handleDeleteTodo={handleDeleteTodo}//pass props function to component child
          todos={todos}//pass props data
        />

        <Todo todos={todos.filter(item => item.status === true)} />

        <input
          type="text" value={state.name} name='name'
          onChange={(e) => handleInputChange(e)}
        />
        <button type="button" onClick={() => handleClick()}>Add todo</button>
      </header>
    </div>
  );
}

export default App;
