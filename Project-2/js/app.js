/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/


const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
// const index = sections.length;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

isCloseToSectionStart = () => { 
    let index = sections.length;
    return (--index && window.scrollY + 20 < sections[index].offsetTop);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

buildNav = () => {

    for (let iterator of sections) {
        let link = document.createElement("li");
        link.className = "menu__link";
        link.dataset.nav = iterator.id;
        link.innerText = iterator.dataset.nav;

        navBar.appendChild(link);
        
    }
    
}
// Add class 'active' to section when near top of viewport

activeLink = () => {
    
    while(isCloseToSectionStart()) {
            // Set all sections inactive
        let index = sections.length;

        for(let iterator of sections) {
            if (iterator.classList.contains("your-active-class") === true) {
                iterator.classList.remove("your-active-class");
            }
        }

        //Get list elements from the dom
        const active = document.querySelectorAll('li');

        // Set all header lists as inactive
        for (let iterator of active) {
            if(iterator.classList.contains("active") === true) {
                iterator.classList.remove("active");
            }
        }

        // Set current section active
        console.log(sections);
        console.log(index);
        sections[index].classList.add("your-active-class");

        //Set current list element as active
        active[index].classList.add("active");
        }
    
}

// Scroll to anchor ID using scrollTO event

scrollToAnchor = (event) => {
    event.preventDefault();
    const clicked = document.querySelector("#" + event.target.dataset.nav);
clicked.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click
navBar.addEventListener("click",scrollToAnchor);
// Set sections as active
window.addEventListener("scroll", activeLink);



