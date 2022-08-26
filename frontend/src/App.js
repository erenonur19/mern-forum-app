import './App.css';
import {UserProvider} from './context/UserContext'
import Container from './components/Container'

function App() {


  
  return (

      <UserProvider>
        <Container></Container>
      </UserProvider>
      
  
  );
}

export default App;
