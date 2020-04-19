


window.addEventListener('scroll', function(e) {

    
const topicHeader = document.querySelector('.topicHeader'); 
const scroller = document.querySelector('.scroller');
const navElements = document.querySelectorAll('ul.side li');

    let fadeStart = 0;
    let fadeEnd = 200;
    let pageYOffset = window.pageYOffset;
    let opacity = 1;

    if(pageYOffset <= fadeStart) {
        opacity = 1;
        scroller.style.opacity = 1;
    } else if(pageYOffset <= fadeEnd) {
        opacity = Math.max(1 - pageYOffset/fadeEnd, 0.1);
        topicHeader.style.opacity = opacity;
        scroller.style.opacity = 0;
        if(window.innerHeight > window.innerWidth && window.innerWidth < 768) {
            let navopacity = Math.max(1 - pageYOffset/fadeEnd, 0);
            for(let i = 0; i < navElements.length; i++) {
                navElements[i].style.opacity = navopacity;
            }
        }

    }

    

    const target = document.querySelectorAll('.scroll');
    let index = 0, length = target.length;
    for(index; index < length; index++) {
        let pos = pageYOffset * target[index].dataset.rate;
        target[index].style.transform = `translate3d(0px,-${pos}px,0px)`;
    }


});