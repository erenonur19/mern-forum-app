import './App.css';
import {UserProvider} from './context/UserContext'
import Container from './components/Container'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import HomepageContainer from './components/HomepageContainer';
import NoPage from './components/NoPage'

function App() {


  
  return (

      <UserProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Container />} /> 
            <Route path="homepage" element={<HomepageContainer />} /> 
            <Route path="*" element={<NoPage />} />
        
        </Route>
        </Routes>
        
        </BrowserRouter>
       
      </UserProvider>
      
  
  );
}

export default App;
