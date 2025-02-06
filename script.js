const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
document.addEventListener("DOMContentLoaded", function() {
    const numberOfSnowflakes = 30;
    const snowflakesContainer = document.createElement('div');

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake draggable';
        snowflake.textContent = '🌸';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s, ${Math.random() * 2 + 2}s`;
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        snowflakesContainer.appendChild(snowflake);
    }

    document.body.appendChild(snowflakesContainer);

    snowflakesContainer.addEventListener('mousedown', function(event) {
        const target = event.target;
        if (target.classList.contains('draggable')) {
            let shiftX = event.clientX - target.getBoundingClientRect().left;
            let shiftY = event.clientY - target.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                target.style.left = pageX - shiftX + 'px';
                target.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            target.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                target.onmouseup = null;
            };
        }
    });

    snowflakesContainer.ondragstart = function() {
        return false;
    };
});
