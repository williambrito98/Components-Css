window.addEventListener('load', () => {
    let toggle = document.querySelector("#nav-toggle");
    let navbar = document.querySelector("#navbar");
    let link = document.querySelectorAll(".nav-link");
    let linkCollapse = document.querySelectorAll(".collapse-link")
    toggle.addEventListener('click', () => {
        navbar.classList.toggle('expander')
    })

    function colorLink() {
        link.forEach(l => l.classList.remove("active"));
        this.classList.add("active")
    }
    link.forEach(l => l.addEventListener('click', colorLink))

    for(let i = 0; i< linkCollapse.length; i++) {
        linkCollapse[0].addEventListener('click', (event) => {
            event.target.nextElementSibling.classList.toggle('showCollapse')
            event.target.classList.toggle('rotate');
        })
    }

})