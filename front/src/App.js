import Header from './components/Header.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
