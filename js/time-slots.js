var timeSlots = [{
        isTime: function() {
            var time = new Date();
            var m = time.getMinutes();
            var s = time.getSeconds();
            if (m%3===0) {
                if (s % 10 == 0) {
                    ding();
                }
                return true;
            }
            return false;
        },
        path: 'news.html'
    },{
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
        path: 'weather.html?citi=sunnyvale'
    }, {
        isTime: function() {
            return true;
        },
        path: 'https://www.youtube.com/embed/A3PDXmYoF5U?autoplay=1&theme=light&autohide=1rel=0&theme=light&modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0&vq=hd1080'
    }
];