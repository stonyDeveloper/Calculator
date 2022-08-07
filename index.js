const btn = document.querySelectorAll(".btn");

const screen = document.getElementById("display");

// Display Time

function clock() {
    const printTime = document.getElementById("time-paragraph");

    const time = new Date();
    setTimeout;

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        } // add zero in front of numbers < 10
        return i;
    }

    let hours = time.getHours();

    hours = checkTime(hours);

    let minutes = time.getMinutes();

    minutes = checkTime(minutes);

    let seconds = time.getSeconds();

    seconds = checkTime(seconds);

    const timeOnly = hours + " : " + minutes;
    printTime.innerHTML = timeOnly;

    setTimeout(clock, 1000);
}
// To display selected options on screen
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

        if (screen.value.length > 9) {
            // screen.value = screen.value.substring(0, 12);
            screen.style.fontSize = "25px";
        } else {
            screen.style.fontSize = "35px";
        }

        if (screen.value.length > 18) {
            delete screen.value;
            screen.value = "";
        }
    });
}

// Square root function
function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

// +/- function
function plusOrMinus() {
    if (screen.value > 0) {
        screen.value = "-" + screen.value;
    } else if (screen.value < 0) {
        screen.value *= -1;
    }
}

// % function
function percentage() {
    screen.value = screen.value / 100;
}

// let x = 100;
// x = x.toLocaleString("en-US");
// console.log(x);

function equal() {
    screen.value = eval(screen.value);
    if (screen.value.length >= 15) {
        screen.value = "error";
    }
}