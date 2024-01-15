import React from 'react';
import { Box, Typography } from '@mui/material';
import BMIFormComponent from './BmiFormComponent';
import BMIResultComponent from './BmiResultComponent';
import useBmiDetails from '../useBmiDetails';

const BmiCalculatorComponent = () => {
  const {
    weight,
    setWeight,
    height,
    setHeight,
    gender,
    setGender,
    age,
    setAge,
    bmi,
    bmiCategory,
    calculateBmi,
    getBmiColor,
  } = useBmiDetails();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Box p={6} boxShadow={3} borderRadius={10} bgcolor="white" mt={5} width={550}>
        <Typography variant="h4" gutterBottom>
          BMI Calculator
        </Typography>
        <BMIFormComponent
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
          gender={gender}
          setGender={setGender}
          age={age}
          setAge={setAge}
          calculateBmi={calculateBmi}
        />
        {bmi !== null && (
          <BMIResultComponent
            bmi={bmi}
            bmiCategory={bmiCategory}
            getBmiColor={getBmiColor}
          />
        )}
      </Box>
    </div>
  );
};

export default BmiCalculatorComponent;
