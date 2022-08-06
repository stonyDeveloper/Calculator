const printTime = document.getElementById("time-paragraph");

const time = new Date();

let hours = time.getHours();

hours = checkTime(hours);

let minutes = time.getMinutes();

minutes = checkTime(minutes);

// const timeOnly = hours + " : " + minutes;

const btn = document.querySelectorAll(".btn");

const screen = document.getElementById("display");

function timeDisplay() {
    const timeOnly = hours + " : " + minutes;
    printTime.innerHTML = timeOnly;
}
setTimeout(timeDisplay, 1000);

for (item of btn) {
    item.addEventListener("click", function(item) {
        btntext = item.target.innerText;
        if (btntext == "x") {
            btntext = "*";
        }

        if (btntext == "÷") {
            btntext = "/";
        }
        screen.value += btntext;
    });
}

// printTime.innerHTML = timeOnly;
// setInterval(timeOnly, 1000);

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function plusOrMinus() {
    if (screen.value > 0) {
        screen.value = "-" + screen.value;
    } else if (screen.value < 0) {
        screen.value *= -1;
    }
}

function percentage() {
    screen.value = screen.value / 100;
}