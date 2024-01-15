import { useState } from 'react';

const useBmiDetails = () => {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(12);
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const getBmiCategory = (bmi) => {
    if (bmi <= 18.6) {
      return 'UnderWeight';
    } else if (bmi <= 25) {
      return 'Healthy';
    } else if (bmi < 30) {
      return 'More than needed';
    } else {
      return 'Obesity';
    }
  };

  const getBmiColor = (category) => {
    switch (category) {
      case 'UnderWeight':
        return '#FF0000'; // Red
      case 'Healthy':
        return '#4CAF50'; // Green
      case 'More than needed':
        return '#FFA500'; // Orange
      case 'Obesity':
        return '#1E90FF'; // Dark Blue
      default:
        return '#000000'; // Black (fallback)
    }
  };

  const calculateBmi = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height to meters
    const ageValue = parseInt(age);

    // Calculate BMI adjusted for gender and age
    const genderFactor = gender === 'male' ? 0.98 : 1.0;
    const ageFactor = ageValue <= 18 ? 1.0 : 0.95;
    const bmiValue = (weightInKg / (heightInM * heightInM)).toFixed(2);
    const adjustedBmi = (bmiValue * genderFactor * ageFactor).toFixed(2);

    const category = getBmiCategory(adjustedBmi);

    setBmi(adjustedBmi);
    setBmiCategory(category);
  };

  return {
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
  };
};

export default useBmiDetails;
