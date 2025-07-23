
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = document.querySelector('i')

menuBtn.addEventListener("click", () =>{
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    
    menuBtnIcon.setAttribute(
        "class",
        isOpen? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener('click', ()=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute('class', "ri-menu-3-line");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    // hiện mờ mờ 1 lần
    delay: 1000,
});
ScrollReveal().reveal(".hotel__card", {
    ...scrollRevealOption,
    //Hiện mờ mờ lần lượt
    interval: 500,
});
ScrollReveal().reveal(".steps__grid", {
    ...scrollRevealOption,
    //Hiện mờ mờ lần lượt
    interval: 500,
});

//slider chay lien tuc
const inspiration = document.querySelector(".inspiration__wrapper")
console.log(inspiration.children)
const inspirationImages = Array.from(inspiration.children)

inspirationImages.forEach(item=>{
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    inspiration.appendChild(duplicateNode);
})

ScrollReveal().reveal(".property__card", {
    ...scrollRevealOption,
    //Hiện mờ mờ lần lượt
    interval: 500,
});
ScrollReveal().reveal(".trip__card", {
    ...scrollRevealOption,
    //Hiện mờ mờ lần lượt
    interval: 500,
});
