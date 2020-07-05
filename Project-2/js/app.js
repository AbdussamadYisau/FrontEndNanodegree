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

navBar = document.querySelector('nav');
unordedList = navBar.querySelector('ul');

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

for (let index = 0; index < sections.length; index++) {
    let link = document.createElement('li');
    
    anchorTag = document.createElement('a');

    anchorTag.setAttribute("href", "#");

    anchorTag.innerHTML = `${sections[index].querySelector("h2").innerHTML}`;
    
    link.appendChild(anchorTag);
    unordedList.appendChild(link);


    // navBar.appendChild(link);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


