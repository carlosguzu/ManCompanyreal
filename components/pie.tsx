import React, { useEffect } from 'react';
import { useOrdersData } from "./data";
import * as echarts from 'echarts';

const Pie: React.FC = () => {
  const { rowlen } = useOrdersData();

  useEffect(() => {
    const chartDom = document.getElementById('pie-chart')!;
    const myChart = echarts.init(chartDom);

    const data = rowlen.map((row) => ({
      value: row.key,
      name: row.label,
    }));

    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Order Status',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data,
        },
      ],
    };

    option && myChart.setOption(option);

    // Cleanup when the component unmounts
    return () => {
      myChart.dispose();
    };
  }, [rowlen]);

  return <div id="pie-chart" style={{ height: '400px', width: '300px' }} />;
};

export default Pie;
