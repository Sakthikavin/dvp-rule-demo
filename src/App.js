import logo from './logo.svg';
import './styles/App.css';
import React from "react"; 
import Table from "./components/Table";
import Button from "./components/Button"
import ChartComponent from "./components/ChartComponent"
import {useState} from "react";



const getData = () => [
  {
    "sno": 1,
    "productname": "Apple",
    "month": "01/01/21",
    "cumulative_sales_count": 10
  },
  {
    "sno": 2,
    "productname": "Apple",
    "month": "02/01/21",
    "cumulative_sales_count": 20
  },
  {
    "sno": 3,
    "productname": "Apple",
    "month": "03/01/21",
    "cumulative_sales_count": 30
  },
  {
    "sno": 4,
    "productname": "Apple",
    "month": "04/01/21",
    "cumulative_sales_count": 20
  },
  {
    "sno": 5,
    "productname": "Apple",
    "month": "05/01/21",
    "cumulative_sales_count": 50
  },
  {
    "sno": 6,
    "productname": "Apple",
    "month": "06/01/21",
    "cumulative_sales_count": 60
  },
  {
    "sno": 7,
    "productname": "Apple",
    "month": "07/01/21",
    "cumulative_sales_count": 70
  }
 ];


 // Sample chart data
const pdata = [
  {
      month: '202101',
      cumulative_purchase: 10
  },
  {
      month: '202102',
      cumulative_purchase: 20
  },
  {
      month: '202103',
      cumulative_purchase: 30
  },
  {
      month: '202104',
      cumulative_purchase: 20
  },
  {
      month: '202105',
      cumulative_purchase: 50
  },
  {
      month: '202106',
      cumulative_purchase: 60,
      fees: 8
  },
  {
    month: '202107',
    cumulative_purchase: 70
},
];

var chartcontent = [];

function App() {

  const [count, setCount] = useState(0);

  const columns = React.useMemo(
    () => [
      {
        Header: "sno",
        accessor: "sno",
      },
      {
        Header: "productname",
        accessor: "productname",
      },
      {
        Header: "month",
        accessor: "month",
},
      {
        Header: "cumulative_sales_count",
        accessor: "cumulative_sales_count",
      },
    ],
    []
  );
  
  const data = React.useMemo(() => getData(), []);

  for (var i = chartcontent.length; i < count; i++) {
    var charttitle = "Rate Chart " + count.toString();
    chartcontent.push((<ChartComponent pdata={pdata} charttitle={charttitle} name={count.toString()}></ChartComponent>));
  } 

  return (
    <div>
    <div className="framecontentLeft">
      <div>DVP Rule Generator</div>
      <div>
        <Table columns={columns} data={data} />
      </div>
      <button className="button" onClick={()=> setCount(count + 1)}>Add Rule</button>
   </div>
   
    <div className="framecontentRight">
    {chartcontent}
    </div>
  </div>
  );
}

export default App;