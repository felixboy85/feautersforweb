window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    let links = document.querySelectorAll('a');
    
    title.innerHTML = `${links.length} awesome feauters for your web`;   
});