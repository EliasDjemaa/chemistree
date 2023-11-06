import { Routes, Route } from "react-router-dom";
import { Home } from './components/pages/Home'
import { Solutions } from './components/pages/Solutions'
import { RequestAccess } from './components/pages/RequestAccess'
import { Login } from './components/pages/Login'
import Navigation from "./components/Navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/Solutions" element={ <Solutions />} />
      <Route path="/RequestAccess" element={ <RequestAccess />} />
      <Route path="/Login" element={ <Login />} />
    </Routes>


  );
}

export default App;
