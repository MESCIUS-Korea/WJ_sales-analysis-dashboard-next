'use client';
// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@mescius/wijmo.cultures/wijmo.culture.ko';

const Award = () => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2 relative items-start">
        <div>
          <Typography variant="h5">축하합니다, John! 🎉</Typography>
          <Typography>이달의 베스트 셀러입니다!</Typography>
        </div>
        <div>
          <Typography variant="h4" color="primary">
            $42.8k
          </Typography>
          <Typography>목표 달성률: 78% 🚀</Typography>
        </div>
        <Button
          onClick={() => {
            alert('세일즈 버튼을 클릭했습니다.');
          }}
          size="small"
          variant="contained"
        >
          판매 현황 보기
        </Button>
        <img
          src="/images/pages/trophy.png"
          alt="trophy image"
          height={102}
          className="absolute inline-end-7 bottom-6"
        />
      </CardContent>
    </Card>
  );
};

export default Award;
