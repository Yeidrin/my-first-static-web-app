// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#menu-burger'); // Burger button
    const close = document.querySelector('#menu-close'); // Close button
    const menu = document.querySelector('.navbar-menu'); // Menu container
    const backdrop = document.querySelectorAll('.navbar-backdrop'); // Backdrop, if any

    // Toggle the menu on burger button click
    if (burger) {
        burger.addEventListener('click', function() {
            menu.classList.toggle('hidden');
        });
    }

    // Close the menu on close button click
    if (close) {
        close.addEventListener('click', function() {
            menu.classList.toggle('hidden');
        });
    }

    // Close the menu on backdrop click (if applicable)
    if (backdrop.length) {
        backdrop.forEach(function(element) {
            element.addEventListener('click', function() {
                menu.classList.toggle('hidden');
            });
        });
    }
});
