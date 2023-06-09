import Plant from "./Plant";

const Plants = ({plants}) => {
  
    if (!plants) {
      return <div>Nincsenek megjeleníthető növények...</div>
    }
  
    return (
      <div className="rounded p-3 m-4 shadow-md bg-slate-100 text-center">
        <h1 className="text-xl mb-4">Növények</h1>

        <div className="flex flex-row flex-wrap justify-center">
        { plants.map((plant) => (
          <Plant plant={plant}/>
        ))
        }
        </div>
        
      </div>
    )
  }

  export default Plants