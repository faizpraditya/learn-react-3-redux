import logo from './logo.svg';
import './App.css';
import FirstCounter from './component/FirstCounter';
import SecondCounter from './component/SecondCounter';
import { connect } from 'react-redux';
import Menu from './todo/Todo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FirstCounter/><br/>
      <SecondCounter/> */}
      <Menu/>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        // nama atribut bebas, bisa sama
        number : state.globalNumber
    }
}

export default connect(mapStateToProps)(App);
