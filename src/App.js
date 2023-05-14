import Navigation from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import AddAirline from './components/AddAirline';
import AirlineList from './components/AirlineList'
import Login from './components/Auth/Login';
import EditAirline from './components/EditAirline';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const tableData = useSelector(state => state.Airline.tableData).filter(newData => {
    return newData.id 
});
  const [selectedAirLine, setSelectedAirLine]=useState({})
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/add" element={<AddAirline />} />
        <Route path="/all-users" element={<AirlineList tableData={tableData} setSelectedAirLine={setSelectedAirLine}/>} />
        <Route path="/update-record/:id" element={<EditAirline selectedAirLine={selectedAirLine} setSelectedAirLine={setSelectedAirLine}/>} />

      </Routes>
      {/* <Login/> */}
    </div>
  );
}

export default App;
