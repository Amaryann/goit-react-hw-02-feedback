import { Notification } from "./Notification"
import PropTypes from 'prop-types';
export const Statistics = ({state, setState}) => {
    if (Object.values(state).every(feedback=>feedback===0)){
        return (
          <Notification message="There is no feedback"/>
        )
      } 
    return (
        <div >
            <p>Good: {state.good}</p>
            <p>Neutral: {state.neutral}</p>
            <p>Bad: {state.bad}</p>
            <p>Total: {state.good+state.neutral+state.bad}</p>
            <p>Positive feedbacks: {((state.good/state.bad/state.neutral).toFixed(2)*100)}%</p>
        </div>
        )
}
Statistics.propTypes = {
    state: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired,
    setState: PropTypes.func.isRequired,
  };