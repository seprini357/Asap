import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard';
import Setting from './pages/Setting';
import SettingAccount from './pages/SettingAccount';
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import DataStatistics from './pages/DataStatistics';
function App() {
  const location = useLocation();
  const showSettingbar = location.pathname.startsWith("/Setting") || location.pathname === "/SettingAccount";

  return (
    <div>
      <Navbar />
      <div className="layout-row">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashBoard />} /> 
            <Route path="/Setting" element={<Setting/>}/>
            <Route path="/SettingAccount" element={<SettingAccount/>}/>
            <Route path="/DataStatistics" element={<DataStatistics/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

