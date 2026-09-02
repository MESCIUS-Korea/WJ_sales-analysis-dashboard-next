// MUI Imports
import Grid from '@mui/material/Grid';

// Components Imports
import Award from '../../views/dashboard/Award';
import Transactions from '../../views/dashboard/Transactions';
import WeeklyOverview from '../../views/dashboard/WeeklyOverview';
import TotalEarning from '../../views/dashboard/TotalEarning';
import LineChart from '../../views/dashboard/LineChart';
import DistributedColumnChart from '../../views/dashboard/DistributedColumnChart';
import DepositWithdraw from '../../views/dashboard/DepositWithdraw';
import SalesByCountries from '../../views/dashboard/SalesByCountries';
import CardStatVertical from '../../components/card-statistics/Vertical';
import Table from '../../views/dashboard/Table';

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <WeeklyOverview />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TotalEarning />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title="총 이익"
              stats="$25.6k"
              avatarIcon="mdi-light:chart-pie"
              avatarColor="secondary"
              subtitle="주간 이익"
              trendNumber="42%"
              trend="positive"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              stats="862"
              trend="negative"
              trendNumber="18%"
              title="신규 프로젝트"
              subtitle="연간 프로젝트"
              avatarColor="primary"
              avatarIcon="material-symbols-light:file-copy-outline"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DistributedColumnChart />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCountries />
      </Grid>
      <Grid item xs={12} lg={8}>
        <DepositWithdraw />
      </Grid>
      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  );
};

export default DashboardAnalytics;
