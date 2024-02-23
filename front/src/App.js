import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import Login from './components/HomePage/Login.js';
import SignIn from './components/HomePage/SignIn.js';
import Main from './components/Main/Main.js';
import NewPost from './components/Main/NewPost.js';
import PostView from './components/Main/PostView.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/sign-in" Component={SignIn} />
          <Route exact path="/norang" Component={Main} />
          <Route exact path="/new-post" Component={NewPost} />
          <Route exact path="/view-post" Component={PostView} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
