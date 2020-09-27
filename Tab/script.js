window.addEventListener('load', (event) => {
    let tabIndicator = document.querySelector(".tab-indicator");
    let tabsPane = document.querySelectorAll(".tab-header div");
    let tabBody = document.querySelectorAll(".tab-body div.active");
    for(let i = 0;i < tabsPane.length; i++){
        tabsPane[i].addEventListener('click', () => {
            document.querySelector(".tab-header div.active").classList.remove("active");
            tabsPane[i].classList.add("active");
            document.querySelector(".tab-body div.active").classList.remove("active");
            document.querySelectorAll(".tab-body div")[i].classList.add("active");
            tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`

        })
    }

})