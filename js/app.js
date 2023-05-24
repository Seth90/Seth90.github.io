const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

let AgeCounter = (el) => {
    //console.log('agecounter');
    let counts = setInterval(updated, 35);
    let upto = 0;
    function updated() {
        el.innerHTML = upto < 9 ? '0' + ++upto : ++upto;
        if (upto === 33) {
            clearInterval(counts);
        }
    }
}

var element = document.querySelector('#age');
var done = false;
var Visible = function (target) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    };
    windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };
    console.log(targetPosition.bottom, windowPosition.top)
    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom) {
        console.log('visible2');
        if (!done) {
            AgeCounter(element); done = true;
        }
    } else {
        element.innerHTML = 0;
        done = false;
    };
};

window.addEventListener('scroll', function () {
    Visible(element);
});

Visible(element);