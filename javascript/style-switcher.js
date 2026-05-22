```javascript id="d8u2m1"
/*================================= FLOATING THEME TOGGLE ========================================*/

const floatingTheme = document.querySelector(".floating-theme");
const styleSwitcherToggle = document.querySelector(".floating-theme-toggle");

let hoverTimeout;

if(floatingTheme && styleSwitcherToggle)
{
    /* CLICK TOGGLE */

    styleSwitcherToggle.addEventListener("click", () =>
    {
        floatingTheme.classList.toggle("open");
    });

    /* HOVER SHOW */

    floatingTheme.addEventListener("mouseenter", () =>
    {
        clearTimeout(hoverTimeout);

        floatingTheme.classList.add("open");
    });

    /* HOVER HIDE AFTER 5s */

    floatingTheme.addEventListener("mouseleave", () =>
    {
        hoverTimeout = setTimeout(() =>
        {
            floatingTheme.classList.remove("open");
        }, 5000);
    });
}

/*================================= HIDE PANEL ON SCROLL ========================================*/

function hideThemePanel()
{
    if(floatingTheme && floatingTheme.classList.contains("open"))
    {
        floatingTheme.classList.remove("open");
    }
}

/* PC SCROLL */

window.addEventListener("scroll", hideThemePanel);

/* MOBILE TOUCH SCROLL */

window.addEventListener("touchmove", hideThemePanel);

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
```





