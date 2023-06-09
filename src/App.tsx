import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootPage from './routes/Root';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
