import { useState } from 'react';

function ControlledFormComponent(){
    const [score, setScore] = useState("10");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Number(score) <= 5 && feedback.length <= 10){
            alert("Please provide a comment explaining why the experience was poor.")
            return;
        }

        console.log("Form Submitted");
        setFeedback("");
        setScore("10");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <div className="Field">
                        <label>Score: {score}</label>
                        <input 
                            type="range" 
                            min="0" 
                            max="10" 
                            value={score} 
                            onChange={e => setScore(e.target.value)}
                        />
                    </div>
                    <div className='Field'>
                        <label>Feedback: </label>
                        <textarea 
                            value={feedback} 
                            onChange={e => setFeedback(e.target.value)} 
                        />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default ControlledFormComponent;