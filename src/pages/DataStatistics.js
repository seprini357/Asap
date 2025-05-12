import React, { useEffect, useState } from 'react'; 
import './DataStatistics.css';
import DataBox from '../component/DataBox';
import Graph from '../component/Graph';

function useBoxData(apiUrl) {
  const [data, setData] = useState([]);
  const [average, setAverage] = useState("-");
  const [highest, setHighest] = useState("-");
  const [lowest, setLowest] = useState("-");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        setData(json.data);

        if (json.data && json.data.length > 0) {
          const values = json.data.map((d) => d.y);
          setAverage((values.reduce((a, b) => a + b, 0) / values.length).toFixed(2));
          setHighest(Math.max(...values));
          setLowest(Math.min(...values));
        }
      } catch {
        setAverage("-");
        setHighest("-");
        setLowest("-");
      }
    };
    fetchData();
  }, [apiUrl]);

  return { data, average, highest, lowest };
}
//알맞은 api 주소 입력
const DataStatistics = () => {
  const temp = useBoxData("/api/temperature");
  const hum = useBoxData("/api/humidity");
  const co2 = useBoxData("/api/co2");
  const solar = useBoxData("/api/solar");

  return (
    <div className="dataStatistics">
      <div className="dataBoxGrid">
        <DataBox title="온도°C" average={temp.average} highest={temp.highest} lowest={temp.lowest}>
          <Graph data={temp.data} title="온도°C" label="온도" color="#87ceeB" />
        </DataBox>
        <DataBox title="습도 %" average={hum.average} highest={hum.highest} lowest={hum.lowest}>
          <Graph data={hum.data} title="습도 %" label="습도" color="#87ceeB" />
        </DataBox>
        <DataBox title="CO₂ (ppm)" average={co2.average} highest={co2.highest} lowest={co2.lowest}>
          <Graph data={co2.data} title="CO₂ (ppm)" label="CO₂" color="#87ceeB" />
        </DataBox>
        <DataBox title="일사량 kWh/㎡" average={solar.average} highest={solar.highest} lowest={solar.lowest}>
          <Graph data={solar.data} title="일사량 kWh/㎡" label="일사량" color="#87ceeB" />
        </DataBox>
      </div>
    </div>
  );
};

export default DataStatistics;
