import logo from './logo.svg';
import './App.css';
import "./Variables.css";
import NavigationBar from './Navigation-Bar/NavigationBar'
import MenuBar from './Menu-Right/MenuBar'
// import LoginPage from './Login-Page/LoginPage';




function App() {
  return (
    <div className="App">
      <header className="Appheader">
        <NavigationBar />
        <div className='mainContainer'>
                      <div className='spacerContainer'>
                      </div>
                      <div className='contentContainer'>
                      <img src={logo} className="App-logo" alt="logo" />
                      <p>Edit <code>src/App.js</code> and save to reload.</p>
                      <a
                        className="Applink"
                        href="./Login-Page/LoginPage.js"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn React
                      </a>
                      </div>
                      <div className='bottomTitel'>
                        <h5>Finished ToDo's</h5>
                      </div>
                      <div className='bottomContent'>
                      </div>
        </div>
        <MenuBar />
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
