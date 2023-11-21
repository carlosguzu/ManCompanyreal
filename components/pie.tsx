import React, { useEffect } from 'react';
import { rows, columns, rowlen, totalOrders } from "./data";
import * as echarts from 'echarts';

const Pie: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('pie-chart')!;
    const myChart = echarts.init(chartDom);

    const data = rowlen.map((row) => ({
      value: row.key,
      name: row.label,
    }));
  //key y label es igual a value and name, son intercambiables y depende de la biblioteca con la que se esté trabajando
   
  const color = {}//???

 

    const option = {
      
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data,
      }
    ]
    };

    
    option && myChart.setOption(option);

      // Cleanup when the component unmounts
      return () => {
        myChart.dispose();
      };
    }, []);
  
    return <div id="pie-chart" style={{ height: '400px' }} />;
  };
  
  export default Pie;