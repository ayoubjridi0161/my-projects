// src/components/CreateWorkout.js
import React, { useState } from 'react';

const Create = () => {
  const [daysPerCycle, setDaysPerCycle] = useState(3);
  const [workoutDays, setWorkoutDays] = useState([]);
  const [exerciseInputs, setExerciseInputs] = useState(Array(daysPerCycle).fill(''));

  const handleDaysChange = (e) => {
    const newDays = parseInt(e.target.value, 10);
    setDaysPerCycle(newDays);
    setExerciseInputs(Array(newDays).fill(''));
  };

  const handleExerciseChange = (index, value) => {
    const newInputs = [...exerciseInputs];
    newInputs[index] = value;
    setExerciseInputs(newInputs);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form submitted:', { daysPerCycle, workoutDays, exerciseInputs });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Number of Days Per Cycle:
        <input
          type="number"
          value={daysPerCycle}
          onChange={handleDaysChange}
        />
      </label>

      {Array.from({ length: daysPerCycle }).map((_, index) => (
        <div key={index}>
          <label>{`Day ${index + 1} Exercise:`}</label>
          <input
            type="text"
            value={exerciseInputs[index]}
            onChange={(e) => handleExerciseChange(index, e.target.value)}
          />
        </div>
      ))}

      <button type="submit">Generate Workout Routine</button>
    </form>
  );
};

export default Create;
