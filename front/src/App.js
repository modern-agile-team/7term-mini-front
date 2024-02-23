import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import Login from './components/HomePage/Login.js';
import SignIn from './components/HomePage/SignIn.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/sign-in" Component={SignIn} />
          <Route path="/NORANG" element={<Main page="postList" />} />
          <Route path="/new-post" element={<Main page="newPost" />} />
          <Route path="/detail-post" element={<Main page="detailPost" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
