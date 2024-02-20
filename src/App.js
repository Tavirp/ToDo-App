
import styles from './App.module.css';
import "./Variables.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import InfoPage from './InfoPage';



function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/InfoPage' element={<InfoPage />} />
            </Routes>
        </BrowserRouter>

       </header>
       <body>

       </body>
    </div>
  );
}

export default App;
