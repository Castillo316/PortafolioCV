/*================================= FLOATING THEME TOGGLE ========================================*/

const styleSwitcherToggle = document.querySelector(".floating-theme-toggle");
const styleSwitcherPanel = document.querySelector(".floating-theme-panel");

if(styleSwitcherToggle && styleSwitcherPanel)
{
    styleSwitcherToggle.addEventListener("click", () =>
    {
        styleSwitcherPanel.classList.toggle("open");
    });
}

/*================================= HIDE PANEL ON SCROLL ========================================*/

window.addEventListener("scroll", () =>
{
    if(styleSwitcherPanel && styleSwitcherPanel.classList.contains("open"))
    {
        styleSwitcherPanel.classList.remove("open");
    }
});

/*================================= THEME COLORS ========================================*/

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color)
{
    alternateStyles.forEach((style) =>
    {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    });
}

/*================================= DARK / LIGHT MODE ========================================*/

const dayNight = document.querySelector(".day-night");

if(dayNight)
{
    const icon = dayNight.querySelector("i");

    dayNight.addEventListener("click", () =>
    {
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark"))
        {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
        else
        {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });

    /* ICONO INICIAL */

    if(document.body.classList.contains("dark"))
    {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    else
    {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}





