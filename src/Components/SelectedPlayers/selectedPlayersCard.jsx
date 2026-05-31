import React from 'react';
import deleteImg from '../../assets/Frame.png'

const selectedPlayersCard = ({players,removePlayer}) => {
    const handleRemove=()=>{
        removePlayer(players);
    }
    return (
        <div className="border-2 border-gray-300 p-3 flex justify-between items-center m-2">
                <div className='flex items-center'>
                    <img src={players.player_image} className='h-20 w-20 rounded-xl' alt='player photo'></img>
                    <div className='ml-2'>
                        <h1 className='font-bold m-2'>{players.player_name}</h1>
                        <p className='text-xs m-2'>{players.player_playing_role}</p>
                    </div>
                </div>
                <div>
                    <img onClick={handleRemove} src={deleteImg} alt="" />
                </div>
            </div>
    );
};

export default selectedPlayersCard;