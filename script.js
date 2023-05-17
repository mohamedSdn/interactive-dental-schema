const paths = document.querySelectorAll('path');

paths.forEach(path => {
    path.addEventListener('click', (e) => {
        e.target.style.fill = e.target.style.fill === "blue" ? "white" : "blue"
    })
});