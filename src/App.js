import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
// import Example from './components/Chart';
import MyChart from './components/Chart';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div >
      < Navbar />
      <Content />
      <h1 className="mb-4 p-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400">
          Review Vs
        </span> Hotel Resp.
      </h1>
      <div className="flex flex-nowrap">
        <MyChart />
        <SideBar />
      </div>
    </div >
  );
}

export default App;
