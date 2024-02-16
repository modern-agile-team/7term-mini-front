import Header from './components/Header.jsx';
import FirstPage from './components/FirstPage.jsx';
import EmptyPage from './components/EmptyPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="*" element={<EmptyPage />} />
          <Route path="register_page" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
