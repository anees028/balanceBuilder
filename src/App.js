import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div >
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
