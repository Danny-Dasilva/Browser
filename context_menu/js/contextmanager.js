document.documentElement.setAttribute('data-theme', 'light')
lightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light')
}
darkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark')
}
// light mode dark mode toggle

let menuDisplay = false
const toggleMenu = (div, command) => {
    div.style.display = command === "show" ? "block" : "none";

}
let currentdiv = null
const setPosition = (div, {top, left}) => {
    div.style.left = `${left}px`;
    div.style.top = `${top}px`;
    hideMenus()
    toggleMenu(div, "show");
    currentdiv = div
    menuDisplay = true
    console.log("called1")
}
window.addEventListener('mouseup', function(e) {
    console.log("called")
});



const displayMenu = (selector, menu) => {
    let toggle = document.getElementById(selector) 
    let display = document.getElementById(menu) 
    let offset = display.offsetWidth
    // (toggle.offsetLeft + toggle.offsetWidth)- offset,
    
    toggle.addEventListener('click', e => {
        // bool for whether or not the div placement is outside the viewport
        let outsideViewport = (toggle.offsetLeft > (window.innerHeight || document.documentElement.clientWidth))
        if (outsideViewport) {
            let origin = {
                left: (toggle.offsetLeft + toggle.offsetWidth)- offset,
                top: toggle.offsetTop + 33,
            };
            setPosition(display, origin)
        } else {
            let origin = {
                left: toggle.offsetLeft ,
                top: toggle.offsetTop + 33,
            };
            setPosition(display, origin)
        }  
    })
}

const menus = {
    "security": "security-menu",
    "profile": "profile-menu",
    "settings": "settings-menu",
}
for (const [key, value] of Object.entries(menus)) {
    displayMenu(key, value)
}
const hideMenus = () => {
    for (const [key, value] of Object.entries(menus)) {
        div = document.getElementById(value)
        toggleMenu(div, "hide")
        
    }
}