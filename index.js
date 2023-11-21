var currentPath = window.location.pathname;

// Extract the filename from the path
var currentPage = currentPath.split('/').pop();

// Get the corresponding link element based on the current page
var linkElement;

if (currentPage === 'index.html') {
    linkElement = document.getElementById('Home-link');
} else if (currentPage === 'AboutUs.html') {
    linkElement = document.getElementById('About-link');
} else if (currentPage === "OurOffers.html") {
    linkElement = document.getElementById('Offers-link');
} else if (currentPage ==="Contact.html") {
    linkElement = document.getElementById("Contact-link")
}
// Add the 'active' class to the link element to indicate the current page
if (linkElement) {
    linkElement.classList.add('active');
}
