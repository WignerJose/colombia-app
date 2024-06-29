import  Home  from './presentation/pages/Home';
import './App.css';
import ResponsiveAppBar from './presentation/components/AppBar';
import SimpleContainer from './presentation/components/MainContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="">
        <SimpleContainer>
          <ResponsiveAppBar/>
          <Routes>
             <Route path='/' element={<Home/>} ></Route>
             <Route path='/departments'></Route>
             <Route path='/tourist-places'></Route>
             <Route path='/others'></Route>
          </Routes>
        </SimpleContainer>
      </div>
    </Router>
  );
}

export default App;
