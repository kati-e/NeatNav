// Responsive Navbar Script (+ comments for further explainations)

addActiveClass();

function addActiveClass() {

    // Get all of the items from the navbar you specify into an array
    const Navbar = document.querySelector(".responsive-nav").querySelectorAll("a");

    // Go through each item in the array and add an onclick event listener
    Navbar.forEach(navlink => {
        navlink.addEventListener("click", function () {
            // Remove 'active' class from any of the elements which currently have it
            Navbar.forEach(navbar => navbar.classList.remove("active"))

            // Add 'active' class on newly clicked element
            this.classList.add("active");
        })
    });
}