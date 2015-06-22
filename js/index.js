function ding() {
    var ding = new Audio("sound/ding.wav");

    ding.play();
    setTimeout(function() {
        ding.pause();
        ding.currentTime = 0;
    }, 2000);
}

var curLocation = "";
var timeSlots = [{
        isTime: function() {
            var time = new Date();
            var m = time.getMinutes();
            var s = time.getSeconds();
            if (m === 1 || m === 30 || m===9) {
                if (s % 10 == 0) {
                    ding();
                }
                return true;
            }
            return false;
        },
        path: 'news.html'
    }, {
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
    }
];

function run() {
    var count = timeSlots.length;
    for (var i = 0; i < count; i++) {
        if (timeSlots[i].isTime()) {
            if (curLocation !== timeSlots[i].path) {
                curLocation = document.getElementById('main').src = timeSlots[i].path;
            }
            break
        }
    }
}
setInterval(run, 1000);
setTimeout(function() {
    window.location.reload();
}, 300000);