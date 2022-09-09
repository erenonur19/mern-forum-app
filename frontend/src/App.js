import './App.css';
import {UserProvider} from './context/UserContext'
import Container from './components/Container'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import NoPage from './components/NoPage'
import HomepageLayout from './components/HomepageLayout'
import Profile from './components/Profile';
import Homepage from './components/Homepage'
import SinglePage from './components/SinglePage';
import Message from './components/Message';
function App() {


  
  return (

      <UserProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Container />} /> 
            
                  <Route path='/forum' element={<HomepageLayout />}>
                  <Route path='profile' element={<Profile/>}/>
                  <Route path='mesaj' element={<Message/>}></Route>
                  <Route path=':id' element={<SinglePage />}/>
                  <Route index element={<Homepage />} />
                  </Route>
            
            <Route path="*" element={<NoPage />} />
        
        </Route>
        </Routes>
        
        </BrowserRouter>
       
      </UserProvider>
      
  
  );
}

export default App;
