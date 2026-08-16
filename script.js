const numberDiv = document.getElementsByClassName("numberDiv");
const bigSmallDiv = document.getElementsByClassName("bigSmall");
const colorDiv1 = document.getElementsByClassName("colorDiv1");
const colorDiv2 = document.getElementsByClassName("colorDiv2");

const startTimeRight = document.getElementById("startTimeRight");

const balanceLabel = document.getElementsByClassName("fund")[0];
const refresh = document.getElementsByClassName("refresh")[0];

const periodLabel = document.getElementsByClassName("right3")[0];

const time1l = document.getElementById("t1");
const time2l = document.getElementById("t2");
const time3l = document.getElementById("t3");

const mode = document.getElementsByClassName("mode");

const greenBtn = document.getElementById("green");
const purpleBtn = document.getElementById("purple");
const redBtn = document.getElementById("red");

const timeStartNow = document.getElementById("startTimer");

const bigBtn = document.getElementById("big");
const smallBtn = document.getElementById("small");

// Bet Window variables
const betWindow = document.getElementById("betContainer");
const cancel = document.getElementById("cancel");
const betProceed = document.getElementById("totalBet");
const choose = document.getElementById("chooseType");
const bwColor = document.getElementsByClassName("bwColor");
const betInput = document.getElementById("betAmountFinal");
const betAmountRupee = document.getElementById("betAmountRupee");
const betFlag = document.getElementById("betSucceed");

const mainFrame = document.getElementsByClassName("main-frame")[0];
const insbalance = document.getElementById("insufficientBalance");
insbalance.style.display = "none";

const winloose = document.getElementById("winLoose");
// const youWin = document.getElementById("youWin");
const youWin = document.getElementById("winAmountDisplay");
const youLoose = document.getElementById("congrats");

const incDec = document.getElementsByClassName("bwColor");

const bt = document.getElementsByClassName("bt");
const bx = document.getElementsByClassName("bx");
bt[0].classList.add("btSelected");
bx[0].classList.add("bxSelected");

const song1 = new Audio("songs/startSound.mp3");

const song2 = new Audio("songs/endSound.mp3");

var randomNum1;
var randomNum2;
var bigSmall30 = new Array(10);
var bigSmall60 = new Array(10);

var flag30 = false;
var flag60 = false;

var randomNum30 = new Array(10);
var randomNum60 = new Array(10);

var betArray = new Array();

var mainBalance = 50000;

var initialBetAmount = 1;
var multiplier = 1;

var time1I = setInterval(update30, 1000);
var time1I = setInterval(update60, 1000);
var timer301 = setInterval(generatePeriod, 5000, 30);
var timer60;
var timer180;
var timer300;

var displayTimer1 = setInterval(display30, 1000);
var displayTimer2;

var time30 = (new Date().getSeconds())%30;
var time60 = new Date().getSeconds();

var betAmount = 0;
var winAmount = 0;
var lossAmount = 0;
var youChoose;

var numResult;
var colorResult;
var bsResult;
var rgp;

var flag30PlaySound = true;

function incOrDec(str){
    if(str==="-"){
        betAmount -=1;
    }else{
        betAmount +=1;
    }
    betInput.value = betAmount;
    betAmountRupee.textContent = betAmount;
}

function initial(num){
    initialBetAmount = num;
    updateBetAmount();
    if(num===1){
        bt[0].classList.add("btSelected");
        bt[1].classList.remove("btSelected");
        bt[2].classList.remove("btSelected");
        bt[3].classList.remove("btSelected");
    }else if(num===10){
        bt[1].classList.add("btSelected");
        bt[0].classList.remove("btSelected");
        bt[2].classList.remove("btSelected");
        bt[3].classList.remove("btSelected");
    }else if(num===100){
        bt[2].classList.add("btSelected");
        bt[1].classList.remove("btSelected");
        bt[0].classList.remove("btSelected");
        bt[3].classList.remove("btSelected");
    }else{
        bt[3].classList.add("btSelected");
        bt[1].classList.remove("btSelected");
        bt[2].classList.remove("btSelected");
        bt[0].classList.remove("btSelected");
    }
}

function multiply(num){
    multiplier = num;
    updateBetAmount();
    if(num===1){
        bx[0].classList.add("bxSelected");
        bx[1].classList.remove("bxSelected");
        bx[2].classList.remove("bxSelected");
        bx[3].classList.remove("bxSelected");
        bx[4].classList.remove("bxSelected");
        bx[5].classList.remove("bxSelected");
    }else if(num===5){
        bx[1].classList.add("bxSelected");
        bx[0].classList.remove("bxSelected");
        bx[2].classList.remove("bxSelected");
        bx[3].classList.remove("bxSelected");
        bx[4].classList.remove("bxSelected");
        bx[5].classList.remove("bxSelected");
    }else if(num===10){
        bx[2].classList.add("bxSelected");
        bx[1].classList.remove("bxSelected");
        bx[0].classList.remove("bxSelected");
        bx[3].classList.remove("bxSelected");
        bx[4].classList.remove("bxSelected");
        bx[5].classList.remove("bxSelected");
    }else if(num===20){
        bx[3].classList.add("bxSelected");
        bx[1].classList.remove("bxSelected");
        bx[2].classList.remove("bxSelected");
        bx[0].classList.remove("bxSelected");
        bx[4].classList.remove("bxSelected");
        bx[5].classList.remove("bxSelected");
    }else if(num===50){
        bx[4].classList.add("bxSelected");
        bx[1].classList.remove("bxSelected");
        bx[2].classList.remove("bxSelected");
        bx[3].classList.remove("bxSelected");
        bx[0].classList.remove("bxSelected");
        bx[5].classList.remove("bxSelected");
    }else{
        bx[5].classList.add("bxSelected");
        bx[1].classList.remove("bxSelected");
        bx[2].classList.remove("bxSelected");
        bx[3].classList.remove("bxSelected");
        bx[4].classList.remove("bxSelected");
        bx[0].classList.remove("bxSelected");
    }
}

function updateBetAmount(){
    betAmount = initialBetAmount * multiplier;
    betInput.value = betAmount;
    betAmountRupee.textContent = betAmount;

}




initNumbers();
updateDivNumber(randomNum30, bigSmall30);

function initNumbers(){
    for(let i=0; i<10; i++){
        randomNum1 = Math.floor(Math.random()*10);
        randomNum2 = Math.floor(Math.random()*10);
        randomNum30[i] = randomNum1;
        randomNum60[i] = randomNum2;

        if(randomNum1<5){
            bigSmall30[i] = "small";
        }
        else{
            bigSmall30[i] = "big"
        }

        if(randomNum2<5){
            bigSmall60[i] = "small";
        }
        else{
            bigSmall60[i] = "big"
        }
    }
}

function updateDivNumber(arr, col){
    for(let i = 0; i<10; i++){
        numberDiv[i].textContent = arr[i];
        bigSmallDiv[i].textContent = col[i];
        if(arr[i]===0){
            colorDiv1[i].style.backgroundColor = "rgb(238, 64, 64)";
            colorDiv2[i].style.backgroundColor = "rgb(185, 31, 185)";
            colorDiv2[i].style.display = "inline-block";

            numberDiv[i].style.color ="rgb(146, 5, 146)";

        }else if(arr[i]===5){
            colorDiv1[i].style.backgroundColor = "rgb(17, 184, 17)";
            colorDiv2[i].style.backgroundColor = "rgb(185, 31, 185)";
            colorDiv2[i].style.display = "inline-block";
            numberDiv[i].style.color =" rgb(146, 5, 146)";
        }else if(arr[i]===1 || arr[i]===3 || arr[i]===7 || arr[i]===9){
            colorDiv2[i].style.display = "none";
            colorDiv1[i].style.backgroundColor = "rgb(17, 184, 17)";
            numberDiv[i].style.color ="rgb(17, 184, 17)";
        }
        else{
            colorDiv2[i].style.display = "none";
            colorDiv1[i].style.backgroundColor= "rgb(238, 64, 64)";
            numberDiv[i].style.color = "rgb(238, 64, 64)";
        }

    }
}



function updatePeriod(period){
    periodLabel.textContent = period;
}

mode[0].classList.add("modeSelected");


mode[0].addEventListener('click',()=>{
    mode[0].classList.add("modeSelected");
    mode[1].classList.remove("modeSelected");
    mode[2].classList.remove("modeSelected");
    mode[3].classList.remove("modeSelected");
    // clearInterval(displayTimer1);
    clearInterval(displayTimer2);
    displayTimer1 = setInterval(display30, 100);

    clearInterval(timer301);
    timer301 = setInterval(generatePeriod, 1000, 30);
    clearInterval(timer60);
    clearInterval(timer180);
    clearInterval(timer300);

    updateDivNumber(randomNum30, bigSmall30);
    
});

mode[1].addEventListener('click',()=>{
    mode[1].classList.add("modeSelected");
    mode[0].classList.remove("modeSelected");
    mode[2].classList.remove("modeSelected");
    mode[3].classList.remove("modeSelected");

    // clearInterval(displayTimer1);
    // displayTimer2 = setInterval(display60, 100);
    // timer60 = setInterval(generatePeriod, 1000, 60);
    // clearInterval(timer301);
    // clearInterval(timer180);
    // clearInterval(timer300);

    // updateDivNumber(randomNum60, bigSmall60);
});
mode[2].addEventListener('click',()=>{
    mode[2].classList.add("modeSelected");
    mode[0].classList.remove("modeSelected");
    mode[1].classList.remove("modeSelected");
    mode[3].classList.remove("modeSelected");
    // timer180 = setInterval(generatePeriod, 1000, 180);
    // clearInterval(timer301);
    // clearInterval(timer60);
    // clearInterval(timer300);

});
mode[3].addEventListener('click',()=>{
    mode[3].classList.add("modeSelected");
    mode[0].classList.remove("modeSelected");
    mode[2].classList.remove("modeSelected");
    mode[1].classList.remove("modeSelected");
    // // timer300 = setInterval(generatePeriod, 1000, 300);
    // clearInterval(timer301);
    // clearInterval(timer60);
    // clearInterval(timer180);

});

// Generating Period Number

function generatePeriod(num){

    period = "";
    
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() +1;
    let dat = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let counter = (hours*60 +minutes)*60 +seconds;
    counter = Math.floor(counter/num);

    period += year.toString();
    period += month.toString().padStart(2,"0");
    period += dat.toString().padStart(2,"0");
    
    if(num===30 || num===300){
        let a= 30;
        period += a.toString().padStart(2,"0");
    }else if(num==60){
        let a =10;
        period += a.toString().padStart(2,"0");
    }else if(num===180){
        let a =20;
        period += a.toString().padStart(2,"0");
    }

    period += counter.toString().padStart(4,"0");
    period = parseInt(period) -7;

    
    updateHistoryPeriod(period);

}

refresh.addEventListener("click", updateBalace);

function updateBalace(){
    balanceLabel.textContent = mainBalance;
}

function updateHistoryPeriod(period){
    updateBalace();
    period = period + 10;
    updatePeriod(period-1);
    for(let i = 0; i<10; i++){
        period -=1;
        document.getElementsByClassName("periodDiv")[i].textContent = period-1;
    }

}


// var time180 = 180;
// var time300 = 300;


function update30(){
    if(time30<1){
        time30 = 29;

        resetRandomNumber30();

        if(flag30){
            for(let i = 0; i<betArray.length; i++){
                checkWin(betArray[i]);
            }
        }
        betArray = new Array();
    }else{
        time30 -=1;
    }

    if(time30===5){
        timeStartNow.style.display = "block";
        setTimeout(()=>{
        timeStartNow.style.display = "none";
        }, 6000);
    }

    if(time30<6){
        betWindow.style.display = "none";
    }
    if(time30<6 && time30>0){
        if(flag30PlaySound){
            song1.play();
        }
        startTimeRight.textContent = time30;
    }else if(time30==0){
        if(flag30PlaySound){
            song2.play();
        }
        startTimeRight.textContent = time30;
    }
}

function resetRandomNumber30(){
    let bs;
    randomNum1 = Math.floor(Math.random()*10);
    if(randomNum1<5){
        bs = "small";
    }else{
        bs = "big";
    }
    for(let i = 9; i>0; i--){
        randomNum30[i] = randomNum30[i-1];
        bigSmall30[i] = bigSmall30[i-1];
    }
    randomNum30[0] = randomNum1;
    bigSmall30[0] = bs;
    updateDivNumber(randomNum30, bigSmall30);
}

function display30(){
    
    time1l.textContent = 0;
    time2l.textContent = Math.floor(time30/10);
    time3l.textContent = time30%10;
}

function update60(){
    if(time60<1){
        time60 = 59;
        resetRandomNumber60();

    }else{
        time60 -=1;
    } 
}

function resetRandomNumber60(){
    let bs;
    randomNum2 = Math.floor(Math.random()*10);
    if(randomNum1<5){
        bs = "small";
    }else{
        bs = "big";
    }
    for(let i = 9; i>0; i--){
        randomNum60[i] = randomNum30[i-1];
    }
    randomNum60[0] = randomNum1;
    bigSmall60[0] = bs;
    updateDivNumber(randomNum60, bigSmall60);
}

function display60(){
    time1l.textContent= 0;
    time2l.textContent = Math.floor(time60/10);
    time3l.textContent = time60%10;

}



betInput.addEventListener('input', ()=>{
    document.getElementById("betAmountRupee").textContent = betInput.value;
});

betProceed.addEventListener('click', ()=>{
    let myBet = new betMethod(youChoose);
    betArray.push(myBet);
    if(mainBalance<betInput.value){
        insbalance.style.display = "block";
        setTimeout(()=>{
            insbalance.style.display = "none";
        }, 2500);
    }else{
        betNow();
    }
    betWindow.style.display = "none";
});

cancel.addEventListener('click', ()=>{
    betWindow.style.display = "none";
    youChoose = "";
});

greenBtn.addEventListener('click', ()=>{
    updateBetWindowColor("rgb(17, 184, 17)");
    betWindow.style.display = "block";
    youChoose = "green";
    choose.textContent = youChoose;
    betInput.value = 1;
});

purpleBtn.addEventListener('click', ()=>{
    updateBetWindowColor("rgb(185, 31, 185)");
    betWindow.style.display = "block";
    youChoose = "purple";
    choose.textContent = youChoose;
    betInput.value = 1;
});

redBtn.addEventListener("click", ()=>{
    updateBetWindowColor("rgb(238, 64, 64)");
    betWindow.style.display = "block";
    youChoose = "red";
    choose.textContent = youChoose;
    betInput.value = 1;
});

bigBtn.addEventListener("click", ()=>{
    updateBetWindowColor("rgb(231, 188, 47)");
    betWindow.style.display = "block";
    youChoose = "big";
    choose.textContent = youChoose;
    betInput.value = 1;
});

smallBtn.addEventListener("click", ()=>{
    updateBetWindowColor("rgb(61, 137, 224)");
    betWindow.style.display = "block";
    youChoose = "small";
    choose.textContent = youChoose;
    betInput.value = 1;
});

function betNow(){
    betAmount = document.getElementById("betAmountRupee").textContent;
    mainBalance -=betAmount;
    mainBalance = parseFloat(mainBalance.toFixed(2));
    updateBalace();

    flag30 = true;

    setTimeout(()=>{
        betFlag.style.display = "block";
        document.getElementById("betAmountRupee").textContent = 1.0;
    }, 1000);

    setTimeout(()=>{
        betFlag.style.display = "none";
    }, 3000);
    
}

function updateBetWindowColor(color){
    for(let i=0;i<bwColor.length; i++){
        bwColor[i].style.backgroundColor = color;
    }
}



function checkWin(win){
    numResult = randomNum30[0];
    if(numResult != 0 && numResult%2==0){
        colorResult = "red";
    }else if(numResult !=0 && numResult !=5 && numResult%2!=0){
        colorResult = "green";
    }
    else if(numResult ==0){
        rgp = "rp";
    }
    else{
        rgp  = "gp";
    }

    if(numResult<5){
        bsResult = "small";
    }else{
        bsResult = "big";
    }

    if(win.betCol == colorResult || win.betCol == bsResult){
        displayWin(win.betCol, 1.98);
    }else if(win.betCol ==="rp" || win.betCol ==="gp"){
        displayWin(win.betCol, 4.41);
    }
    else{
        displayLoss(win.betCol);
    }

    flag30 = false;

}



function displayWin(win, num){
    winAmount = betAmount*num;
    mainBalance +=winAmount;
    mainBalance = parseFloat(mainBalance).toFixed(2);
    updateBalace();
    winloose.style.display = "block";
    youLoose.innerHTML = "<span class='win-text'>Congratulations <br/>You Win !</span>"
    youWin.innerHTML = "<h5 class='win-amount'>Amount</h5>"+"<span class='amount-value'>" + winAmount + "</span>";
    setTimeout(()=>{
        winloose.style.display = "none";
    }, 3000);
}


function displayLoss(win){
    winloose.style.display = "block";
    youLoose.innerHTML = "<span class='win-text'>Sorry <br/> You Lose !</span>"
    youWin.innerHTML = "<h5 class='win-amount'>Amount</h5>"+"<span class='amount-value'>" + betAmount + "</span>";
    setTimeout(()=>{
        winloose.style.display = "none";
    }, 3000);
}

function betMethod(betCol){
    this.betCol = betCol;
}
