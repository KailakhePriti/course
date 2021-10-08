
import './App.css';
import Nbar from './components/Nbar';
import Borderbox from './components/Borderbox';
import Subnav from './components/Subnav';
import Imagecontent from './components/Imagecontent';

function App() {
  return (
    <div className="App">
      <Nbar/>
      <Subnav/>
      <Borderbox/>
      <Imagecontent/>
    </div>
  );
}

export default App;
