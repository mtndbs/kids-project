let totalSeconds = 0;

const countUpTimer =()=> {
    ++totalSeconds;
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds - hour * 3600) / 60);
    let seconds = totalSeconds - (hour * 3600 + minute * 60);
    document.getElementById("count_up_timer").innerHTML =  `${minute}:${seconds}`
}
