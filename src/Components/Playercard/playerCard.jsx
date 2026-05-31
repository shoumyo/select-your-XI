import userImg from '../../assets/user1.png';
import flagImg from '../../assets/report1.png';
import { useState } from 'react';

const PlayerCard = ({ player,setBalance,balance,selectedPlayers,setSelectedPlayers }) => {

    const[isSelected,setIsSelected]=useState(false);

    const handleClick=()=>{
        if(balance>player.price){
                if(isSelected){
                      const newBalnce=balance+player.price;
                        setBalance(newBalnce);
                        setSelectedPlayers(
                            selectedPlayers.filter(p => p.player_name !== player.player_name));
                            setIsSelected(false);
                    }
                else{
                    const newBalnce=balance-player.price;
                    setBalance(newBalnce);
                    setSelectedPlayers([...selectedPlayers,player]);
                    setIsSelected(true);
                }
            }
        else{
            alert("Not enough coins");
        }
    }

    return (
        <div className="card bg-base-100 shadow-sm p-4 border border-gray-100"> 
            <figure className="flex justify-center">
                <img 
                    className="h-40 w-40 rounded-xl" 
                    src={player.player_image}
                    alt={player.player_name} 
                />
            </figure>
            
            <div className="mt-4">
                <div className="flex items-center">
                    <img className="w-5 h-5" src={userImg} alt="User icon" />
                    <h2 className="card-title text-lg font-bold ml-2">{player.player_name}</h2>
                </div>
                
                <div className="flex justify-between items-center mt-4 border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <img className="w-4 h-4" src={flagImg} alt="Country icon" />
                        <span>{player.player_country}</span>
                    </div>
                    <span className="badge badge-secondary py-3 px-3 text-xs font-semibold">{player.player_playing_role}</span>
                </div>
                
                {/* Rating Section */}
                <div className="flex justify-between font-bold text-sm mt-3">
                    <span className="text-gray-500">Rating</span>
                    <span className="text-amber-500">⭐ {player.player_rating}</span>
                </div>
                
                {/* Style Section */}
                <div className="flex justify-between text-sm mt-2 font-medium">
                    <span className="text-gray-700">{player.batting_style}</span>
                    <span className="text-gray-400 font-normal">{player.bowling_style}</span>
                </div>
                
                {/* Action Section */}
                <div className="flex mt-4 justify-between items-center pt-2">
                    <p className="font-bold text-md text-neutral-800">Price: ${player.price} M</p>
                    <button onClick={()=>
                        {
                         handleClick();   
                        }
                    } className={`btn btn-sm ${isSelected===true?"":"btn-outline"} btn-primary`}>{isSelected===true?"Selected":"Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;