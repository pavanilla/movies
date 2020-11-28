import React,{useState,useEffect} from 'react';
import Movies from './components/Movies';
import WatchList from './components/WatchList';


import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import {GlobalProvider}from './context/GlobalState';



const Api_key="7864caf512f67e582255f9bfde64a6fe";
const search_api=`https://api.themoviedb.org/3/search/movie?&api_key=${Api_key}&query=`;

const Featured_api=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${Api_key}&page=1`




function App() {

  const [movies,setMovies]=useState([]);
  const [search,setSearch]=useState('');

  useEffect(()=>{
    fetch(Featured_api)
    .then((res) => res.json())
    .then((data)=>{
      console.log(data)
      setMovies(data.results)
    })},[]);

  const handlevent=(e)=>{
    setSearch(e.target.value);
  }

  const handleonsubmit=(e)=>{
    e.preventDefault();
       if(search)
       {
         fetch(search_api + search)
         .then((res) => res.json())
         .then((data)=>{
         console.log(data)
        setMovies(data.results);
      });
      setSearch('');
    }
};




    return (
    <> 
    <GlobalProvider>
        <Router>
            <header>
              <Switch>
                <Route exact path="/WatchList" component={WatchList}></Route>
              </Switch>
              <li className="li-style">
                <Link to="/watchList">WatchList</Link>
              </li>
              <form onSubmit={handleonsubmit}>
                  <input className="search"
                  type="search"
                  value={search} 
                  onChange={handlevent}
                  placeholder="search here ..."/>
              </form>
              
            </header>
         </Router>
         
        <div className="movie-container">
            {movies.length > 0 && movies.map((data)=>
              <Movies key={data.id} movie={data} />
            )}
        </div>
     </GlobalProvider>
    </>  
  );
}

export default App;
