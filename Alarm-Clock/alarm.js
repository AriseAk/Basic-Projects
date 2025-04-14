let alarmTime = null;
let isAlarmSet = false;
const alarmSound = new Audio("/Alarm-Clock/alarm.mp3");

function updateTime() {
    const timeNow = new Date();

    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
        if (hours > 12) hours -= 12;
    }

    if (hours === 0) hours = 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("current-time").textContent = formattedTime;

    if (isAlarmSet && formattedTime === alarmTime) {
        alarmSound.play();
        alert("⏰ Alarm Ringing!");
        isAlarmSet = false;
    }
}

setInterval(updateTime, 1000);

updateTime();

const hours = document.querySelector(".select-hour")
const minutes = document.querySelector(".select-minute")

for (let index = 1; index < 12; index++) {
    const option = document.createElement("option");
    option.value = index < 10 ? "0" + index : index;
    option.text = index < 10 ? "0" + index : index;
    hours.appendChild(option);
}

for (let index = 0; index < 59; index++) {
    const optionmin = document.createElement("option");
    optionmin.value = index < 10 ? "0" + index : index;
    optionmin.text = index < 10 ? "0" + index : index;
    minutes.appendChild(optionmin);
}

const setAlarmBtn = document.querySelector(".set-alarm");

setAlarmBtn.addEventListener("click", () => {
    const ahour = document.querySelector(".select-hour").value;
    const amin = document.querySelector(".select-minute").value;
    const asec = "00"; // Default seconds to 00 since it's not selected
    const aperiod = document.querySelector(".select-period").value;

    alarmTime = `${ahour}:${amin}:${asec} ${aperiod}`;
    isAlarmSet = true;

    alert(`Alarm set for ${alarmTime}`);
});

