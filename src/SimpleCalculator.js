import {useState, useRef} from 'react';
import './App.css';

function SimpleCalculator(){
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function add(e){
        e.preventDefault();
        setResult((result) => result + parseInt(inputRef.current.value));
    };

    function subtract(e){
        e.preventDefault();
        setResult((result) => result - parseInt(inputRef.current.value));
    };

    function multiply(e){
        e.preventDefault();
        setResult((result) => result * parseInt(inputRef.current.value));
    };

    function divide(e){
        e.preventDefault();
        setResult((result) => result / parseInt(inputRef.current.value));
    };

    function clearInput(e){
        e.preventDefault();
        inputRef.current.value = '';
    };

    function clearResult(e){
        e.preventDefault();
        setResult(0);
    };

    return(
        <div className='calculatorContainer'>
            <div>
                <h1 className='calculatorHeader'>Simple working calculator</h1>
            </div>
            <form>
                <p ref={resultRef} className='resultText'>Result: {result}</p>
                <input
                    pattern="[0-9]" 
                    ref={inputRef} 
                    type="number" 
                    placeholder="Type a number"
                    className="inputField" 
                />
                <button onClick={add}>Add</button>
                <button onClick={subtract}>Subtract</button>
                <button onClick={multiply}>Multiply</button>
                <button onClick={divide}>Divide</button>
                <button onClick={clearInput}>Clear Input</button>
                <button onClick={clearResult}>Clear Result</button>
            </form>
        </div>
    )

}

export default SimpleCalculator;