(function() {
    var state = {
        curLocation: "",
        curiFrame: document.getElementById('main1'),
        freeiFrame: document.getElementById('main2')
    };


    function ding() {
        var ding = new Audio("sound/ding.wav");

        ding.play();
        setTimeout(function() {
            ding.pause();
            ding.currentTime = 0;
        }, 2000);
    }
    function swapIframes (){
        var f = state.freeiFrame ;
        var a = state.curiFrame ;

        $(state.curiFrame).hide();
        $(state.freeiFrame).show();
        state.curiFrame = f;
        state.freeiFrame = a;
    }

    function setIframeTo(path) {
        if (state.curLocation !== path) {
            state.curLocation = state.freeiFrame.src = path;
            setTimeout(function(){
                swapIframes();
            },500);
        }
    }

    function run() {
        var count = timeSlots.length;
        for (var i = 0; i < count; i++) {
            if (timeSlots[i].isTime()) {
                setIframeTo(timeSlots[i].path);
                break
            }
        }
    }
    setInterval(run, 1000);
    setTimeout(function() {
        window.location.reload();
    }, 300000);
})();