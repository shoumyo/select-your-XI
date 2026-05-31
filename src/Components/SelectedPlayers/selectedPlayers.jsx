import React from 'react';
import SelectedPlayersCard from './selectedPlayersCard';

const selectedPlayers = ({selectedPlayers,setSelectedPlayers,removePlayer}) => {
    return (
        <div className="max-w-300 mx-auto">
            {
                selectedPlayers.map(players=>(
                    <SelectedPlayersCard  key={players.player_name} players={players}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    removePlayer={removePlayer} 
                    ></SelectedPlayersCard>
                ))
            }
        </div>
    );
};

export default selectedPlayers;