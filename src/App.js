import logo from './logo.svg';
import './App.scss';

import Nav from './views/Nav';

import { useState } from 'react';

const App = () => {
  let [state, setState] = useState({
    name: 'Hoang Minh',
    age: 28
  })//Destructuring Assignment

  const handleClick = () => {
    console.log('handleClick', state);
    setState(state.name);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name is {state.name}</p>
        <input
          type="text" value={state.name} name='name'
          onChange={(e) => handleInputChange(e)}
        />
        <button type="button" onClick={() => handleClick()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
