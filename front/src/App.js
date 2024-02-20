import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import SignIn from './components/SignIn.js';
import Main from './components/Main.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/sign-in" Component={SignIn} />
          <Route exact path="/norang" Component={Main} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
