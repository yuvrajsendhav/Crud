//import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Registration from './Registration';
import GetRegistered from './GetRegistered';
import EditRegistration from './EditRegistration';
import Deleteregistered from './Deleteregistered';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Registration/>}/> 
      <Route path="registration" element={<Registration/>}/>
      <Route path="getRegistered" element={<GetRegistered/>}/>
      <Route path="editRegistration" element={<EditRegistration/>}/>
      <Route path="deleteregistered" element={<Deleteregistered/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
