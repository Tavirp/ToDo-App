import logo from './logo.svg';
import './App.css';
import "./Variables.css";
import NavigationBar from './Navigation-Bar/NavigationBar'
// import Login from './Login-Page/login'


function App() {
  return (
    <div className="App">
      <header className="Appheader">
        <NavigationBar />
        <div className='npmstuff'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Applink"
          href="./Login-Page/login.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
