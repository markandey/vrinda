var frames = {
    name: 'scrollanimation',
    '0%': {
        transform: "translateY(0px)"
    },
    '100%': {
        transform: "translateY(100px)"
    }
}

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
            frames['100%'].transform=value;

            $.keyframe.define([frames]);
            $("#newslist").playKeyframe({
                name: 'scrollanimation',
                duration: '60s',
                 delay: '1s',
                 iterationCount: 'infinite',
                timingFunction: 'linear'
            });
        }, 100);

    }