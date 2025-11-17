function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.getElementById('mobileMenuBtn');

    const clickedInsideNav = nav.contains(event.target);
    const clickedMenuBtn = menuBtn.contains(event.target);

    if (!clickedInsideNav && !clickedMenuBtn) {
        navLinks.classList.remove('active');
    }
});
