import './App.css';
import { Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard';
import Setting from './pages/Setting';
import SettingAccount from './pages/SettingAccount';
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar"; 
import DataStatistics from './pages/DataStatistics';
import usePushNotification from './hooks/usePushNotification';
import { useState, useEffect, useCallback, useMemo } from 'react';

function App() {
  const { warningNotification } = usePushNotification();

  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);

  const sensors = useMemo(() => [
    { key: 'temperature', label: '온도', unit: '°C', url: '', threshold: ''},
    { key: 'humidity', label: '습도', unit: '%', url: '', threshold: '' },
    { key: 'co2', label: '이산화탄소 농도', unit: 'ppm', url: '', threshold: '' },
    { key: 'light', label: '조도', unit: 'Lux', url: '', threshold: '' },
  ], []);

  const fetchAllSensorData = useCallback(async () => {
    try {
      const results = await Promise.all(
        sensors.map(async (sensor) => {
          const response = await fetch(sensor.url);
          const data = await response.json();
          const value = data.value;

          if (value > sensor.threshold) {
            warningNotification(`${sensor.label} 임계치 초과`, {
              body: `현재 ${sensor.label}는 ${value}${sensor.unit}입니다.`,
            });
          }

          return { [sensor.key]: value };
        })
      );
      const mergedData = Object.assign({}, ...results);
      setSensorData(mergedData);
      setLoading(false);
    } catch (error) {
      console.error('데이터 로드 실패:', error);
      setLoading(false);
    }
  }, [sensors, warningNotification]);

  useEffect(() => {
    fetchAllSensorData();
    const interval = setInterval(fetchAllSensorData, 5000); // 몇초마다 데이터 호출할지 숫자 변경 필요 
    return () => clearInterval(interval);
  }, [fetchAllSensorData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return ( 
    <div>
      <Navbar />
      <div className="layout-row">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
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








/*import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard';
import Setting from './pages/Setting';
import SettingAccount from './pages/SettingAccount';
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import DataStatistics from './pages/DataStatistics';
import usePushNotification from './component/usePushNotification';  
import { useState, useEffect } from 'react';

function App() {
  const location = useLocation();
  const showSettingbar = location.pathname.startsWith("/Setting") || location.pathname === "/SettingAccount";
  const { warningNotification } = usePushNotification();

  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);

  const threshold = 100;// 임계치 변경

  const fetchSensorData = async () => {
    try {
      const response = await fetch('');//api url 
      const data = await response.json();
      setSensorData(data);
      setLoading(false);

      if(data.value > threshold) {
        warningNotification('온도 임계치 도달', {
          body: `현재 온도는 ${data.value}도 입니다.`,
        });
      }
    } catch (error) {
      console.error('데이터 로드 실패:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensorData();
    const interval = setInterval(fetchSensorData, 5000);//5초마다 센서 데이터 로드 숫자변경가능
    return () => clearInterval(interval); 
  }, []);

  if(loading) {
    return <div>Loading...</div>;
  }
  
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

export default App;*/

