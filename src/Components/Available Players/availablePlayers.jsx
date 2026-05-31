import React, { use } from 'react';
import PlayerCard from '../Playercard/playerCard'; 

const AvailablePlayers = ({ playersPromise,setBalance,balance,selectedPlayers,setSelectedPlayers,isSelected,setIsSelected }) => {
    const playerData = use(playersPromise);
    
    return (
        <div className='max-w-300 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
            {
                playerData.map(player => (
                    <PlayerCard key={player.player_name}
                     setBalance={setBalance} balance={balance} player={player} 
                     selectedPlayers={selectedPlayers} 
                     setSelectedPlayers={setSelectedPlayers} />
                ))
            }
        </div>
    );
};

export default AvailablePlayers;