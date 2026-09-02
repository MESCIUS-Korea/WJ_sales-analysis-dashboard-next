'use client';

//MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Wijmo Imports
import * as wjChart from '@mescius/wijmo.react.chart';

const data = [
  { data: 10, month: 'Jan' },
  { data: 20, month: 'Feb' },
  { data: 5, month: 'Mar' },
  { data: 30, month: 'Apr' },
  { data: 15, month: 'May' },
];

const DistributedColumnChart = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">2,856</Typography>
        <wjChart.FlexChart
          id="columnChart"
          chartType="Column"
          bindingX="month"
          itemsSource={data}
          palette={['#FF4C51', '#8C57FF']}
          tooltipContent=""
        >
          <wjChart.FlexChartLegend position="None" />
          <wjChart.FlexChartAxis
            wjProperty="axisX"
            majorGrid={false}
            labels={false}
          />

          <wjChart.FlexChartAxis
            wjProperty="axisY"
            majorTickMarks="None"
            labels={false}
            majorGrid={false}
          />

          <wjChart.FlexChartSeries name="data" binding="data" />
        </wjChart.FlexChart>
        <Typography color="text.primary" className="font-medium text-center">
          세션
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DistributedColumnChart;
