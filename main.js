const projects = document.getElementById('project')
const main = document.querySelector('main')

projects.addEventListener('click', showProjects)

function showProjects() {
    main.style.display = 'block'
}

