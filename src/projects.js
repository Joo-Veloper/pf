'use strict';

// category
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project')

categories.addEventListener('click', (event)=>{
    console.log(event);
    const filter = event.target.dataset.category;
    if(filter == null){
        return;
    }
    console.log(filter);
    projects.forEach(project => {
        console.log(project.dataset.type);
        if(filter === 'all' || filter == project.dataset.type){
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    })
});