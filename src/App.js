import './App.css';
import { Route, Routes } from 'react-router-dom';
import CardDetails from './components/CardDetails';
import Set from './components/Set';
import Home from './routes/Home';
import Search from './routes/Search';
import Navbar from './components/Navbar';
import AllSets from './components/AllSets';
import Collection from './routes/Collection';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:pokemon" element={<Search />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/set/" element={<AllSets />} />
        <Route path="/set/:id" element={<Set />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
