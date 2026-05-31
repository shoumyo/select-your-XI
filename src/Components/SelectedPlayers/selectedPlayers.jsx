import React from 'react';
import SelectedPlayersCard from './selectedPlayersCard';

const selectedPlayers = ({selectedPlayers,setSelectedPlayers}) => {
    return (
        <div className="max-w-300 mx-auto">
            {
                selectedPlayers.map(players=>(
                    <SelectedPlayersCard  key={players.player_name} players={players}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers} 
                    ></SelectedPlayersCard>
                ))
            }
        </div>
    );
};

export default selectedPlayers;