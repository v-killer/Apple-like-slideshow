var allButtons = $('#buttons > div')

for (i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index() 
        var p = index * -920  
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

var n = 0;
var size = allButtons.length
playSlide(n % size)


var timeId = setTimer()


$('.wrapper').on('mouseenter', function () {
    window.clearInterval(timeId)
})
$('.wrapper').on('mouseleave', function () {
    timeId = setTimer()
})

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function activeButton($div) {
    $div
        .addClass('red')
        .siblings('.red').removeClass('red')
}

function setTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 2000)
}