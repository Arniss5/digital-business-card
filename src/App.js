import './style.css';
import {Info} from './Info'
import {About} from './About'
import {Interests} from './Interests'
import {Footer} from './Footer'

function App() {
  return (
    <div className="App">
      <Info />
      <div className='container'>
        <About />
        <Interests />
      </div>  
      <Footer />
    </div>
  );
}

export default App;
