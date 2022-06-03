import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/adduser' element={<AddUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
