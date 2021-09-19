// function myTime() {
//     let myDate = new Date()
//     let hr, min = (myDate.getMinutes() < 10) ? '0' + myDate.getMinutes() : myDate.getMinutes(),
//         sec = (myDate.getSeconds() < 10) ? '0' + myDate.getSeconds() : myDate.getSeconds(),
//         var m = (myDate.getHours() >= 12) ? 'AM' : 'PM';
//     if (myDate.getHours() == 0) {
//         hr = 12
//     } else if (myDate.getHours() > 12) {
//         hr = myDate.getHours() - 12
//     } else {
//         hr = myDate.getHours()
//     }
//     var currenttime = hr + ':' + min + ':' + sec;
//     document.getElementsByClassName("H")[0].innerHTML = currenttime;
//     document.getElementsByClassName("M")[0].innerHTML = M;

//     var myDay = ['Sunday', 'monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//     var myMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September', 'October', 'November', 'December']
//     var day = myDate.getDate();
//     var currentDate = myDay[myDate.getdate()] + ',' + myMonth[myDate.getMonth()] + ',' + day;

//     document.getElementsByClassName('date')[0].innerHTML = currentDate;
//     // setInterval(
//     //     function () {
//     //         mytime();
//     //     }, 1000
//     // )
// };

// myTime();
// setInterval(
//     function () {
//         myTime();
//     }, 1000
// )










function myTime() {
    var myDate=new Date();
    var hr,
    min=(myDate.getMinutes() < 10) ? "0"+myDate.getMinutes(): myDate.getMinutes(),
        sec=(myDate.getSeconds() < 10) ? "0"+ myDate.getSeconds(): myDate.getSeconds(),
        M=(myDate.getHours() >=12) ? "PM": "AM";



    if(myDate.getHours()==0) {
        hr=12;
    }

    else if(myDate.getHours() > 12) {
        hr=myDate.getHours() - 12;

    }

    else {
        hr=myDate.getHours();
    }


    var currentTime=hr+":"+min+":"+sec+":";

    document.getElementsByClassName("H")[0].innerHTML=currentTime;
    document.getElementsByClassName("M")[0].innerHTML=M;

    var myDay=["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    " Thursday",
    "Friday",
    "Saturday"],

    myMonth=["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"],

    day=myDate.getDate();

    var currentDate=myDay[myDate.getDay()]+","+myMonth[myDate.getMonth()]+" "+day;


    document.getElementsByClassName("date")[0].innerHTML=currentDate;
}

myTime();

setInterval(function() {
        myTime();
    }

    , 1000);