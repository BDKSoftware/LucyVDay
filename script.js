function tillValentinesDay() {
  setInterval(function () {
    var today = new Date();

    // Valentines day 2024 in Mountain Time
    var valentinesDay = new Date("2024-02-14T00:00:00-07:00");

    var timeDiff = valentinesDay - today;

    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);
}
