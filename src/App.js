import './App.css';
import Search from './Components/search/search';
import CurrentWeather from './Components/current-weather/current-weather';
import DarkToggle from './darkToggle';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className='container'>
       <DarkToggle />
       <Search onSearchChange={handleOnSearchChange}/>
       <CurrentWeather/>
    </div>
 
  );
}

export default App;
