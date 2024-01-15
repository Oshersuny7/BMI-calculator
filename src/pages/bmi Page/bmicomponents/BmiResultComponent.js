import React from 'react';
import { Typography } from '@mui/material';

const BMIResultComponent = ({ bmi, bmiCategory, getBmiColor }) => {
  return (
    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5">Your BMI:</Typography>
      <Typography variant="h4" style={{ color: 'black', fontWeight: 'bold' }}>
        {bmi}
      </Typography>
      <Typography variant="h5" style={{ marginTop: '10px' }}>
        BMI Category:
      </Typography>
      <Typography
        variant="h5"
        style={{
          marginTop: '10px',
          color: getBmiColor(bmiCategory), 
          fontWeight: 'bold',
        }}
      >
        {bmiCategory}
      </Typography>
    </div>
  );
};

export default BMIResultComponent;
