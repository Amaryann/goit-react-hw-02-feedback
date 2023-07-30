import { useState } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";
import PropTypes from 'prop-types';
export const App = () => {
  const [state, setState] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  )
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h2>Please leave feedback</h2>
      <Feedback state={state} setState={setState}/>
      <h2>Statistics</h2>
      <Statistics state={state} setState={setState}/>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  setState: PropTypes.func.isRequired,
};