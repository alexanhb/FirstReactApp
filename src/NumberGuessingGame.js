function NumberGuessingGame(){
    function handleClick(){
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userGuess = prompt("Guess the number between 1 and 3");
        if(randomNum == userGuess){
            alert("You guessed it right");
        } 
        else {
            alert(`You guessed ${userGuess}, but the number was ${randomNum}`);
        }
    }

    return(
        <div>
            <button onClick={handleClick} className="btnContainer">Guess the number</button>
        </div>
    )
}

export default NumberGuessingGame