function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown > a')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
};

// Load content dynamically
function loadPage(page) {
    const content = document.getElementById("content");

    if (page === "home") {
        // Load the main content for the index page
        content.innerHTML = `
            <div class="company-info">
                <h1>WELCOME TO OUR JEELANI INTERIORS</h1>
                <p>Exclusive | Stylish | Unique</p>
                <p>We build and design people’s dream homes</p>
            </div>
        `;
    } else {
        // Load specified content file
        fetch(`content/${page}`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                const dropdownMenu = document.getElementById("dropdown-menu");
                dropdownMenu.style.display = "none";
            })
            .catch(error => console.error('Error loading page:', error));
    }
}
// JavaScript to populate the design name in the order form
function showOrderForm(designName) {
    document.getElementById('design-name').value = designName;
}
