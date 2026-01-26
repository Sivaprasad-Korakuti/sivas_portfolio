
// const update = () => {
//     const h = document.getElementById("time");
//     const t = new Date();
//     const newtime = t.toLocaleTimeString();
//     if (h)
//         h.innerText = newtime;

// }
// update();
// setInterval(update, 1000);

document.addEventListener("DOMContentLoaded", function () {
    let count = 0;

    const setcount = document.getElementById('value');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');

    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
        updatecolor();
    });

    decrementBtn.addEventListener('click', () => {
        count--;
        updateDisplay();
        updatecolor();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
        updatecolor();
    });

    const updateDisplay = () => {
        setcount.innerHTML = count;
    }
    const updatecolor = () => {
        if (count > 0) {
            setcount.style.color = "green";
        }
        else if (count < 0) {
            setcount.style.color = "red";
            alert("Value can't be negative ");
            reset();
        }
        else if (count === 0) {
            setcount.style.color = "black";
        }
    }
    function reset() {
        count = 0;
        updateDisplay();
        updatecolor();
    }
});
