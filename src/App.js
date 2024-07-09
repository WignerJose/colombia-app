import  Home  from './presentation/pages/Home/Home';
import './App.css';
import ResponsiveAppBar from './presentation/components/AppBar';
import SimpleContainer from './presentation/components/MainContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './presentation/context/AppContext';
import Department from './presentation/pages/Departments/Department';
import { DepartmentProvider } from './presentation/context/DepartmentContext';

function App() {
  return (
    <AppProvider>
      <DepartmentProvider>
        <Router>
          <div className="">
            <SimpleContainer>
              <ResponsiveAppBar/>
              <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/departments' element={<Department/>} ></Route>
                <Route path='/tourist-places'></Route>
                <Route path='/others'></Route>
              </Routes>
            </SimpleContainer>
          </div>
        </Router>
      </DepartmentProvider>
    </AppProvider>
  );
}

export default App;
