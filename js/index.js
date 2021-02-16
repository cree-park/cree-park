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

    const sticker = document.querySelectorAll('.sticker');
    sticker.forEach(function(elem) {
        elem.onmousedown = function(event) {
            let shiftX = event.clientX - elem.getBoundingClientRect().left;
            let shiftY = event.clientY - elem.getBoundingClientRect().top;    

            elem.style.position = 'absolute';
            elem.style.zIndex = 1000;

            //document.body.append(elem);

            function moveAt(pageX, pageY) {
                elem.style.left = pageX - shiftX + 'px';
                elem.style.top = pageY - shiftY + 'px';
            }

            moveAt(event.pageX, event.pageY);

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            elem.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                elem.onmouseup = null;
            }
        }

        elem.ondragstart = function() {
            return false;
        };
    });

})();