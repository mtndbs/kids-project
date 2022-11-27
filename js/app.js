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
let i = 0  // index inside the func


const myScreen = document.getElementById('screen');
const kidInput = document.getElementById('kid-name')
const radioButtons = document.querySelectorAll('input[name="status"]');
let sendBtn = document.getElementById('send-btn')
let warningOut = document.getElementById('warning')
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
myInputBtn.style.color = '#ffffff00'
})

sendBtn.addEventListener('click', () => {
    if(kidInput.value.length > 0){
    let tempName = kidInput.value;
    playersArr.push(tempName)
    console.log(tempName)
    console.log(playersArr)
    let arrJSON = JSON.stringify(playersArr);
    localStorage.setItem('Player-Array', arrJSON)
    kidInput.value = ''
    displayPlayers()
    warningOut.innerHTML = ``
}else{
    warningOut.innerHTML = `שם קצר מידי`
    }
})
// suffle func
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
// display players from array func
let displayPlayers =()=>{
    myScreen.innerHTML = ''
    for(x=0;x<playersArr.length;x++){
        myScreen.innerHTML += `
        <fieldset class="btn player-btn" id="player-${x}">${playersArr[x]}</fieldset> 
        `
    }
}

let myTimeDivs = document.querySelectorAll('.time-div')
myTimeDivs.forEach((btn)=>{
    btn.addEventListener('click',(evt)=>{
        let mytime = evt.target.dataset.a
        timeInput.value = mytime
        demo.innerHTML=`${mytime}:00`
})

})


removeBtn.addEventListener('click',() => {
    if(confirm('אתה רוצה למחוק את הרשימה?')){
        localStorage.removeItem('Player-Array')
        myScreen.innerHTML = ''
    playersArr = []
    console.log(playersArr)
    displayPlayers()
    window.location.reload()

    }
})

myShulfeBtn.addEventListener('click',(e)=>{
    if(clockSwitch === false){
    shuffleArray(playersArr)
    e.preventDefault;
    myScreen.classList.remove('run-animation')
    setTimeout(()=>{
        displayPlayers()
    },500)
    void myScreen.offsetWidth;    
    myScreen.classList.add('run-animation')
}
},false)


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
//   return timeoutMeth
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
// return timeoutMeth
} 
}
}





// let devidInput = document.getElementById('divided')
const checkedFunc = ()=>{
    let selectedSize;
    for (const radioButton of radioButtons) {
        radioButton.disabled = true
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    return selectedSize

}




timeBtn.addEventListener('click',() => {
if(playersArr.length<1){
myScreen.innerHTML = `<span class="warning-msg">הכנס משתמש!</span>`
}

    // declaring the player
if(clockSwitch === false){
timeInput.value < 0 ? timeInput.value = 0 : console.log('ok')    

    let playersDiv = document.getElementById(`player-${i}`)
    playersDiv.style.backgroundColor = 'chartreuse'
    let newSvg = document.createElement('img')
    newSvg.id = `gamepad-${i}`
    newSvg.setAttribute('src','/svg/stadia_controller_FILL0_wght400_GRAD0_opsz48.svg')
playersDiv.appendChild(newSvg)
    
    i++
    let selectedSize = checkedFunc();
    console.log(typeof selectedSize)
    playTimeFunc(+selectedSize)
}


})



const timer = (timeInMins)=>{
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
if(i === playersArr.length){
    totalMsg.innerHTML = `<h3>זמן הקצוב נגמר</h3>
<button class="button-29" onClick="window.location.reload()">התחל מחדש</button>`;
}else{
totalMsg.innerHTML = `<h3>הזמן נגמר</h3>
<div id="count_up_timer">0:0</div>
<button class="button-29" id="next-player">שחקן הבא</button>`;
}
 let TheTime =  setInterval(countUpTimer, 1000);
let nextPlayerBtn = document.getElementById('next-player')



nextPlayerBtn.addEventListener('click',()=>{
    playersArr.length <= 1 ? totalMsg.innerHTML += `<p class="warning-msg">אין שחקן הבא</p>`: console.log('ok')
    // restarting thecountUp 
    totalSeconds = 0;
    clearInterval(TheTime)
    nextBtnFlag = true
    if(clockSwitch === false){
        
        let playersDiv = document.getElementById(`player-${i}`)
        playersDiv.style.backgroundColor = 'chartreuse'
        let newerSvg = document.createElement('img')
        newerSvg.id = `gamepad-${i}`
        newerSvg.setAttribute('src','/svg/stadia_controller_FILL0_wght400_GRAD0_opsz48.svg')
    playersDiv.appendChild(newerSvg)
        // playersDiv.innerHTML += `  <img src="/svg/stadia_controller_FILL0_wght400_GRAD0_opsz48.svg" alt="">`
    let theLate = document.getElementById('count_up_timer').innerHTML
        
        let beforePlayer = document.getElementById(`player-${i-1}`)
        console.log(theLate)
        beforePlayer.innerHTML += `<p>התעכב ב-${theLate}</p>`
        let deleteSvg = document.getElementById(`gamepad-${i-1}`)
        deleteSvg.remove()
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
// const demo = document.getElementById("demo");





