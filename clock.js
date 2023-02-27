const showTime = () => {

    const hoursHandler = document.getElementById('hoursHandler');
    const minutesHandler = document.getElementById('minutesHandler');
    const secondsHandler = document.getElementById('secondsHandler');

    minutesHandler.style.transformOrigin = 'top left';
    hoursHandler.style.transformOrigin = 'top left';
    secondsHandler.style.transformOrigin = 'top left';


    const date = new Date();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    const currentSecond = date.getSeconds(); 

    const hoursToDeg = (-90 + (30 * currentHour)).toString() // 1 hour = 30 degree
    const minutesToDeg = (-90 +(6 * currentMinute)).toString() // 1 minute = 6 degree
    const secondsToDeg =  (-90 +(6 * currentSecond)).toString() // 1 second = 6 degree
    console.log(currentSecond)



 

    hoursHandler.style.transform = `rotate(${hoursToDeg}deg)`;
    minutesHandler.style.transform = `rotate(${minutesToDeg}deg)`;
    secondsHandler.style.transform = `rotate(${secondsToDeg}deg)`;

    setTimeout(() => {
        showTime()
    }, '1000');

}
showTime()