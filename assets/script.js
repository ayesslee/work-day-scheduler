//display current date
var currentDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function () {
    //click listener for saveBtn
    $(".saveBtn").on("click", function() {
         // grabs values of the description class 
         var text = $(this).siblings(".event").text();
         var time = $(this).siblings(".hour").val();

         localStorage.setItem(time, text);
    })
   
})

function timeTracker() {
    //current hour
    var currentTime = moment().hours();

    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id"));
        //checks time and remove/add classes 
        if (timeBlock > currentTime) {
           $(this).addClass("past");
        } else if (timeBlock === currentTime) {
            $(this).addClass("past");
        } else {
            $(this).addClass("past");
        }
    })
}

//save events when page is refreshed
$("#8 .event").val(localStorage.getItem("8"));
$("#9 .event").val(localStorage.getItem("9"));
$("#10 .event").val(localStorage.getItem("10"));
$("#11 .event").val(localStorage.getItem("11"));
$("#12 .event").val(localStorage.getItem("12"));
$("#13 .event").val(localStorage.getItem("13"));
$("#14 .event").val(localStorage.getItem("14"));
$("#15 .event").val(localStorage.getItem("15"));
$("#16 .event").val(localStorage.getItem("16"));

//calls function to change time block color
timeTracker();
