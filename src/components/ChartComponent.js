import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
  } from 'recharts';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

import '../styles/ChartComponent.css'

function ChartComponent(props){

    return (
        <div className="column_flex">
            <div className="chartoutline">
                <h2>{props.charttitle}</h2>
                <ResponsiveContainer width="100%" aspect={3}>
                        <LineChart data={props.pdata} margin={{ right: 300 }}>
                            <CartesianGrid />
                        <XAxis dataKey="month" 
                                interval={'preserveStartEnd'} />
                            <YAxis></YAxis>
                            <Legend />
                            <Tooltip />
                            <Line dataKey="cumulative_purchase"
                                stroke="black" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
            </div> 
            <div id={props.name} onClick={(event) => {
                console.log(event.target.id);
                }}>
                <DoDisturbOnIcon></DoDisturbOnIcon>
            </div>
        </div>
        
      );
}

export default ChartComponent;