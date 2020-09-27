window.addEventListener('load',() => {
    const link = document.querySelector('a');
    link.addEventListener('click', (event) => {
        let x = event.clientX - event.target.offsetLeft;
        let y = event.clientY - event.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        link.appendChild(ripples)

        setTimeout( () => {
            ripples.remove()
        },1000)

    })
})