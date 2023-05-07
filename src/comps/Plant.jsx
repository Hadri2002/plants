import { useState } from 'react';

const Plant = ({plant}) => {

    const [checked, setChecked] = useState(false); 
    const handleChange = () => { 
      console.log("change");
      setChecked(!checked); 
    }; 

    return(
    <div key={plant.id} className="text-lg p-3 flex flex-col justify-center items-center">
            <p className="w-32">{plant.title}</p>

            <div className="mt-2">
                <input type="checkbox" value="" id="checkboxDefault" onChange={handleChange}/>
                <label className="inline-block pl-2 hover:cursor-pointer"> Szürkeárnyalatos </label>
                <div className={checked ? 'grayscale' : 'grayscale-0'}>
                <img className="h-56 w-56 rounded-lg"src={plant.pic}></img>
            </div>

          </div>
          </div>)

}

export default Plant