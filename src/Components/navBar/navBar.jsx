import React from 'react';
import navImg from '../../assets/logo.png';
import coinImg from '../../assets/coin.png';

const navBar = ({balance}) => {
    return (
        <div className="navbar max-w-300 mx-auto" >
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-15 h-15" src={navImg} alt=""></img>
          </a>
        </div>
        <div className="flex items-center">
          <span className='mr-1 font-bold'>{balance} M</span>
          <span className='mr-1'>Coin</span>
          <img  className="w-6 h-6 object-contain" src={coinImg} alt=""></img>
        </div>
      </div>
    );
};

export default navBar;