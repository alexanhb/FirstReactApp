function WhichDayIsIt() {
  const time = new Date();
  const day = time.toLocaleDateString('en-US', { weekday: 'long' });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  switch (day) {
    case 'Monday':
      dayMessage = 'Happy Monday!';
      break;
    case 'Tuesday':
      dayMessage = 'Happy Tuesday!';
      break;
    case 'Wednesday':
      dayMessage = 'Happy Wednesday!';
      break;
    case 'Thursday':
      dayMessage = 'Happy Thursday!';
      break;
    case 'Friday':
      dayMessage = 'Happy Friday!';
      break;
    case 'Saturday':
      dayMessage = 'Happy Saturday!';
      break;
    case 'Sunday':
      dayMessage = 'Happy Sunday!';
      break;
    default:
      dayMessage = 'Happy Day!';
  }

  return(
    <div>
        <h1>
            {dayMessage}
        </h1>
        {morning ? <h2>Good Morning!</h2> : <h2>Good Evening!</h2>}
    </div>
  )

}

export default WhichDayIsIt;