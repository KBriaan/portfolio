import { BrowserRouter , Routes, Route, } from 'react-router-dom';
import Home from './pages/Home'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { ReloadData, hideloading, setPortfolioData, showloading } from './redux/rootSlice';
import Admin from './pages/admin/Admin';

function App() {
  const {loading, portfolioData, reloadData} =useSelector(state => state.root);
  // const [showLoading, setShowLoading]=useState(false);
  
  const dispatch =useDispatch()

const getPortfolioData = async () =>{
  try {
    dispatch(showloading());
    const response = await axios.get('/api/portfolio/get-portfolio-data');

    dispatch(setPortfolioData(response.data));

    dispatch(ReloadData(false))
     dispatch(hideloading());
  } catch (error) {
    console.log(error)
  }
};


useEffect(() => {
  if (!portfolioData) {
    getPortfolioData();
  }
}, [portfolioData]);

useEffect(() => {
  if (reloadData) {
    getPortfolioData();
  }
},[reloadData])

  return (
<BrowserRouter>
{loading ? <Loader/>:null}
<Routes>
  <Route path= "/" element ={<Home />} />
  <Route path= "/admin" element ={<Admin />} />

</Routes>
 </BrowserRouter>
  );
}

export default App;
