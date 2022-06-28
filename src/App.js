import './App.css';
import { Route, Routes } from 'react-router-dom';
import CardDetails from './components/CardDetails';
import Set from './components/Set';
import Home from './routes/Home';
import Search from './routes/Search';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/set/:id" element={<Set />} />
      </Routes>
    </div>
  );
}

export default App;
