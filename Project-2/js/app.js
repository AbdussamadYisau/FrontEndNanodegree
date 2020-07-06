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

navBar = document.querySelector('#navbar__list');
sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {

    for (let iterator of sections) {
        let link = document.createElement("li");
        link.className = "menu__link";
        link.dataset.nav = iterator.id;
        link.innerText = iterator.dataset.nav;

        navBar.appendChild(link);
        
    }
    
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function scrollToAnchor() {
    navBar.addEventListener("click", function(event){
        event.preventDefault();
        const clicked = document.querySelector("#" + event.target.dataset.nav);
        clicked.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click
scrollToAnchor();
// Set sections as active


