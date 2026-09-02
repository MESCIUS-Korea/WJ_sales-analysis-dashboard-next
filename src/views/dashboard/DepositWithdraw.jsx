// MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Component Imports
import Link from '../../components/Link';

// Vars
const depositData = [
  {
    amount: '+$4,650',
    subtitle: 'UI Kit 판매',
    title: 'Gumroad Account',
    logo: '/images/cards/gumroad.png',
  },
  {
    amount: '+$92,705',
    title: 'Mastercard',
    subtitle: '예치금',
    logo: '/images/logos/mastercard.png',
  },
  {
    amount: '+$957',
    title: 'Stripe Account',
    subtitle: 'iOS 애플리케이션',
    logo: '/images/logos/stripe.png',
  },
  {
    amount: '+$6,837',
    title: 'American Bank',
    subtitle: '계좌 이체',
    logo: '/images/logos/american-bank.png',
  },
  {
    amount: '+$446',
    title: 'Bank Account',
    subtitle: '월렛 입금',
    logo: '/images/logos/citi-bank.png',
  },
];

const withdrawData = [
  {
    amount: '-$145',
    title: 'Google Adsense',
    subtitle: '페이팔 예치금',
    logo: '/images/logos/google.png',
  },
  {
    amount: '-$1870',
    title: 'Github Enterprise',
    logo: '/images/logos/github.png',
    subtitle: '보안 & 인증',
  },
  {
    amount: '-$450',
    title: 'Upgrade Slack Plan',
    subtitle: '직불카드 예치',
    logo: '/images/logos/slack.png',
  },
  {
    amount: '-$540',
    title: 'Digital Ocean',
    subtitle: '클라우드 호스팅',
    logo: '/images/logos/digital-ocean.png',
  },
  {
    amount: '-$21',
    title: 'AWS Account',
    logo: '/images/logos/aws.png',
    subtitle: '클라우드 플랫폼 결정',
  },
];

const DepositWithdraw = () => {
  return (
    <Card>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          className="border-be md:border-be-0 md:border-ie"
        >
          <CardHeader
            title="입금"
            action={
              <Typography
                component={Link}
                className="font-medium"
                color="primary"
              >
                모두 보기
              </Typography>
            }
          />
          <CardContent className="flex flex-col gap-5">
            {depositData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img src={item.logo} alt={item.title} width={30} />
                <div className="flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2">
                  <div className="flex flex-col gap-0.5">
                    <Typography color="text.primary" className="font-medium">
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                  </div>
                  <Typography color="success.main" className="font-medium">
                    {item.amount}
                  </Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardHeader
            title="출금"
            action={
              <Typography
                component={Link}
                className="font-medium"
                color="primary"
              >
                모두 보기
              </Typography>
            }
          />
          <CardContent className="flex flex-col gap-5">
            {withdrawData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img src={item.logo} alt={item.title} width={30} />
                <div className="flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2">
                  <div className="flex flex-col gap-0.5">
                    <Typography color="text.primary" className="font-medium">
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                  </div>
                  <Typography color="error.main" className="font-medium">
                    {item.amount}
                  </Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DepositWithdraw;
