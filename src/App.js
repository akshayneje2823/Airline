import Navigation from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login';
import AddRecord from './components/AddRecord';
import Home from './components/Home'
import UpdateAirlineRecord from './components/UpdateAirlineRecord';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gapi } from 'gapi-script'
import { storeAirlineData, userLogin } from './redux/AirlineSlice';
import axios from 'axios'

// google login 
const clientId = "340050983213-gtp9vgb4nai054uknt7ne9e1s8822gf2.apps.googleusercontent.com";


function App() {

  const tableData = useSelector(state => state.Airline.tableData).filter(newData => {
    return newData.id
  });

  const isLogin = useSelector(state => state.Airline.isLogin)

  const dispatch = useDispatch()
  const [selectedAirLine, setSelectedAirLine] = useState({});

// store data in redux store
  let getAirlineData = async() => {
    const res = await axios.get('https://api.instantwebtools.net/v1/airlines');
    console.log(res.data);
    dispatch(storeAirlineData(res.data))
  }

  useEffect(()=>{

  })

  // checking user login
  useEffect(() => {
    getAirlineData();

    function start() {
      gapi.client.init({
        clientId: clientId
      })
    }
    gapi.load('client:auth2', start);

    if (localStorage.getItem('user')) {
      dispatch(userLogin(true))
    };


  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/login" element={isLogin ? <Home /> : <Login />} />
        <Route path="/" element={isLogin ? <Home tableData={tableData} setSelectedAirLine={setSelectedAirLine} /> : <Login />} />
        <Route path="/add" element={<AddRecord />} />
        <Route path="/update-record" element={<UpdateAirlineRecord selectedAirLine={selectedAirLine} setSelectedAirLine={setSelectedAirLine} />} />
      </Routes>
    </>
  );
}

export default App;
