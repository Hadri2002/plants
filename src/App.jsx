import { useState, useEffect } from 'react';
import Plants from './comps/Plants';

function App() {
  
  const [data, setData] = useState([]);

  /*const objAdd = (obj => {
    obj.id = crypto.randomUUID();
    console.log(data)
    const newArray = [...data, obj];
    console.log("newarray:", newArray)
    setData(newArray);
  })*/

  const fetchJson = () => {
    fetch('./db.json')
    .then(resp => {
      return resp.json();
    }).then(jsondata => {
      setData(jsondata.plants);
      console.log(data);
    }).catch((err) => console.log(err.message));
  }
  useEffect(() => {
    fetchJson();
  },[])

  return (
    <>
      <h1 className='text-2xl text-center mt-4'>Frontend keretrendszerek</h1>
      <h2 className='text-xl text-center mt-4'>Horváth Adrienn</h2>

      <Plants plants={data} />
      
    </>
  )
}

export default App
