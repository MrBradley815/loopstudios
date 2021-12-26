const $mobileMenu = document.querySelector('.mobile-nav input')

$mobileMenu.addEventListener('change', toggleMenu)

function toggleMenu() {
    if ($mobileMenu.checked) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
}