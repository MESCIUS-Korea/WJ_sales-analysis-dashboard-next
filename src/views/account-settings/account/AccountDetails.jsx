'use client';

// React Imports
import { useState } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
// Wijmo
import '@mescius/wijmo.styles/wijmo.css';
import { InputMask, ComboBox } from '@mescius/wijmo.react.input';
//
import useEvent from 'react-use-event-hook';
// Vars
const initialData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  organization: 'ThemeSelection',
  phoneNumber: '+1 (917) 543-9876',
  address: '123 Main St, New York, NY 10001',
  state: 'New York',
  zipCode: '634880',
  country: 'usa',
  language: 'arabic',
  timezone: 'gmt-12',
  currency: 'usd',
};

const languageData = ['English', 'Arabic', 'French', 'German', 'Portuguese'];

const countryData = ['USA', 'UK', 'Australia', 'Germany'];
const timezoneData = [
  '(GMT-12:00) International Date Line West',
  '(GMT-11:00) Midway Island, Samoa',
  '(GMT-10:00) Hawaii',
  '(GMT-09:00) Alaska',
  '(GMT-08:00) Pacific Time (US & Canada)',
  '(GMT-08:00) Tijuana, Baja California',
  '(GMT-07:00) Chihuahua, La Paz, Mazatlan',
  '(GMT-07:00) Mountain Time (US & Canada)',
  '(GMT-06:00) Central America',
  '(GMT-06:00) Central Time (US & Canada)',
  '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
  '(GMT-06:00) Saskatchewan',
  '(GMT-05:00) Bogota, Lima, Quito, Rio Branco',
  '(GMT-05:00) Eastern Time (US & Canada)',
  '(GMT-05:00) Indiana (East)',
  '(GMT-04:00) Atlantic Time (Canada)',
  '(GMT-04:00) Caracas, La Paz',
];
const currencyData = ['USD', 'EUR', 'Pound', 'Bitcoin'];

const AccountDetails = () => {
  // States
  const [formData, setFormData] = useState(initialData);
  const [fileInput, setFileInput] = useState('');
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png');
  const [language, setLanguage] = useState(['English']);

  const handleFileInputChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;

    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);

      if (reader.result !== null) {
        setFileInput(reader.result);
      }
    }
  };

  const handleFileInputReset = () => {
    setFileInput('');
    setImgSrc('/images/avatars/1.png');
  };

  const onValueChanged = useEvent((sender) => {});

  const onObjValChanged = useEvent((sender) => {
    // setObjVal(sender.selectedValue);
  });
  return (
    <Card>
      <CardContent className="mbe-5">
        <div className="flex max-sm:flex-col items-center gap-6">
          <img
            height={100}
            width={100}
            className="rounded"
            src={imgSrc}
            alt="Profile"
          />
          <div className="flex flex-grow flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                component="label"
                size="small"
                variant="contained"
                htmlFor="account-settings-upload-image"
              >
                사진 업로드
                <input
                  hidden
                  type="file"
                  value={fileInput}
                  accept="image/png, image/jpeg"
                  onChange={handleFileInputChange}
                  id="account-settings-upload-image"
                />
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                onClick={handleFileInputReset}
              >
                초기화
              </Button>
            </div>
            <Typography>Allowed JPG, GIF or PNG. Max size of 800K</Typography>
          </div>
        </div>
      </CardContent>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <InputLabel className="account-input-title">이름</InputLabel>
              <InputMask
                className="account-input"
                id="firstName"
                value={formData.firstName}
                valueChanged={{ onValueChanged }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className="account-input-title">성</InputLabel>
              <InputMask
                className="account-input"
                id="lastName"
                value={formData.lastName}
                valueChanged={onValueChanged}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className="account-input-title">이메일 </InputLabel>
              <InputMask
                className="account-input"
                id="email"
                value={formData.email}
                valueChanged={onValueChanged}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className="account-input-title">조직</InputLabel>
              <InputMask
                className="account-input"
                id="organization"
                value={formData.organization}
                valueChanged={onValueChanged}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className="account-input-title">
                핸드폰 연락처
              </InputLabel>
              <InputMask
                className="account-input"
                id="phoneNumber"
                value={formData.phoneNumber}
                valueChanged={onValueChanged}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className="account-input-title">주소 </InputLabel>
              <InputMask
                className="account-input"
                id="address"
                value={formData.address}
                valueChanged={onValueChanged}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className="account-input-title">국가</InputLabel>
              <InputMask
                className="account-input"
                id="state"
                value={formData.state}
                valueChanged={onValueChanged}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className="account-input-title">우편번호</InputLabel>
              <InputMask
                className="account-input"
                id="zipCode"
                value={formData.zipCode}
                valueChanged={onValueChanged}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel className="account-input-title">국가</InputLabel>
                <ComboBox
                  className="account-input"
                  id="couuntryCombo"
                  value={formData.country}
                  itemsSource={countryData}
                  selectedIndexChanged={onObjValChanged}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel className="account-input-title">언어</InputLabel>

                <ComboBox
                  className="account-input"
                  id="languageCombo"
                  value={formData.language}
                  itemsSource={languageData}
                  selectedIndexChanged={onObjValChanged}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel className="account-input-title">
                  TimeZone
                </InputLabel>
                <ComboBox
                  className="account-input"
                  id="timezoneCombo"
                  value={formData.timezone}
                  itemsSource={timezoneData}
                  selectedIndexChanged={onObjValChanged}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel className="account-input-title">
                  Currency
                </InputLabel>
                <ComboBox
                  className="account-input"
                  id="currencyCombo"
                  value={formData.currency}
                  itemsSource={currencyData}
                  selectedIndexChanged={onObjValChanged}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} className="flex gap-4 flex-wrap">
              <Button variant="contained" type="submit">
                변경사항 저장
              </Button>
              <Button
                variant="outlined"
                type="reset"
                color="secondary"
                onClick={() => setFormData(initialData)}
              >
                초기화
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default AccountDetails;
