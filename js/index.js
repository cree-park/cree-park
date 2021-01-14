'use strict';

(function() {
    const nameIdElemAll = document.querySelectorAll('.name-id');
    const mousePos = {x: 0, y: 0};

    nameIdElemAll.forEach((elem, index, arr) => {
        elem.addEventListener('mousemove', function(e) {
            mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
            mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

            arr[1].style.transform = `translateX(${mousePos.x * 20}px) translateY(${mousePos.y * 20}px)`;
            arr[2].style.transform = `translateX(${mousePos.x * 40}px) translateY(${mousePos.y * 40}px)`;
        });
    });
    
})();