document.addEventListener("DOMContentLoaded", function() {

    const showBtn = document.querySelector(".js-nav__menu__toggle")
    const topNav = document.querySelector(".js-menu-top")

    showBtn.addEventListener("click", function() {
        topNav.classList.toggle("open")
    })

})
