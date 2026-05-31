import NavBar from './Components/navBar/navBar';
import AvailablePlayers from './Components/Available Players/availablePlayers';
import SelectedPlayers from './Components/SelectedPlayers/selectedPlayers';
import { Suspense, useState } from 'react';

const fetchPalyers=async()=>{
  const res=await fetch("/players.json");
  return  res.json();
}
 const playersPromise=fetchPalyers();


function App() {
  const[toggle,setToggle]=useState(true);
  const[balance,setBalance]=useState(100);
  const[selectedPlayers,setSelectedPlayers]=useState([]);
  return (
    <>
    <NavBar balance={balance}></NavBar>
    <div className="flex max-w-300 mx-auto justify-between items-center">
    <h1 className="font-bold">{toggle===true?"Avaialble Players":"Selected Players"}</h1>
    <div className="flex">
      <button onClick={()=>setToggle(true)} className={`btn py-3 px-4 border-1-grey-100 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""}`}
        >Avaialble</button>
      <button onClick={()=>setToggle(false)} className={`btn py-3 px-4 border-1-grey-100 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]":""}`}
        >Selected ({selectedPlayers.length})</button>
    </div>
    </div>
    {
      toggle===true?<Suspense fallback={<span className='loading loading-spinner loading-xl'></span>}>
      <AvailablePlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setBalance={setBalance} balance={balance} playersPromise={playersPromise}></AvailablePlayers>
    </Suspense >:<SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>
    }
    </>
  );
}

export default App;