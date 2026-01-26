
// const update = () => {
//     const h = document.getElementById("time");
//     const t = new Date();
//     const newtime = t.toLocaleTimeString();
//     if (h)
//         h.innerText = newtime;

// }
// update();
// setInterval(update, 1000);

let count = 0;


function increment() {
    let setcount = document.getElementById("value");
    count++;
    setcount.innerHTML = count;

    if (count > 0) {
        setcount.style.color = "green";
    }
}
function decrement() {
    let setcount = document.getElementById("value");
    count--;
    setcount.innerHTML = count;

    if (count < 0) {
        setcount.style.color = "red";
        alert("Value can't be negative ");
        reset();
    }

}
function reset() {
    let setcount = document.getElementById("value");
    count = 0;
    setcount.innerHTML = count;
    if (count === 0) {
        setcount.style.color = "black";
    }
}