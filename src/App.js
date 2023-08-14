import './App.css';
import setting from './assets/icons/setting.svg'
import reports from './assets/icons/reports.svg'
import Button from '@mui/material/Button';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <img src={setting} alt='logo'/>
      <img src={reports} alt='logo'/>
      <div>
        <Button variant="contained">Hello World</Button>
      </div> */}
    </div>
  );
}

export default App;
