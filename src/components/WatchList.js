import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


const WatchList = ()=>{
  const {watchlist}=useContext(GlobalContext);
  return (
      <div>
        {
          watchlist.map((movie)=>(
            <p>{movie.title}</p>
            
          ))}
          
      </div>
  )
}


export default WatchList;


