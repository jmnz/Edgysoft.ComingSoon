
var secondInMil = 1000;
var minuteInMil = secondInMil * 60;
var hourInMil = minuteInMil * 60; 
var dayInMil = hourInMil * 24;

function act() {
    var now = new Date();
    var future = new Date(2017,3,10,20,30,0,0)
    var diff = Math.abs(future - now);
    var days = hours = minutes = seconds = 0;
    while (diff > 1000) {
        if (diff > dayInMil) {
            diff = diff - dayInMil;
            days = days + 1;
            console.log(days);
        }
        else if (diff > hourInMil) {
            diff = diff - hourInMil;
            hours++;
        }
        else if (diff > minuteInMil) {
            diff = diff - minuteInMil;
            minutes++;
        }
        else if (diff > secondInMil) {
            diff = diff - secondInMil;
            seconds++;
        }
        else {
            console.log(days+' '+hours+' '+minutes+' '+seconds);
        }
    }
    document.querySelector('.item.days span').innerHTML = days+' D';
    document.querySelector('.item.hours span').innerHTML = hours+' H';
    document.querySelector('.item.minutes span').innerHTML = minutes+' m';
    document.querySelector('.item.seconds span').innerHTML = seconds+' s';
    setTimeout(act, 1000);
}

$( document ).ready(function() {
    console.log( "ready!" );
    act();
});
