const boxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(boxes);

boxes.forEach(box => box.addEventListener('click', handleClick));

let lastChecked;

function handleClick(e) {
    let betweener = false;
    if (e.shiftKey && this.checked) {
        boxes.forEach(box => {
            if(box === this || box === lastChecked) {
                betweener = !betweener;
            }
            if(betweener) {
                box.checked = true;
            }
        })
    }

    lastChecked = this;
}