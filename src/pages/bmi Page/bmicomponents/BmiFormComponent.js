import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Slider,
  Typography,
  Grid,
} from "@mui/material";
import { Male, Female } from "@mui/icons-material";

const BMIFormComponent = ({
  weight,
  setWeight,
  height,
  setHeight,
  gender,
  setGender,
  age,
  setAge,
  calculateBmi,
}) => {
  return (
    <Grid
      container
      spacing={4}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Grid item xs={12} sm={10}>
        <Typography variant="subtitle1">
          Selected Weight: {weight} kg
        </Typography>
        <FormControl fullWidth>
          <InputLabel style={{ marginTop: "7px" }}>Weight (kg)</InputLabel>
          <Slider
            value={weight}
            onChange={(_, newValue) => setWeight(newValue)}
            valueLabelDisplay="auto"
            min={20}
            max={150}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={10}>
        <Typography variant="subtitle1">
          Selected Height: {height} cm
        </Typography>
        <FormControl fullWidth>
          <InputLabel style={{ marginTop: "7px" }}>Height (cm)</InputLabel>
          <Slider
            value={height}
            onChange={(_, newValue) => setHeight(newValue)}
            valueLabelDisplay="auto"
            min={50}
            max={250}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={10}>
        <Typography variant="subtitle1">Selected Age: {age} years</Typography>
        <FormControl fullWidth>
          <InputLabel style={{ marginTop: "7px" }}> Age (years)</InputLabel>
          <Slider
            value={age}
            onChange={(_, newValue) => setAge(newValue)}
            valueLabelDisplay="auto"
            min={12}
            max={120}
          />
        </FormControl>
      </Grid>

      <Typography
        variant="subtitle1"
        style={{ marginTop: "40px", marginBottom: "10px", marginLeft: "38px" }}
      >
        Choose your Gender:
      </Typography>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        <Grid item>
          <Button
            variant={gender === "male" ? "contained" : "outlined"}
            color="primary"
            onClick={() => setGender("male")}
            style={{ borderRadius: "50%", padding: "15px" }}
          >
            <Male fontSize="large" />
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={gender === "female" ? "contained" : "outlined"}
            color="secondary"
            onClick={() => setGender("female")}
            style={{ borderRadius: "50%", padding: "15px" }}
          >
            <Female fontSize="large" />
          </Button>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          alignSelf: "center",
          width: "85%",
        }}
        onClick={calculateBmi}
      >
        Calculate BMI
      </Button>
    </Grid>
  );
};

export default BMIFormComponent;
