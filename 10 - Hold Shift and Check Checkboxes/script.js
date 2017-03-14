const boxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(boxes);

let lastClicked;

function handleClick(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        boxes.forEach(box => {
            console.log(box);
            if (box === this || box === lastClicked) {
                inBetween = !inBetween;                
            }
            if (inBetween) {
                box.checked = true;
            }
        });
    }

    lastClicked = this;
}

boxes.forEach(box => box.addEventListener('click', handleClick));