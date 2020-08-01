import React, {useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import numeral from "numeral";
         
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};


    const buildChartData = (data, casesType='cases') => {
            const chartData = []
            let lastDataPoint;
    
            for (let date in data.cases) {
                if (lastDataPoint){
                    let newDataPoint = {
                        x : date,
                        y : data[casesType][date] - lastDataPoint,
                    }
                    chartData.push(newDataPoint)
                }
                lastDataPoint = data[casesType][date]
            }
            return chartData;
        }

function LineGraph({casesType}) {
  const [data, setData] = useState({})
  useEffect( ()=> {
        const fetchData = async ()=>{
           await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=190")
            .then ( response => response.json())
            .then( data => {
                const Data = buildChartData(data, casesType)
                setData(Data)
            })
        }
        fetchData()
        
    }, [])   
    return (
      
        <div className="line">
            {data?.length && (
                <Line 
                    options ={options} 
                    data={{
                        datasets: [{
                          data: data,
                          label: 'Infected',
                          borderColor: '#3333ff',
                          fill: true,
                        }, {
                          data: data,
                          label: 'Deaths',
                          borderColor: 'red',
                          backgroundColor: 'rgba(255, 0, 0, 0.5)',
                          fill: true,
                        },
                        ],
                      }}
        />
            )}
             
        </div>
    )
}

export default LineGraph