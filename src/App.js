import logo from './logo.svg';
import './App.css';

import Title from './components/Title'
import Salameche from './pages/Salameche';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Title/>
        <Salameche/>
      </header>
    </div>
  );
}

export default App;
