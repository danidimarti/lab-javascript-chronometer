// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.invalidId;
}

Chronometer.prototype.startClick = function () {
    var _this = this;
    this.intervalId = setInterval(function () {
        _this.currentTime += 1;

    }, 1000)

};

var myClock = new Chronometer();


Chronometer.prototype.setMinutes = function () {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime % 60;
    return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (n) {
    if (n < 10) {
        return "0" + n.toString();
    }
    return n;
}


Chronometer.prototype.setTime = function () {
    var minutes = twoDigitsNumber(this.setMinutes());
    var seconds = twoDigitsNumber(this.setSeconds());
      
    // show seconds - secDec=decimals of seconds | secUni= units of seconds
    //substract from twoDigitisNumber from 0 until 1 (excl)
    secDec.innerHTML = seconds.substr(0, 1);
    secUni.innerHTML = seconds.substr(1, 1);
    // display minutes
    minDec.innerHTML = minutes.substr(0, 1);
    minUni.innerHTML = minutes.substr(1, 1);

  
    return "it's " + minutes + " and " + seconds;
};



// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.currentTime);

};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.intervalId = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
