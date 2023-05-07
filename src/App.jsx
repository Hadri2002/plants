import { useState, useEffect } from 'react';
import Plants from './comps/Plants';

function App() {
  
  const [data, setData] = useState([]);

  const fetchJson = () => {
    fetch('./db.json')
    .then(resp => {
      return resp.json();
    }).then(jsondata => {
      setData(jsondata.plants);
    }).catch((err) => console.log(err.message));
  }
  useEffect(() => {
    fetchJson();
  },[])

  return (
    <>
      <h1 className='text-2xl text-center mt-4'>Frontend keretrendszerek</h1>
      <h2 className='text-xl text-center mt-4'>Horváth Adrienn - ADC1BV</h2>

      <Plants plants={data} />
      
    </>
  )
}

export default App
