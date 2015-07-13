var frames = {
    name: 'scrollanimation',
    '0%': {
        transform: "translateY(0px)"
    },
    '2%': {
        transform: "translateY(0px)"
    },
    '94%': {
        transform: "translateY(-5000px)"
    },
    '96%': {
        transform: "translateY(-5000px)"
    },
    '100%': {
        transform: "translateY(0px)"
    }
};

function newspaper(news) {
    var i = 0,
        items = news.query.results.item.slice(0, 5),
        count = items.length,
        list = document.getElementById('newslist'),
        li = '<li><div class="title">{title}</div><div class="desc">{description}</div></li>',
        html = [];
    for (i = 0; i < count; i++) {
        html.push(li.replace('{title}', items[i].title).replace('{description}', items[i].description));
    }
    list.innerHTML = html.join('');
    setTimeout(function() {
        var scrollHeight = $('#newslist').height() - window.innerHeight;
        var value = "translateY(-" + scrollHeight + "px)"
        frames['94%'].transform =  frames['96%'].transform = value;

        $.keyframe.define([frames]);
        $("#newslist").playKeyframe({
            name: 'scrollanimation',
            duration: '60s',
            delay: '0',
            iterationCount: 'infinite',
            timingFunction: 'linear'
        });
    }, 1000);

}