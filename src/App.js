import './App.css';
import { Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard';
import Setting from './pages/Setting';
import SettingAccount from './pages/SettingAccount';
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar"; 
import DataStatistics from './pages/DataStatistics';
import useSensorMonitor from './hooks/useSensorMonitor';
import usePushNotification from './hooks/usePushNotification';

function App() {
  const { warningNotification } = usePushNotification();
  const { sensorData, loading } = useSensorMonitor(warningNotification); 

  if (loading) return <div>Loading...</div>;

  return ( 
    <div>
      <Navbar />
      <div className="layout-row">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashBoard sensorData={sensorData} />} />
            <Route path="/DashBaord" element={<DashBoard sensorData={sensorData} />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/SettingAccount" element={<SettingAccount />} />
            <Route path="/DataStatistics" element={<DataStatistics />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;







