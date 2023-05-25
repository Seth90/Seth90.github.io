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
    //console.log(targetPosition.bottom, windowPosition.top)
    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom) {
        ///console.log('visible2');
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

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});


let SetColor = (color) => {
    console.log('SetColor');
    switch (color) {
        case 'green':{
            document.documentElement.style.setProperty("--active", "#13FF00");
            document.documentElement.style.setProperty("--swiper-theme-color", "#13FF00");
            document.documentElement.style.setProperty("--filter", "invert(55%) sepia(94%) saturate(300%) hue-rotate(68deg) brightness(140%) contrast(150%)");
            break;
        }
        case 'orange':{
            document.documentElement.style.setProperty("--active", "#ff8800");
            document.documentElement.style.setProperty("--swiper-theme-color", "#ff8800");
            document.documentElement.style.setProperty("--filter", "invert(61%) sepia(27%) saturate(6218%) hue-rotate(0deg) brightness(102%) contrast(102%)");
            break;
        }
        case 'red':{
            document.documentElement.style.setProperty("--active", "#ff4040");
            document.documentElement.style.setProperty("--swiper-theme-color", "#ff4040");
            document.documentElement.style.setProperty("--filter", "invert(43%) sepia(91%) saturate(3300%) hue-rotate(335deg) brightness(100%) contrast(110%)");
            break;
        }
        case 'blue':{
            document.documentElement.style.setProperty("--active", "#0084ff");
            document.documentElement.style.setProperty("--swiper-theme-color", "#0084ff");
            document.documentElement.style.setProperty("--filter", "invert(32%) sepia(99%) saturate(2683%) hue-rotate(196deg) brightness(105%) contrast(104%)");
            break;
        }
        case 'purple':{
            document.documentElement.style.setProperty("--active", "#ff00ff");
            document.documentElement.style.setProperty("--swiper-theme-color", "#ff00ff");
            document.documentElement.style.setProperty("--filter", "invert(22%) sepia(99%) saturate(6190%) hue-rotate(299deg) brightness(123%) contrast(118%)");
            break;
        }

    }
}