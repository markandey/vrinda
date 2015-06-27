var W = window.innerWidth;
var H = window.innerHeight;

function init() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    drawClock();
}

function drawClock() {
    var stage = new createjs.Stage("canvas"),
        text;

    function updateTime() {
        var time = (new Date()).toLocaleTimeString();
        if (text) {
            stage.removeChild(text);
        }
        text = new createjs.Text(time, "" + (H / 2) + "px Courier", "#00ff00");
        text.x = 0;
        text.maxWidth = (W - 20);
        text.y = H / 2 - text.getMeasuredHeight();
        if (text.getMeasuredWidth() > (W - 20)) {
            text.x = 0;
        } else {
            text.x = (W - text.getMeasuredWidth()) / 2;
        }

        text.textBaseline = "top";
        stage.addChild(text);
        stage.update();
    }
    updateTime();
    setInterval(updateTime,500)
}