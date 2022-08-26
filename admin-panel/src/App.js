import Navbar from "./component/navbar/Navbar";
import Sidebar from "./component/sidebar/Sidebar";
import './app.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar/>
        <div className="others">
          Other Pages
        </div>
      </div>
    </div>
  );
}

export default App;
