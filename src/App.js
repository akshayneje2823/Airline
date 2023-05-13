import Navigation from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import AddAirline from './components/AddAirline';
import AirlineList from './components/AirlineList'
import Login from './components/Auth/Login';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/add" element={<AddAirline />} />
        <Route path="/all-users" element={<AirlineList />} />
      </Routes>
      <Login/>
    </div>
  );
}

export default App;
