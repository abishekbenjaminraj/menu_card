import Header from './header.js'
import Menu from './menu.js'
import Footer from './footer.js'
import './App.css';
import State from './components/task/state.js';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Menu/>
      <br></br>
      <br></br>
      <br></br>
      <Footer/> */}
      <State/>
    </div>
  );
}

export default App;
