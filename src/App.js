import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

//views
import ContactApps from './views/ContactApps';
import DetailContact from './views/DetailContact';
import CategoryContact from './views/CategoryContact';
import NotFound from './views/NotFound';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ContactApps/>}></Route>
        <Route path='/category/:category' element={<CategoryContact/>}></Route>
        <Route path='/detail/:id' element={<DetailContact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
