
setInterval(() => {
    let dateTimeNow = new Date();

    function time() {
        let hours = dateTimeNow.getHours();
        let minutes = dateTimeNow.getMinutes();
        let seconds = dateTimeNow.getSeconds();

        let greetingText = document.querySelector(".greet");

        if(hours <= 12) {
            greetingText.innerHTML = "Good Morning!";
        } else if(hours > 12 && hours < 18) {
            greetingText.innerHTML = "Good Afternoon!";
        } else {
            greetingText.innerHTML = "Good Night!";
        }

        // Changing default 24-Hour to 12-Hour along with AM & PM
        if(hours > 12) {
            hours = hours - 12;
            document.querySelector(".am-pm").innerHTML = "PM";
        }

        // Concatenating 0 to time whenever less than 10
        if(hours < 10) {
            hours = "0" + hours;
        }
    
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
    
        if(seconds < 10) {
            seconds = "0" + seconds;
        }

        return document.querySelector(".time").innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    time();


    function date() {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        let day = dateTimeNow.getDate();
        let month = monthNames[dateTimeNow.getMonth()];
        let year = dateTimeNow.getUTCFullYear();
    
        // Concatenating 0 to date whenever less than 10
        if(day < 10) {
            day = "0" + day;
        }
    
        return document.querySelector(".date").innerHTML = day + " " + month + " " + year;
    }

    date();
});