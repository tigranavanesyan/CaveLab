new WOW().init();
let slider1 = new Swiper('.swiper1',{
    slidesPerView: 1,
    spaceBetween: 5,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 2000,
    breakpoints: {
        320: {
            slidesPerView: 1.2
        },
        400: {
            slidesPerView: 1.5
        },
        500: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2.5
        },
        992: {
            slidesPerView: 3
        },
    }
});
let slider2 = new Swiper('.swiper2',{
    slidesPerView: 1,
    spaceBetween: 5,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 2000,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        400: {
            slidesPerView: 1.2
        },
        500: {
            slidesPerView: 1.3
        },
        768: {
            slidesPerView: 1.5
        },
        992: {
            slidesPerView: 3
        },
    }
});




const scrollers = document.querySelectorAll(".scroller")
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true)

        const scrollerInner = scroller.querySelector(".scroller__inner")
        const scrollerContent = Array.from(scrollerInner.children)

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true)
            duplicatedItem.setAttribute("aria-hidden", true)
            scrollerInner.appendChild(duplicatedItem)
        });
    });
}
/*-----------burger start---------------*/
const burgerIcon = document.querySelector('.burger_icon')
const menu = document.querySelector('.menu')

const logo = document.querySelector('.logo_wrapper')
logo.addEventListener('click',()=>closeMenu())
burgerIcon.addEventListener('click',(e)=>{
    if(!e.currentTarget.classList.contains("active")){
        openMenu()
    } else {
        closeMenu()
    }
})
function openMenu(){
    burgerIcon.classList.add('active')
    document.body.classList.add("stop-scrolling")
    menu.classList.remove('hide_menu')
}
function closeMenu(){
    burgerIcon.classList.remove('active')
    document.body.classList.remove("stop-scrolling")
    menu.classList.add('hide_menu')
}

/*-----------burger end---------------*/

document.addEventListener("DOMContentLoaded", function() {
    let counterForFixingWidth = document.querySelector(".counterForFixingWidth")

    let counter1 = document.getElementById("counter")
    let count1 = 0
    let target1 = 10
    let increment1 = 1
    let interval1 = 180
    counterForFixingWidth.innerHTML=target1

    function updateCounter() {
        if (count1 < target1) {
            count1 += increment1
            counter1.textContent = count1
            setTimeout(updateCounter, interval1)
        } else {
            counter1.textContent = target1
        }
    }
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.unobserve(entry.target); // Stop observing after the counter starts
            }
        });
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(counterForFixingWidth);


    if(!window.matchMedia("(max-width: 1024px)").matches){
        slider1.activeIndex=0
        slider1.autoplay.stop()
        setTimeout(()=>{
            const firstScreen = document.querySelector(".first_screen")
            firstScreen.style.gridTemplateColumns = "3fr 2fr"
        },1000)
        setTimeout(()=>{
            const discoverBlock = document.querySelector(".discover_block")
            discoverBlock.style.display = "grid"
        },1500)
    } else {
        slider1.autoplay.start()
        
    }
});

// Fixed header and active link functionality
let lastScrollTop = 0
const fixedHeader = document.querySelector(".header_fixed")
const navSections = document.querySelectorAll(".nav_section")
const navLinks = document.querySelectorAll(".menu li a")

navLinks.forEach((l)=>{
    l.addEventListener('click',()=>{
        closeMenu()

        setTimeout(async ()=>{
            fixedHeader.style.top = "-85px"

        },1000)
    })
})
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    // Handle fixed header appearance

    if(!burgerIcon.classList.contains("active")){
        if (scrollTop > lastScrollTop) {
            fixedHeader.style.top = "-85px"
        } else {
            fixedHeader.style.top = "0px"
        }
        lastScrollTop = scrollTop
    }


    // Handle active link highlighting
    navSections.forEach(sec => {
        let offset = sec.offsetTop
        let id = sec.getAttribute('id')
        let windowHeight = window.innerHeight

        if (scrollTop >= offset - windowHeight/2) {
            navLinks.forEach(link => {
                link.classList.remove('active')
            });

            let activeLink = document.querySelector(`.menu li a[href*="${id}"]`)
            if (activeLink) {
                activeLink.classList.add('active')
            }
        }
    });
});
const onresize = function(e) {
    let menuItemsBlock = document.querySelector(".menu_items")

    if(!window.matchMedia("(max-width: 1024px)").matches && burgerIcon.classList.contains("active")){
        closeMenu()

    }
    if(!window.matchMedia("(max-width: 1024px)").matches){
        slider1.activeIndex=0
        slider1.autoplay.stop()
        slider2.activeIndex=0
        slider2.autoplay.stop()
        setTimeout(()=>{
            const firstScreen = document.querySelector(".first_screen")
            firstScreen.style.gridTemplateColumns = "3fr 2fr"
        },1000)
        setTimeout(()=>{
            const discoverBlock = document.querySelector(".discover_block")
            discoverBlock.style.display = "grid"
        },1500)
    } else {
        slider1.autoplay.start()
        slider2.autoplay.start()

        const firstScreen = document.querySelector(".first_screen")
        firstScreen.style.gridTemplateColumns = "1fr"

        const discoverBlock = document.querySelector(".discover_block")
        discoverBlock.style.display = "none"
    }
}
window.addEventListener("resize", onresize);

let stages = document.querySelector('.stages')
stages.addEventListener('mouseenter',()=>{
    slider1.autoplay.stop()
})
stages.addEventListener('mouseleave',()=>{
    if(window.matchMedia("(max-width: 1024px)").matches){
        slider1.autoplay.start()
    }
})

let teachers = document.querySelector('.swiper2')
teachers.addEventListener('mouseenter',()=>{
    slider2.autoplay.stop()
})
teachers.addEventListener('mouseleave',()=>{
    if(window.matchMedia("(max-width: 1024px)").matches){
        slider2.autoplay.start()
    }
})

/*---------------------lang start--------------------*/
const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["eng", "ru", "arm"];
let currentLang = localStorage.getItem("language") || "arm";
const body = document.querySelector('body')


const currentTexts = {
    "menu_item-1": {
        eng: "Educational Program",
        ru: "Образовательная программа",
        arm: "Կրթական ծրագիր",
    },
    "menu_item-2": {
        eng: "about us",
        ru: "О нас",
        arm: "Մեր մասին",
    },
    "menu_item-3": {
        eng: "Conditions",
        ru: "Условия",
        arm: "Պայմաններ",
    },
    "menu_item-4": {
        eng: "Contact",
        ru: "Контакт",
        arm: "Կոնտակտ",
    },
};


function changeLang() {
    for (const key in currentTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = currentTexts[key][currentLang];
        }
    }
    body.classList.remove('arm')
    body.classList.remove('ru')
    body.classList.remove('eng')
    body.classList.add(`${currentLang}`)

    console.log(`language changed to ${currentLang}`)
}
if(currentLang === 'ru' || currentLang === 'eng'){
    changeLang();
}


langButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (!event.target.classList.contains("header__btn_active")) {
            currentLang = event.target.dataset.btn;
            localStorage.setItem("language", event.target.dataset.btn);
            resetActiveClass(langButtons, "header__btn_active");
            btn.classList.add("header__btn_active");
            changeLang();
        }
    });
});

// Сброс активного класса у переданного массива элементов

function resetActiveClass(arr, activeClass) {
    arr.forEach((elem) => {
        elem.classList.remove(activeClass);
    });


}

// Проверка активной кнопки
function checkActiveLangButton() {

    switch (currentLang) {
        case "eng":
            document
                .querySelector('[data-btn="eng"]')
                .classList.add("header__btn_active");
            break;
        case "ru":
            document
                .querySelector('[data-btn="ru"]')
                .classList.add("header__btn_active");

            break;
        case "arm":
            document
                .querySelector('[data-btn="arm"]')
                .classList.add("header__btn_active");

            break;

        default:
            document
                .querySelector('[data-btn="arm"]')
                .classList.add("header__btn_active");
            break;
    }
}
checkActiveLangButton();

/*---------------------lang end--------------------*/