
    const button = document.querySelector('.button');
    const navbar = document.querySelector('.open_content');
    const divImage = document.querySelector('.image_content');

    button.addEventListener('click', () => {
        
        navbar.classList.toggle('show');
        button.classList.toggle('show');
        divImage.classList.toggle('blur');
       
    })