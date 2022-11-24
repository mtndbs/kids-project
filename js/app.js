let playersArr = []
window.onload =()=>{
    let tempArr = localStorage.getItem('Player-Array'); 
    if(tempArr){
    let correctArr = JSON.parse(tempArr);
    playersArr = correctArr
    console.log(playersArr)
    }
    displayPlayers()
}

let nextBtnFlag = false
let clockSwitch = false
let timesRun = 0;
let prepareTime = NaN

const kidInput = document.getElementById('kid-name')
const myScreen = document.getElementById('screen');
let sendBtn = document.getElementById('send-btn')
let removeBtn = document.getElementById('remove-btn')
let oldBtn = document.getElementById('old-btn')
let timeBtn = document.getElementById('time-btn')
let timeInput = document.getElementById('input-time')
let myTitle = document.getElementById('my-title')
let myShulfeBtn = document.getElementById('shulfe')
let myInputBtn = document.getElementById('input-btn') // input button
let mySound = new Audio('/sound/endVoice.m4a')

myInputBtn.addEventListener('click',() => {
timeInput.style.display = 'inline'
})

sendBtn.addEventListener('click', () => {
    let tempName = kidInput.value;
    playersArr.push(tempName)
    console.log(tempName)
    console.log(playersArr)
    let arrJSON = JSON.stringify(playersArr);
    localStorage.setItem('Player-Array', arrJSON)
    kidInput.value = ''
})
// suffle func
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
// display players from array func
let displayPlayers =()=>{
    myScreen.innerHTML = ''
    for(x=0;x<playersArr.length;x++){
        myScreen.innerHTML += `
        <fieldset class="btn player-btn" id="player-${x}"><p>${playersArr[x]}</p></fieldset> 
        `
    }
}
oldBtn.addEventListener('click',() => {
    displayPlayers()
    
    let playerBtns = document.querySelectorAll('.player-btn')
    playerBtns.forEach((button)=>{
        button.addEventListener('click',(evt)=>{

        })
    })
})

let myTimeDivs = document.querySelectorAll('.time-div')
myTimeDivs.forEach((btn)=>{
    btn.addEventListener('click',(evt)=>{
        let mytime = evt.target.dataset.a
        timeInput.value = mytime
        demo.innerHTML=`${mytime}:00`
})

})


removeBtn.addEventListener('click',() => {
    if(confirm('hi')){
        localStorage.removeItem('Player-Array')
        myScreen.innerHTML = ''
    playersArr = []
    console.log(playersArr)
    displayPlayers()
    }
})


myShulfeBtn.addEventListener('click',()=>{
shuffleArray(playersArr)
displayPlayers()
myScreen.style.transform = "rotate(720deg)"; 
myScreen.style.transition = "all 2s";
})


const playTimeFunc=(flag)=>{
if(clockSwitch === false){    
    clockSwitch = true
    if(flag===1){
    let timeValue = timeInput.value 
    let theTime = timeValue/playersArr.length
    theTime = Math.floor(theTime)
    prepareTime = theTime
    timer(theTime)
    timeoutMeth = setTimeout(()=>{
        
let  interval = setInterval(function(){
    timesRun++
    console.log(timesRun)
    if(timesRun > 12||nextBtnFlag===true){
        clearInterval(interval);
    }
    mySound.play()
}, 2000); 
      //voice funtion
      //start the next player  
  },theTime*60*1000) 
  return timeoutMeth
}else{
    clockSwitch = true;
    let timeValue = timeInput.value 
    let theTime = timeValue
    console.log(theTime)
    theTime = Math.floor(theTime)
    prepareTime = theTime
    //countDown function
    timer(theTime)
    timeoutMeth = setTimeout(()=>{              
let  interval = setInterval(function(){
    timesRun++
    console.log(timesRun)
    if(timesRun > 12||nextBtnFlag===true){
        clearInterval(interval);
    }
    mySound.play()
}, 2000); 
  },theTime*60*1000) 
return timeoutMeth
} 
}
}





// let devidInput = document.getElementById('divided')
const checkedFunc = ()=>{
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    return selectedSize
}

const radioButtons = document.querySelectorAll('input[name="status"]');

let i = 0  // index inside the func
timeBtn.addEventListener('click',() => {
// declaring the player
if(clockSwitch === false){
    let playersDiv = document.getElementById(`player-${i}`)
    playersDiv.style.backgroundColor = 'chartreuse'
    i++
    }
    let selectedSize = checkedFunc();
    console.log(typeof selectedSize)
playTimeFunc(+selectedSize)


})



function timer(timeInMins){
    const demo = document.getElementById("demo");
 
console.log("timeInMins: " + timeInMins);

let time = 60 * prepareTime;

let myinterval = setInterval(function () {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    demo.innerHTML = `${minutes}:${seconds}`;
    time--;
    if(minutes==0&&seconds==0){
        clockSwitch = false
        nextBtnFlag = false
        timesRun = 0
        clearInterval(myinterval)
console.log('done')

let totalMsg = document.querySelector("#end-time");
totalMsg.style.display = "block";
totalMsg.innerHTML = `<h3>הזמן נגמר</h3>
</div><h3>Dont give up!</h3>
<div><button id="next-player">שחקן הבא</button></div>`;
let nextPlayerBtn = document.getElementById('next-player')
nextPlayerBtn.addEventListener('click',()=>{
    nextBtnFlag = true
    if(clockSwitch === false){
        
        let playersDiv = document.getElementById(`player-${i}`)
        playersDiv.style.backgroundColor = 'chartreuse'
        let beforePlayer = document.getElementById(`player-${i-1}`)
        beforePlayer.style.backgroundColor = 'white'
        i++
        }
    let selectedSize = checkedFunc();   
    playTimeFunc(+selectedSize)
    totalMsg.style.display = "none";
})
        
    }
}, 1000);

}
const demo = document.getElementById("demo");





