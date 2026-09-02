'use client';

//MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Wijmo Imports
import * as wjChart from '@mescius/wijmo.react.chart';

//
import useEvent from 'react-use-event-hook';

// Vars

const data = [
  { profit: 0, month: 'Jan' },
  { profit: 20, month: 'Feb' },
  { profit: 5, month: 'Mar' },
  { profit: 30, month: 'Apr' },
  { profit: 15, month: 'May' },
  { profit: 45, month: 'Jun' },
];
const LineChart = () => {
  const renderedEvt = useEvent((s, e) => {
    let seriesGroup = document.querySelector(
      '#lineSymbolChart .wj-series-group'
    ).childNodes[0].childNodes;
    seriesGroup.forEach((series, index) => {
      // 특정 ellipse만 표시
      if (series && index > 0 && index < 6) {
        series.style.display = 'none';
      }
    });
  });

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">$86.4k</Typography>

        <wjChart.FlexChart
          id="lineSymbolChart"
          itemsSource={data}
          bindingX="month"
          chartType="LineSymbols"
          palette={['#8C57FF']}
          rendered={renderedEvt}
          tooltipContent=""
        >
          <wjChart.FlexChartLegend position="None" />
          <wjChart.FlexChartAxis wjProperty="axisX" majorGrid={true} />

          <wjChart.FlexChartAxis
            wjProperty="axisY"
            majorTickMarks="None"
            labels={false}
            majorGrid={false}
          />
          <wjChart.FlexChartSeries binding="profit" name="profit" />
        </wjChart.FlexChart>
        <Typography color="text.primary" className="font-medium text-center">
          총 수익
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LineChart;
