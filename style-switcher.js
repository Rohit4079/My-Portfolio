/* toggle style switcher*/ 
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

const navToggle = document.querySelector(".nav-toggler");
navToggle.addEventListener("click", () =>{
    document.querySelector(".aside").classList.toggle("open");
})
// hide aside - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".aside").classList.contains("open"))
    {
        document.querySelector(".aside").classList.remove("open")
    }
})


/* theme colors */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/* theme light and Dark mode */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

