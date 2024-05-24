new WOW().init();
setTimeout(()=>{
    const firstScreen = document.querySelector(".first_screen")
    firstScreen.style.gridTemplateColumns = "3fr 2fr"
},1000)
setTimeout(()=>{
    const discoverBlock = document.querySelector(".discover_block")
    discoverBlock.style.display = "grid"
},1500)


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

document.addEventListener("DOMContentLoaded", function() {
    let counterForFixingWidth = document.querySelector(".counterForFixingWidth")

    let counter1 = document.getElementById("counter")
    let count1 = 0
    let target1 = 85
    let increment1 = 1
    let interval1 = 80
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
    updateCounter()
});

// Fixed header and active link functionality
let lastScrollTop = 0
const fixedHeader = document.querySelector(".header_fixed")
const navSections = document.querySelectorAll(".nav_section")
const navLinks = document.querySelectorAll(".menu li a")

navLinks.forEach((l)=>{
    l.addEventListener('click',()=>{
        setTimeout(()=>{
            fixedHeader.style.top = "-85px"
        },1000)
    })
})
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    // Handle fixed header appearance
    if (scrollTop > lastScrollTop) {
        fixedHeader.style.top = "-85px"
    } else {
        fixedHeader.style.top = "0px"
    }
    lastScrollTop = scrollTop

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

