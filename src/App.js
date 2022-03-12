import './App.css';
import Cities from './Cities';
import CitiesRus from './CitiesRus';

function App() {
  return (
    <div>
<h1>Крупнейшие города мира, которые стоит посетить:</h1>
<Cities />
<h2 className = 'cities'>Крупнейшие города России</h2>
<CitiesRus />
    </div>
  );
}

export default App;
