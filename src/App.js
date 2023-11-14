import logo from './logo.svg';
import './App.scss';

import Nav from './views/Nav';



const App = () => {

  const handleClick = () => {
    console.log('handleClick');
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={() => handleClick()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
