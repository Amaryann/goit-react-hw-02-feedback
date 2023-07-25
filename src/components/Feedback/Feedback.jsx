import css from "./Feedback.module.css"
export const Feedback = ({state, setState}) => {
    const handleGoodFeedback = () => {
        setState((prevState)=>({
            ...prevState,
            good: prevState.good+1
        })) 
    }
    const handleBadFeedback = () => {
        setState((prevState)=>({
            ...prevState,
            bad: prevState.bad+1
        })) 
    }
    const handleNeutralFeedback = () => {
        setState((prevState)=>({
            ...prevState,
            neutral: prevState.neutral+1
        })) 
    }
    return (
        <div className="test">
            <ul className={css.feedbackButtons}>
                <li className="feedbackOption"><button onClick={handleGoodFeedback}>Good</button></li>
                <li className="feedbackOption"><button onClick={handleNeutralFeedback}>Neutral</button></li>
                <li className="feedbackOption"><button onClick={handleBadFeedback}>Bad</button></li>
            </ul>
        </div>
    )
}