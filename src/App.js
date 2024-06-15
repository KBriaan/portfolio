import { BrowserRouter , Routes, Route, } from 'react-router-dom';
import Home from './pages/Home'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { hideloading, setPortfolioData, showloading } from './redux/rootSlice';

function App() {
  const {loading, portfolioData} =useSelector(state => state.root);
  // const [showLoading, setShowLoading]=useState(false);
  
  const dispatch =useDispatch()

const getPortfolioData = async () =>{
  try {
    dispatch(showloading(true));
    const response = await axios.get('/api/portfolio/get-portfolio-data');

    dispatch(setPortfolioData(response.data));
     dispatch(hideloading(true));
  } catch (error) {
    console.log(error)
  }
}



  useEffect(()=>{
    getPortfolioData()
  },[]);

  useEffect(()=>{
  },[]);


  return (
<BrowserRouter>
{loading ? <Loader/>:null}
<Routes>
  <Route path= "/" element ={<Home />} />
</Routes>
 </BrowserRouter>
  );
}

export default App;
