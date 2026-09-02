//MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Components Imports
import OptionMenu from '../../@core/components/option-menu';
import CustomAvatar from '../../@core/components/mui/Avatar';

//
import { Icon } from '@iconify/react';

// Vars
const data = [
  {
    stats: '245k',
    title: '판매량',
    color: 'primary',
    icon: 'mdi-light:chart-pie',
  },
  {
    stats: '12.5k',
    title: '유저수',
    color: 'success',
    icon: 'mdi-light:account',
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: '제품',
    icon: 'ic:round-laptop-mac',
  },
  {
    stats: '$88k',
    color: 'info',
    title: '수익',
    icon: 'material-symbols-light:attach-money',
  },
];

const Transactions = () => {
  return (
    <Card className="bs-full">
      <CardHeader
        title="거래"
        action={
          <OptionMenu
            iconClassName="text-textPrimary"
            options={['Refresh', 'Share', 'Update']}
          />
        }
        subheader={
          <p className="mbs-3">
            <span className="font-medium text-textPrimary">
              총 48.5% 성장 😎
            </span>
          </p>
        }
      />
      <CardContent className="!pbs-5">
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <div className="flex items-center gap-3">
                <CustomAvatar
                  variant="rounded"
                  color={item.color}
                  className="shadow-xs"
                >
                  <Icon icon={item.icon} className="transcation-icons" />
                </CustomAvatar>
                <div>
                  <Typography>{item.title}</Typography>
                  <Typography variant="h5">{item.stats}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Transactions;
