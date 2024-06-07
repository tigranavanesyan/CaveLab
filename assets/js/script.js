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
        slider1.disable()
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
        slider1.enable()
        
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
        slider1.disable()
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
        slider1.enable()
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
    "t1": {
        eng: "discover explore, create",
        ru: "обнаружить изучать создавать",
        arm: "Բացահայտեք, ուսումնասիրեք, ստեղծեք",
    },
    "t2": {
        eng: "Start your engineering journey",
        ru: "Начните свой инженерный путь",
        arm: "Սկսեք Ձեր ինժեներական ճանապարհորդությունը",
    },
    "t3": {
        eng: "Technical skills",
        ru: "Технические навыки",
        arm: "Տեխնիկական հմտություններ",
    },
    "t4": {
        eng: "Creativity and innovation",
        ru: "Креативность и инновации",
        arm: "Ստեղծարարություն և նորարարություն",
    },
    "t5": {
        eng: "Professional connections and interactions",
        ru: "Профессиональные связи и взаимодействие",
        arm: "Մասնագիտական կապեր և փոխազդեցություններ",
    },
    "t3-2": {
        eng: "Technical skills",
        ru: "Технические навыки",
        arm: "Տեխնիկական հմտություններ",
    },
    "t4-2": {
        eng: "Creativity and innovation",
        ru: "Креативность и инновации",
        arm: "Ստեղծարարություն և նորարարություն",
    },
    "t5-2": {
        eng: "Professional connections and interactions",
        ru: "Профессиональные связи и взаимодействие",
        arm: "Մասնագիտական կապեր և փոխազդեցություններ",
    },
    "t3-3": {
        eng: "Technical skills",
        ru: "Технические навыки",
        arm: "Տեխնիկական հմտություններ",
    },
    "t4-3": {
        eng: "Creativity and innovation",
        ru: "Креативность и инновации",
        arm: "Ստեղծարարություն և նորարարություն",
    },
    "t6": {
        eng: "Educational program",
        ru: "Образовательная программа",
        arm: "Կրթական ծրագիր",
    },
    "t7": {
        eng: "Students of the CaveLaby educational program will gain solid technical skills, including robotics, 3D printing, mechanical equipment usage, soldering, and microcontroller programming. They will have the opportunity to specialize in their chosen field, undertake complex engineering projects, and develop creative thinking. The program will enhance their self-confidence, teamwork skills, and opportunities for networking in the engineering field.",
        ru: "Учащиеся образовательной программы CaveLab получат основательные технические навыки, включая робототехнику, 3D-печать, использование механических устройств, пайку и программирование микроконтроллеров. Они смогут специализироваться в выбранной ими области, выполнять сложные инженерные проекты и развивать творческое мышление. Программа повысит их уверенность в себе, навыки командной работы и возможности установления связей в инженерной сфере.",
        arm: "CaveLab-ը կրթական ծրագրից աշակերտները կստանան հիմնավոր տեխնիկական հմտություններ, ներառյալ ռոբոտաշինություն, 3D տպագրություն, մեխանիկական սարքավորումների օգտագործում, զոդում և միկրոկոնտրոլերների ծրագրավորում։ Նրանք հնարավորություն կունենան մասնագիտանալ իրենց նախընտրած ոլորտում, իրականացնել բարդ ինժեներական նախագծեր և զարգացնել ստեղծարար մտածողություն։ Ծրագիրը կզարգացնի նրանց ինքնավստահությունը, թիմային աշխատանքի հմտությունները և կապեր հաստատելու հնարավորությունները ինժեներական ոլորտում։",
    },
    "t8": {
        eng: "First phase",
        ru: "Первая фаза",
        arm: "Առաջին փուլ",
    },
    "t9": {
        eng: "In the first phase, students will get acquainted with various fields of engineering and acquire basic technical skills. The courses will include practical sessions that will help them understand and apply engineering principles. This phase aims to provide students with the necessary knowledge and experience to undertake complex projects in the second phase.",
        ru: "На первом этапе учащиеся познакомятся с различными областями инженерии и приобретут базовые технические навыки. Курсы будут включать практические занятия, которые помогут им понять и применить инженерные принципы. Этот этап направлен на предоставление учащимся необходимых знаний и опыта для выполнения сложных проектов на втором этапе.",
        arm: "Առաջին փուլում աշակերտները կծանոթանան ինժեներական տարբեր ոլորտներին և ձեռք կբերեն հիմանական տեխնիկական հմտություններ։ Դասընթացները կներառեն գործնական պարապմունքներ, որոնք կօգնեն նրանց հասկանալ և կիրառել ինժեներական սկզբունքները։ Այս փուլը նպատակ ունի աշակերտներին տրամադրել անհրաժեշտ գիտելիքներ և փորձ՝ երկրորդ փուլում բարդ նախագծեր իրականացնելու համար։",
    },
    "t10": {
        eng: "Lego Mindstorms",
        ru: "Lego Mindstorms",
        arm: "Lego Mindstorms",
    },
    "t11": {
        eng: "Construction and programming of robots",
        ru: "Сборка и программирование роботов",
        arm: "Ալգորիթմական մտածողության զարգացում",
    },
    "t12": {
        eng: "Integration of sensors and motors",
        ru: "Интеграция сенсоров и двигателей",
        arm: "Սենսորների և շարժիչների ինտեգրում",
    },
    "t13": {
        eng: "Development of algorithmic thinking",
        ru: "Развитие алгоритмического мышления",
        arm: "Ռոբոտների կառուցում և ծրագրավորում",
    },
    "t14": {
        eng: "2-3 month",
        ru: "2-3 месяца",
        arm: "2-3 ամիս",
    },
    "t15": {
        eng: "Work with machines",
        ru: "Работа с электроникой",
        arm: "Հաստոցների հետ աշխատանք",
    },
    "t16": {
        eng: "Learning how to work with schools",
        ru: "Обучение работе с электроникой",
        arm: "Սովորել, ինչպես աշխատել հաստոցների հետ",
    },
    "t17": {
        eng: "Maintenance of safety regulations",
        ru: "Соблюдение правил безопасности",
        arm: "Անվտանգության կանոնների պահպանում",
    },
    "t18": {
        eng: "Technical aspects of producing different materials",
        ru: "Технологии изготовления различных материалов",
        arm: "Սովորել, ինչպես աշխատել հաստոցների հետ",
    },
    "t19": {
        eng: "2-3 month",
        ru: "2-3 месяца",
        arm: "2-3 ամիս",
    },
    "t20": {
        eng: "Arduino",
        ru: "Arduino",
        arm: "Arduino",
    },
    "t21": {
        eng: "Fundamentals of programming",
        ru: "Основы программирования",
        arm: "Հիմնական ծրագրավորման հմտություններ",
    },
    "t22": {
        eng: "Principles of working with microcontrollers",
        ru: "Принципы работы с микроконтроллерами",
        arm: "Սենսորների և ակտիվատորների ինտեգրում",
    },
    "t23": {
        eng: "Principles of working with microcontrollers",
        ru: "Принципы работы с микроконтроллерами",
        arm: "Միկրոկոնտրոլերների հետ աշխատելու սկզբունքներ",
    },
    "t24": {
        eng: "2-3 month",
        ru: "2-3 месяца",
        arm: "2-3 ամիս",
    },
    "t25": {
        eng: "3D Modeling",
        ru: "3D моделирование",
        arm: "Եռաչափ մոդելավորում",
    },
    "t26": {
        eng: "Utilization of 3D modeling software (e.g., Tinkercad, Fusion 360)",
        ru: "Использование программ для 3D моделирования",
        arm: "3D մոդելավորման ծրագրերի օգտագործում",
    },
    "t27": {
        eng: "2-3 month",
        ru: "2-3 месяца",
        arm: "2-3 ամիս",
    },
    "t28": {
        eng: "Soldering skills",
        ru: "Паяльные навыки",
        arm: "Զոդման հմտություններ",
    },
    "t29": {
        eng: "Basic technologies and soldering tools",
        ru: "Основные технологии и инструменты пайки",
        arm: "Զոդման որակի ստուգում և շտկում",
    },
    "t30": {
        eng: "Integration of electronic components",
        ru: "Интеграция электронных компонентов",
        arm: "Էլեկտրոնային բաղադրիչների միացում",
    },
    "t31": {
        eng: "",
        ru: "",
        arm: "",
    },
    "t32": {
        eng: "Quality testing and troubleshooting of rations",
        ru: "Проверка и отладка качества пайки",
        arm: "Զոդման հիմնական տեխնիկաներ և գործիքներ",
    },
    "t33": {
        eng: "2-3 month",
        ru: "2-3 месяца",
        arm: "2-3 ամիս",
    },
    "t34": {
        eng: "3D Printing",
        ru: "3D печать",
        arm: "Եռաչափ տպագրություն",
    },
    "t35": {
        eng: "Techniques for 3D printing of models",
        ru: "Технологии печати 3D моделей",
        arm: "3D մոդելների տպագրության տեխնիկաներ",
    },
    "t36": {
        eng: "Selection of printing materials and technologies",
        ru: "Выбор материалов и технологий печати",
        arm: "Տպագրական նյութերի և տեխնոլոգիաների ընտրություն",
    },
    "t37": {
        eng: "2-3 month",
        ru: "2-3 месяца",
        arm: "2-3 ամիս",
    },
    "t38": {
        eng: "second phase",
        ru: "Вторая фаза",
        arm: "Երկրորդ փուլ",
    },
    "t39": {
        eng: "fields",
        ru: "областей",
        arm: "ոլորտ",
    },
    "t40": {
        eng: "In the second phase, students will engage in project-based learning, implementing complex engineering projects",
        ru: "На втором этапе учащиеся будут заниматься проектным обучением, реализуя сложные инженерные проекты.",
        arm: "Երկրորդ փուլում աշակերտները կզբաղվեն նախագծային ուսուցմամբ, իրականացնելով բարդ ինժեներական նախագծեր։",
    },
    "t41": {
        eng: "Students will be able to apply their knowledge by implementing innovative projects and solving technical problems in various fields. Additionally, their skills will help them quickly integrate into the job market and excel in their profession.",
        ru: "Учащиеся смогут применить свои знания, реализуя инновационные проекты и решая технические проблемы в различных областях. Кроме того, их навыки помогут им быстро интегрироваться в рынок труда и совершенствоваться в своей профессии.",
        arm: "Աշակերտները կկարողանան կիրառել իրենց գիտելիքները նորարար նախագծերի իրականացմամբ՝ լուծելով տարբեր ոլորտների տեխնիկական խնդիրներ։ Բացի այդ, իրենց հմտությունները կօգնեն արագ ինտեգրվել աշխատաշուկայում և կատարելագործվել իրենց մասնագիտության մեջ։",
    },
    "t42": {
        eng: "Join our course",
        ru: "Присоединяйтесь к нашему курсу",
        arm: "Միացիր մեր դասընթացին",
    },
    "t43": {
        eng: "Register",
        ru: "Регистрироваться",
        arm: "Գրանցվել",
    },
    "t44": {
        eng: "About us",
        ru: "О нас",
        arm: "Մեր մասին",
    },
    "t45": {
        eng: "CaveLab is an engineering educational laboratory aimed at developing and enhancing children's technical skills by introducing them to various fields of engineering. Our mission is to contribute to the formation of an innovative and knowledge-based society by providing quality education and practical experience. We strive to prepare high-level specialists who will be able to contribute to the development of Armenia's economy and production.",
        ru: "CaveLab — это инженерная образовательная лаборатория, целью которой является развитие и совершенствование технических навыков детей, знакомя их с различными областями инженерии. Наша миссия — способствовать формированию инновационного и знаний-ориентированного общества, обеспечивая качественное образование и практический опыт. Мы стремимся подготовить высококлассных специалистов, которые смогут внести вклад в развитие экономики и производства Армении.",
        arm: "CaveLab-ը ինժեներական կրթական լաբորատորիա է, որը նպատակ ունի զարգացնել և կատարելագործել երեխաների տեխնիկական հմտությունները՝ նրանց ծանոթացնելով ինժեներական տարբեր ոլորտներին։ Մեր առաքելությունն է նպաստել նորարար և գիտելիքահեն հասարակության ձևավորմանը՝ ապահովելով որակյալ կրթություն և պրակտիկ փորձ։ Մենք ձգտում ենք պատրաստել բարձրակարգ մասնագետներ, ովքեր կկարողանան ներդրում ունենալ Հայաստանի տնտեսության և արտադրության զարգացման գործում։",
    },
    "t46": {
        eng: "Teaching staff",
        ru: "Преподавательский состав",
        arm: "Դասավանդող անձնակազմը",
    },
    "t47": {
        eng: "Rima Avanesyan",
        ru: "Рима Аванесян",
        arm: "Ռիմա Ավանեսյան",
    },
    "t48": {
        eng: "Team leader",
        ru: "преподаватель",
        arm: "Խմբակավար",
    },
    "t49": {
        eng: "Harutyun Daraxchyan",
        ru: "Арутюн Дарахчян",
        arm: "Հարություն Դարախչյան",
    },
    "t50": {
        eng: "Chief engineer",
        ru: "Главный инженер",
        arm: "Գլխավոր ինժեներ",
    },
    "t51": {
        eng: "Movses Hovsepyan",
        ru: "Мовсес Овсепян",
        arm: "Մովսես Հովսեփյան",
    },
    "t52": {
        eng: "Team leader",
        ru: "преподаватель",
        arm: "Խմբակավար",
    },
    "t53": {
        eng: "Technical skills",
        ru: "Технические навыки",
        arm: "Տեխնիկական հմտություններ",
    },
    "t54": {
        eng: "Creativity and innovation",
        ru: "Креативность и инновации",
        arm: "Ստեղծարարություն և նորարարություն",
    },
    "t55": {
        eng: "Professional connections and interactions",
        ru: "Профессиональные связи и взаимодействие",
        arm: "Մասնագիտական կապեր և փոխազդեցություններ",
    },
    "t56": {
        eng: "Conditions",
        ru: "Условия",
        arm: "ԿՐԹԱԿԱՆ ՓՈՒԼԵՐՆ ՈՒ ՊԱՅՄԱՆՆԵՐԸ",
    },
    "t57": {
        eng: "FIRST PHASE",
        ru: "ПЕРВЫй этап",
        arm: "ԱՌԱՋԻՆ ՓՈՒԼ",
    },
    "t58": {
        eng: "Technical fundamentals",
        ru: "Технические основы",
        arm: "Տեխնիկական հիմունքներ",
    },
    "t59": {
        eng: "Practical skills",
        ru: "Практические навыки",
        arm: "Գործնական հմտություններ",
    },
    "t60": {
        eng: "Creativity",
        ru: "Креативность",
        arm: "Ստեղծարարություն",
    },
    "t61": {
        eng: "Teamwork",
        ru: "Командная работа",
        arm: "Թիմային աշխատանք",
    },
    "t62": {
        eng: "Initial specialization",
        ru: "Первоначальная специализация",
        arm: "Նախնական մասնագիտացում",
    },
    "t63": {
        eng: "Safety rules",
        ru: "Правила безопасности",
        arm: "Անվտանգության կանոններ",
    },
    "t64-1": {
        eng: "Groups will consist of 10-15 students",
        ru: "Группы из 10-15 учеников",
        arm: "10-15 հոգի խմբում",
    },
    "t64-2": {
        eng: "Each month, 8-10 classes will be held, each lasting 1.5-2 hours",
        ru: "8-10 занятий в месяц длительностью 1,5-2 часа.",
        arm: "8-10 դաս՝ տևողությունը 1.5-2 ժամ։",
    },
    "t65": {
        eng: "֏",
        ru: "֏",
        arm: "Դ",
    },
    "t66": {
        eng: "MONTH",
        ru: "в месяц",
        arm: "ԱՄՍԱԿԱՆ",
    },
    "t67": {
        eng: "Second phase",
        ru: "Второй этап",
        arm: "Երկրորդ ՓՈՒԼ",
    },
    "t68": {
        eng: "Advanced professional knowledge",
        ru: "Углубленные профессиональные знания",
        arm: "Խորացված մասնագիտական գիտելիքներ",
    },
    "t69": {
        eng: "Project work",
        ru: "Проектная работа",
        arm: "Նախագծային աշխատանքներ",
    },
    "t70": {
        eng: "Teamwork",
        ru: "Командная работа",
        arm: "Թիմային աշխատանք",
    },
    "t71": {
        eng: "Innovation",
        ru: "Инновации",
        arm: "Նորարարություն",
    },
    "t72": {
        eng: "Practical experience",
        ru: "Практический опыт",
        arm: "Պրակտիկ փորձ",
    },
    "t73": {
        eng: "Professional connections",
        ru: "Профессиональные связи",
        arm: "Մասնագիտական կապեր",
    },
    "t74": {
        eng: "To participate in the second phase, students must successfully complete the first phase by submitting all assignments on time and with quality.",
        ru: "Для участия во втором этапе учащиеся должны успешно завершить первый этап",
        arm: "Երկրորդ փուլին մասնակցելու համար աշակերտները պետք է հաջողությամբ ավարտեն առաջին փուլը",
    },
    "t75": {
        eng: "JOIN OUR COURSE",
        ru: "Присоединяйтесь к нашему курсу",
        arm: "Միացիր մեր դասընթացին",
    },
    "t76": {
        eng: "Register",
        ru: "Зарегистрироваться",
        arm: "Գրանցվել",
    },
    "t76-2": {
        eng: "Register",
        ru: "Зарегистрироваться",
        arm: "Գրանցվել",
    },
    "t77": {
        eng: "Questions regarding purchase, payment and course content",
        ru: "Вопросы, связанные с оплатой и содержанием курса",
        arm: "Դասընթացի վճարման և բովանդակության հետ կապված հարցեր",
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
}
if(currentLang === 'ru' || currentLang === 'eng'){
    changeLang();
}
function changeLang2() {
    for (const key in currentTexts) {
        let elem = document.querySelectorAll(`[data-lang2=${key}]`);
        if(elem){
            elem.forEach((e)=>{
                e.textContent = currentTexts[key][currentLang];
            })
        }
    }
}
changeLang2()

langButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (!event.target.classList.contains("header__btn_active")) {
            currentLang = event.target.dataset.btn;
            localStorage.setItem("language", event.target.dataset.btn);
            resetActiveClass(langButtons, "header__btn_active");
            btn.classList.add("header__btn_active");
            changeLang();
            changeLang2()
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