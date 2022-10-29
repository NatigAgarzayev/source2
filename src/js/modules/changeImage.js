const changeImage = (selector) => {
    const imageBody = document.querySelectorAll(selector);

    imageBody.forEach(image => {
        image.addEventListener('mouseover', (e) => {
            if(e.target.tagName == 'IMG'){
                let defeniteTheImage = e.target.className.slice(-2);
                e.target.src = `assets/img/sizes${defeniteTheImage}-1.png`;
                e.target.style.position = 'relative';
                e.target.style.zIndex = '1';
            }
        });
        image.addEventListener('mouseout', (e) => {
            if(e.target.tagName == 'IMG'){
                let defeniteTheImage = e.target.className.slice(-2);
                e.target.src = `assets/img/sizes${defeniteTheImage}.png`;
                e.target.style.zIndex = '0';
            }
        });
    });
};

export default changeImage;