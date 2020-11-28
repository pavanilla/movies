import React,{useContext} from 'react';
import {GlobalContext, GlobalProvider} from '../context/GlobalState';




const IMG_API="http://image.tmdb.org/t/p/w1280";

const Movies =({movie}) =>{

    const {addMovieToWatchlist,watchlist}=useContext(GlobalContext);

    let storedmovie=watchlist.find(o=>o.id===movie.id);

    const watchlistdisabled=storedmovie?true:false;


    return (
        <div className="movie">
            <img src={IMG_API+movie.poster_path} alt="title"/>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              Rating:<span>{movie.vote_average}</span>
            </div>
            <div className="movie-overview">
              <h3>overView:</h3>
              <p>{movie.overview}</p>
              <div className="watchlist">
                <button onClick={()=>addMovieToWatchlist(movie)} disabled={watchlistdisabled}> Add to watchList</button>
              </div>
            </div>

        </div>
    );

}


export default Movies;

