// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();
let button=$('.player__button').first();

let a=0;
button.on("click", () => {
    if (a === 0) {
        player.get(0).play()
        a = 1
        button.html('\u23f8')
    }
    else {
        player.get(0).pause()
        a = 0
        button.html('►')
    }
})

player.on('timeupdate', function () {
    let progress = (this.currentTime / this.duration) * 100;
    $('.progress__filled').css('width', progress + '%')
});