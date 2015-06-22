var curLocation = "";
var timeSlots = [{
    isTime: function() {
        var time = new Date();
        var m = time.getMinutes();
        if (m === 1 || m === 30 || m === 35) {
            return true;
        }
        return false;
    },
    path: 'news.html'
}, 
{
    isTime: function() {
        var time = new Date();
        var s = time.getSeconds();
        if (s > 40 && s < 45) {
            return true;
        }
        return false;
    },
    path: 'calendar.html'
},

{
    isTime: function() {
        var time = new Date();
        var s = time.getSeconds();
        if (s > 10 && s < 30) {
            return true;
        }
        return false;
    },
    path: 'weather.html?citi=san jose'
}, {
    isTime: function() {
        return true;
    },
    path: 'clock.html'
}];

function ding() {
    var ding = document.getElementById("ding");
    ding.play();
}

function run() {
    var count = timeSlots.length;
    for (var i = 0; i < count; i++) {
        if (timeSlots[i].isTime()) {
            if (curLocation !== timeSlots[i].path) {
                curLocation = document.getElementById('main').src = timeSlots[i].path;
                ding();
            }
            break
        }
    }
}
setInterval(run, 1000);
setTimeout(function() {
    window.location.reload();
}, 300000);