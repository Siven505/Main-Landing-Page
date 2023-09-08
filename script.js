const circles = document.querySelectorAll('.circle');

function animate() {
    circles.forEach(circle => {
        let posX = Math.random() * (window.innerWidth - circle.clientWidth);
        let posY = Math.random() * (window.innerHeight - circle.clientHeight);
        let velX = Math.random() * 4 + 1;
        let velY = Math.random() * 4 + 1;

        function move() {
            posX += velX;
            posY += velY;

            if (posX + circle.clientWidth > window.innerWidth || posX < 0) {
                velX = -velX;
            }

            if (posY + circle.clientHeight > window.innerHeight || posY < 0) {
                velY = -velY;
            }

            circle.style.transform = `translate(${posX}px, ${posY}px)`;
            requestAnimationFrame(move);
        }

        move();
    });
}

animate();