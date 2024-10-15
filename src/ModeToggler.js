function ModeToggler(){
    let darkModeOn = true;
    const darkMode = <h3>Dark Mode is On</h3>
    const lightMode = <h3>Light Mode is On</h3>

    function handleClick(){
        darkModeOn = !darkModeOn;
        if(darkModeOn == true){
            console.log("Dark mode is on")
        } else {
            console.log("Light mode is on")
        }
    }

    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick} className="btnContainer">Click me</button>
        </div>
    )
}

export default ModeToggler