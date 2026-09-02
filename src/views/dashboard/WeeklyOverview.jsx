'use client';
//React
import useEvent from 'react-use-event-hook';

// MUI Imports
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// Wijmo Imports
import '@mescius/wijmo.styles/wijmo.css';
import * as wjChart from '@mescius/wijmo.react.chart';

// Components Imports
import OptionsMenu from '../../@core/components/option-menu';

import '../../app/globals.css';

const data = [
  { day: '일', sales: 37 },
  { day: '월', sales: 57 },
  { day: '화', sales: 45 },
  { day: '수', sales: 75 },
  { day: '목', sales: 57 },
  { day: '금', sales: 40 },
  { day: '토', sales: 65 },
];

const WeeklyOverview = () => {
  const initChart = useEvent((flex) => {
    flex.rendered.addHandler((s, e) => {
      let elements = e.engine.element;
      let series = elements.querySelectorAll('.wj-series-group g');
      series.forEach((si, idx) => {
        si.querySelectorAll('rect').forEach((rect) => {
          const originalWidth = rect.getAttribute('width'),
            x = rect.getAttribute('x');

          rect.setAttribute('x', Number(x) + Number(originalWidth) / 3.3);
        });
      });
    });
  });

  return (
    <Card className="card-section">
      <CardHeader
        title="주간 개요"
        action={
          <OptionsMenu
            iconClassName="text-textPrimary"
            options={['Refresh', 'Update', 'Delete']}
          />
        }
      />
      <CardContent
        sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}
      >
        <wjChart.FlexChart
          id="barChart"
          bindingX="day"
          selectionMode="Point"
          itemsSource={data}
          palette={['#8C57FF']}
          initialized={initChart}
          tooltipContent=""
        >
          <wjChart.FlexChartLegend position="None" />
          <wjChart.FlexChartSeries name="sales" binding="sales" />
          <wjChart.FlexChartAxis
            wjProperty="axisX"
            majorTickMarks="None"
            labels={false}
          />

          <wjChart.FlexChartAxis wjProperty="axisY" majorUnit={20} />
        </wjChart.FlexChart>
        <div className="flex items-center mbe-4 gap-4">
          <Typography variant="h4">45%</Typography>
          <Typography>
            귀하의 판매 실적은 지난 달 대비 45% 향상되었습니다. 😎
          </Typography>
        </div>
        <Button
          onClick={() => {
            alert('디테일 버튼을 클릭했습니다.');
          }}
          fullWidth
          variant="contained"
        >
          상세
        </Button>
      </CardContent>
    </Card>
  );
};

export default WeeklyOverview;
