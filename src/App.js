import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Example from './components/Chart';
import ToolBar from './components/ToolBar';
import Details from './components/Details';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      < Navbar />
      <Content />
      <Example />
      <ToolBar/>
      <Details star = "1" view = "1292" published ="Aug28,2020" Updated = "Dec2,2022" />
      <Footer/>
    </div >
  );
}

export default App;
