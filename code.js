//wk2 better countdown timer with loops, countdown from 10 to 1 then BLASTOFF!!!
function btrCountdownTimer(){
    var count = 10;

    for(var i = 0; i < 10; i++){
        setTimeout(function(){
            document.getElementById("countdownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!";

    }, 10000);

}

//wk1-2 countdown timer should run 10....1 then blastoff
function startCountdown() {
    var count = 10;
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 sec, will run code in here
        //countdown timer should dispaly 9
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;

    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //set the wait time as 2 sec
    //countdown timer should dispaly 8

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); //set the wait time as 3 sec
    //countdown timer should dispaly 7

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); //set the wait time as 4 sec
    //countdown timer should dispaly 6

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); //set the wait time as 5 sec
    //countdown timer should dispaly 5

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000); //set the wait time as 6 sec
    //countdown timer should dispaly 4

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000); //set the wait time as 7 sec
    //countdown timer should dispaly 3

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000); //set the wait time as 8 sec
    //countdown timer should dispaly 2

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000); //set the wait time as 9 sec
    //countdown timer should dispaly 1

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!!";
    }, 10000); //set the wait time as 10 sec
    //countdown timer should dispaly BLASTOFF!!!!
}

//function to play craps
function playCraps() {
    console.log("playCraps has started");
    var die1;
    die1 = Math.ceil(Math.random() * 6);
    document.getElementById("die1Results").innerHTML = "The value of die1 is:  " + die1;

    var die2;
    die2 = Math.ceil(Math.random() * 6);
    document.getElementById("die2Results").innerHTML = "The value of die2 is:  " + die2;

    var dieSum = die1 + die2;
    document.getElementById("sumResults").innerHTML = "The sum of die1 plus die2 is:  " + dieSum;
    if (dieSum == 7 || dieSum == 11){
        //dieSum == 7 is a test for a sum of 7, and dieSum == 11 is a test for 11
        document.getElementById("crapsResults").innerHTML = "CRAPS!!! You Lose!";
        //die1 == die2 is a test for doubles, die2 % == 0 is a test for evens
    } else if (die1 == die2 && die2 % 2 == 0)  {
        document.getElementById("crapsResults").innerHTML = "HOORAY, DOUBLES!! YOU WIN!!!";
    } else {
        document.getElementById("crapsResults").innerHTML = "Roll Again!";
    }

}

//Sandbox Testing Area, not functioning presently
function sandboxTest() {
    console.log("Sandbox Test has Started");
    var i = 0;
    while (i < 10) {
        setTimeout(function () {
            document.getElementById("sandRes").innerHTML = i;
            i++;
            }, 1000 * i);
        
    }

}