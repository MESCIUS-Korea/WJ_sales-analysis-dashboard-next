// MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// Components Imports
import CardWithTabs from '../../../views/card-basic/CardWithTabs';

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h3">Navigation Cards</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardWithTabs />
      </Grid>
    </Grid>
  );
};

export default CardBasic;
