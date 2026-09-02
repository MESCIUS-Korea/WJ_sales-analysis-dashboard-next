'use client';

// MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// Components Imports
import OptionMenu from '../../@core/components/option-menu';

// Wijmo Imports
import * as wjGauge from '@mescius/wijmo.react.gauge';

// Vars
const data = [
  {
    progress: 75,
    title: 'Zipcar',
    amount: '$24,895.65',
    subtitle: 'Vuejs, React & HTML',
    imgSrc: '/images/cards/zipcar.png',
    color: '#8C57FF',
    faceColor: 'rgb(140 87 255 / 0.24)',
  },
  {
    progress: 50,
    color: '#16B1FF',
    title: 'Bitbank',
    amount: '$8,650.20',
    subtitle: 'Sketch, Figma & XD',
    imgSrc: '/images/cards/bitbank.png',
    faceColor: 'rgb(22 177 255 / 0.24)',
  },
  {
    progress: 20,
    title: 'Aviato',
    color: '#8A8D93',
    amount: '$1,245.80',
    subtitle: 'HTML & Angular',
    imgSrc: '/images/cards/aviato.png',
    faceColor: 'rgb(46 38 61 / 0.12)',
  },
];

const initGauge = (s, info) => {
  s.pointer.color = info.color;
  s.hostElement.style.color = info.color;
  s.face.color = info.faceColor;
};

const TotalEarning = () => {
  return (
    <Card className="card-section">
      <CardHeader
        title="총 수입"
        action={
          <OptionMenu
            iconClassName="text-textPrimary"
            options={['Last 28 Days', 'Last Month', 'Last Year']}
          />
        }
      ></CardHeader>
      <CardContent className="flex flex-col gap-11 md:mbs-2.5">
        <div>
          <div className="flex items-center">
            <Typography variant="h3">$24,895</Typography>
            <i className="ri-arrow-up-s-line align-bottom text-success"></i>
            <Typography component="span" color="success.main">
              +10%
            </Typography>
          </div>
          <Typography>작년 $84,325 대비</Typography>
        </div>
        <div className="flex flex-col gap-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <Avatar
                src={item.imgSrc}
                variant="rounded"
                className="bg-actionHover"
              />
              <div className="flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2">
                <div className="flex flex-col gap-0.5">
                  <Typography color="text.primary" className="font-medium">
                    {item.title}
                  </Typography>
                  <Typography>{item.subtitle}</Typography>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <Typography color="text.primary" className="font-medium">
                    {item.amount}
                  </Typography>
                  <wjGauge.LinearGauge
                    value={item.progress}
                    className="is-20 bs-1"
                    initialized={(s) => initGauge(s, item)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalEarning;
