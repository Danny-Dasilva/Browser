// light mode dark mode toggle
document.documentElement.setAttribute('data-theme', 'light')
lightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light')
}
darkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark')
}
// </light mode dark mode toggle

// nav click menus
const toggleMenu = (div, command) => {
    
    div.style.display = command === "show" ? "block" : "none";
}

const setPosition = (div, {top, left}, menuVisible) => {
    div.style.left = `${left}px`;
    div.style.top = `${top}px`;
    hideMenus()
    
    if(menuVisible) { 
        toggleMenu(div, "show");
    } else {
        toggleMenu(div, "hide")
    }
}
const displayMenu = (selector, menu) => {
    let toggle = document.getElementById(selector) 
    let div = document.getElementById(menu) 
    let offset = div.offsetWidth
    // (toggle.offsetLeft + toggle.offsetWidth)- offset,
    
    toggle.addEventListener('click', e => {
        // bool for whether or not the div placement is outside the viewport
        let outsideViewport = (toggle.offsetLeft > (window.innerHeight || document.documentElement.clientWidth))
        
        let menuVisible = true
        
        if (div.style.display === "block") {
            menuVisible = false
            console.log("false")
        } 
        console.log(menuVisible, div.style.display)

        // for double click on navbar menus
        if (outsideViewport) {
            let origin = {
                left: (toggle.offsetLeft + toggle.offsetWidth)- offset,
                top: toggle.offsetTop + 33,
            };
            setPosition(div, origin, menuVisible)
        } else {
            let origin = {
                left: toggle.offsetLeft ,
                top: toggle.offsetTop + 33,
            };
            setPosition(div, origin, menuVisible)
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
// </nav click menus


// context menu 
const menu = document.getElementById("context-menu");
let visible = true;


window.addEventListener("click", e => {
  if(visible)toggleMenu(menu, "hide");
});

window.addEventListener("contextmenu", e => {
  e.preventDefault();
  const origin = {
    left: e.pageX,
    top: e.pageY
  };
  setPosition(menu, origin, visible);
  return false;
});
