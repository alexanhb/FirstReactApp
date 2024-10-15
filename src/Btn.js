function Btn(){
    const clickhandler = () => {
        alert("You clicked the button!") // This will show an alert when the button is clicked
    }
    return(
        <button onClick={clickhandler} className="btnContainer">Click Me</button>
    )
}

export default Btn;