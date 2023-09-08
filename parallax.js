
 function smartgovbutton() {
    window.open ('mysmartgov.html', "_self");
}
 
function billingsystem() {
    window.open ('mysmartgov.html', "_self");
}

function residentInfo() {
    window.open ('ResidentInformationID.html', "_self");
}


// // script.js
// window.addEventListener("load", function () {
//     // When the page is fully loaded, hide the loader
//     const spinner = document.querySelector("#spinner");
//     const content = document.querySelector(".content");

//     spinner.style.display = "block"; // Hide the loader
//     content.style.display = "none"; // Show the main content
    

// });

    document.addEventListener("DOMContentLoaded", function() {
         // This code will run when the DOM is fully loaded

    // Assuming you have spinner and content elements in your HTML
    const spinner = document.querySelector("#spinner");
    const content = document.querySelector(".content");

    // Add a delay of, for example, 2000 milliseconds (2 seconds)
    setTimeout(function() {
        spinner.style.display = "none"; // Hide the loader
       
        console.log("DOM content loaded");
    }, 1000); // Adjust the delay duration as needed (in milliseconds)
    content.style.display = "block"; // Show the main content
    });

