import './App.css';
import { Route, Routes } from 'react-router-dom'
import ShipList from './pages/Shiplist/ShipList';
import ShipDetails from './pages/ShipDetails/ShipDetails';

function App() {
  return (
    <>
      <nav>Star Wars Starships</nav>
      <Routes>
        <Route path='/' element={<ShipList />} />
        <Route path='/ship' element={<ShipDetails />} />
      </Routes>
    </>
  );
}

export default App;
