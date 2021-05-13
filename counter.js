function onLoad() {
    let permission = Notification.permission;
    if(permission === "granted") {
    showNotification();
    } else if(permission === "default"){
    requestAndShowPermission();
    } else {
    alert("Use normal alert");
    }

}

task = ""

function timerstart() {
    setter = document.getElementById("setter")
    timer = document.getElementById("timer")

    writetimer(timer, 0, parseInt(setter.value))

    if (task) {
        clearInterval(task)
    }

    task = setInterval(timerReduce, 1000)
}

function timerstop() {
    if (task) {
        clearInterval(task)
    }
}

function timerReduce() {
    timer = document.getElementById("timer")

    mins = parseInt(timer.innerText.substr(0, 2))
    secs = parseInt(timer.innerText.substr(3, 2))

    // timer
    if (secs === 0) {

        if (mins === 0) {
            clearInterval(task)
            ding()
            timerstart()
            return
        }

        mins -= 1
        secs = 60
    }

    secs -= 1

    writetimer(timer, secs, mins)
}


function writetimer(timer, secs, mins) {
    if (secs < 10) {
        if (mins < 10) {
            timer.innerText = "0" + mins + ":0" + secs
        }
        else {
            timer.innerText = mins + ":0" + secs
        }
    }
    else {
        if (mins < 10) {
            timer.innerText = "0" + mins + ":" + secs
        }
        else {
            timer.innerText = mins + ":" + secs
        }
    }
}

function ding() {
    var audio = new Audio('music.mp3');
    audio.play();
    showNotification()
}

function showNotification() {
    var notify = new Notification('blink');
 }
 function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
       if (permission === "granted") {
             console.log("nice")
             showNotification()
       }
    });
 }