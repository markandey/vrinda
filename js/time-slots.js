var timeSlots = [{
        isTime: function() {
            var time = new Date();
            var m = time.getMinutes();
            var s = time.getSeconds();
            if (m === 1 ||
                m === 2 ||
                m === 30 ||
                m === 31 ) {
                if (s % 10 == 0) {
                    ding();
                }
                return true;
            }
            return false;
        },
        path: 'news.html'
    },
    {
        isTime: function() {
            var time = new Date();
            var m = time.getMinutes();
            var s = time.getSeconds();
            if (m === 44 ||
                m === 45 ||
                m === 14 ||
                m===15) {
                if (s % 10 == 0) {
                    ding();
                }
                return true;
            }
            return false;
        },
        path: 'hindinews.html'
    }
    , {
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
        path: 'clock2.html'
    }
];