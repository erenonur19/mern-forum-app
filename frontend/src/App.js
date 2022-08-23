import './App.css';
import Login from './components/Login';
import logo from './img/logo.png'


function App() {

  return (
    <div>
      <div style={{position:'absolute', top:20,left:20}}>
        <img alt='logo' src={logo} style={{width:'120px'}}/>
      </div>
      <Login></Login>
      
      <div style={{position:'absolute', bottom:10,left:20}}>
        <div className='footer'>
        <ul className='footer-nav'>
          <a href='/'>Kullanıcı Anlaşması</a>
          <a href='/'>Gizlilik Politikası</a>
          <a href='/'>Topluluk Yönergeleri</a>
          <a href='/'>Çerez Politikası</a>
          <a href='/'>Telif Hakkı Politikası</a>
          <a href='/'>Geri Bildirim Gönder</a>
          <a href='/'>Dil
          <svg viewBox="0 0 20 14" width="15" height="10" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg"><path d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z" fill="currentColor"></path></svg> 
          </a>
          
        </ul>
        </div>
        
      </div>
    </div>
  );
}

export default App;
