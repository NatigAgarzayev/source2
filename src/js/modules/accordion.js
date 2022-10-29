const accordion = (trigger, content) => {
    const accordionHeading = document.querySelectorAll(trigger),
        accordionBlock = document.querySelectorAll(content);

    function accordionHidden(accordionBlock) {
        accordionBlock.forEach(el => {
            el.style.display = 'none';
        });
    }

    function hideExcept(accordionHeading, target) {
        accordionHeading.forEach(el => {
            if(el !== target) {
                el.nextElementSibling.style.display = 'none';
                el.classList.remove('ui-accordion-header-active');
            }
        });
    }

    function accordionClick(accordionHeading){
        accordionHeading.forEach(item => {
            item.addEventListener('click', (event) => {
                let save = event.target.parentNode.nextElementSibling;
                let target = event.target.parentNode;
                if(target.id != 'accordion' && save.style.display == 'none'){
                    target.classList.add('ui-accordion-header-active');
                    save.style.display = 'block';
                    save.classList.add('animated', 'fadeIn');
                    hideExcept(accordionHeading, target);
                }
                else if(target.id != 'accordion' && save.style.display == 'block'){
                    target.classList.remove('ui-accordion-header-active');
                    save.classList.remove('animated', 'fadeIn');
                    save.style.display = 'none';
                }
            });
        });
    }

    accordionHidden(accordionBlock);
    accordionClick(accordionHeading);
};

export default accordion;