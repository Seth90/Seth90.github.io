let m_menu = document.querySelector('.home-mobile-menu');
let mobile = document.querySelector('.mobile');
let home = document.querySelector('.home');
let upbtn = document.querySelector('.upbtn');
let header = document.querySelector('#header');
var element = document.querySelector('#age');
let dn = document.querySelector('.header-day-night');
var done = false;
let isNight = false;
let scrolled = false;

// Smooth scroll to ID-tag
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
//-----------------------------------------

// Mobile menu hide/open
home.addEventListener('click', function (e) {
    //e.stopPropagation();
    if (!mobile.classList.contains('hidden')) {
        mobile.classList.add('hidden');
    }
})
mobile.addEventListener('click', (e) => {
    //e.stopPropagation();
    mobile.classList.toggle('hidden');
})
m_menu.addEventListener('click', function (e) {
    e.stopPropagation();
    //console.log('m_menu');
    mobile.classList.toggle('hidden');
})
//-----------------------------------------

// Age animation
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
//-----------------------------------------

// To-up-button show/hide
let ScrollUp = () => {
    if (!CheckVisible(home)) {
        upbtn.style.setProperty("display", "block");
    }
    else if (CheckVisible(header)) {
        upbtn.style.setProperty("display", "none");
    }
}
//-----------------------------------------

// Checking visibility of target
let CheckVisible = (target) => {
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
            return true;
    }
    else {
        return false
     }
}
//-----------------------------------------

// For age animation
var Visible = function (target) {
    if (CheckVisible(target)) {
        if (!done) {
            AgeCounter(element); done = true;
        }
    } else {
        element.innerHTML = 0;
        done = false;
    };
};
//-----------------------------------------

window.addEventListener('scroll', function () {
    Visible(element);
    ScrollUp();
});

Visible(element);

// Swiper
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

//Dark/light switch
let LightSwitch = () => {
    console.log('ls');
    if (!isNight) {
        document.documentElement.style.setProperty("-invert-font-color", "#ffffff");
        document.documentElement.style.setProperty("--main-font-color", "#292929");
        document.documentElement.style.setProperty("--backgroud-main", "#ffffff");
        document.documentElement.style.setProperty("--background-add", "#dedede");
        document.documentElement.style.setProperty("--shadow-text-color-add", "#484848");
        isNight = true;
    } else {
        document.documentElement.style.setProperty("-invert-font-color", "#000");
        document.documentElement.style.setProperty("--main-font-color", "#ffffff");
        document.documentElement.style.setProperty("--backgroud-main", "#000");
        document.documentElement.style.setProperty("--background-add", "#292929");
        document.documentElement.style.setProperty("--shadow-text-color-add", "#484848");
        isNight = false;
    }
}

dn.addEventListener('click', function(e) {
    LightSwitch();
})
//-----------------------------------------

//Change main color
let SetColor = (color) => {
    console.log('SetColor');
    switch (color) {
        case 'green': {
            document.documentElement.style.setProperty("--active", "#13FF00");
            document.documentElement.style.setProperty("--swiper-theme-color", "#13FF00");
            document.documentElement.style.setProperty("--filter", "invert(55%) sepia(94%) saturate(300%) hue-rotate(68deg) brightness(140%) contrast(150%)");
            break;
        }
        case 'orange': {
            document.documentElement.style.setProperty("--active", "#ff8800");
            document.documentElement.style.setProperty("--swiper-theme-color", "#ff8800");
            document.documentElement.style.setProperty("--filter", "invert(61%) sepia(27%) saturate(6218%) hue-rotate(0deg) brightness(102%) contrast(102%)");
            break;
        }
        case 'red': {
            document.documentElement.style.setProperty("--active", "#ff4040");
            document.documentElement.style.setProperty("--swiper-theme-color", "#ff4040");
            document.documentElement.style.setProperty("--filter", "invert(43%) sepia(91%) saturate(3300%) hue-rotate(335deg) brightness(100%) contrast(110%)");
            break;
        }
        case 'blue': {
            document.documentElement.style.setProperty("--active", "#0084ff");
            document.documentElement.style.setProperty("--swiper-theme-color", "#0084ff");
            document.documentElement.style.setProperty("--filter", "invert(32%) sepia(99%) saturate(2683%) hue-rotate(196deg) brightness(105%) contrast(104%)");
            break;
        }
        case 'purple': {
            document.documentElement.style.setProperty("--active", "#ff00ff");
            document.documentElement.style.setProperty("--swiper-theme-color", "#ff00ff");
            document.documentElement.style.setProperty("--filter", "invert(22%) sepia(99%) saturate(6190%) hue-rotate(299deg) brightness(123%) contrast(118%)");
            break;
        }

    }
}