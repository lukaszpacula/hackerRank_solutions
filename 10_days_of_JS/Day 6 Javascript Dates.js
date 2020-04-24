function getDayName(dateString) {
    var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date = new Date(dateString);
    return dayName[date.getDay()];
}
