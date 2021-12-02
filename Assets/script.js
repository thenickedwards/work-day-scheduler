console.log ("Hello!")

var timeBlocks = $('#timeblocks');
var currentHour;

var currentDay = $('#currentDay');

function displayDayTime() {
    setInterval(function() {
        currentDay = moment ();
        $('#currentDay').text(currentDay.format("dddd, MMMM Do, YYYY h:mm:ss a"));
    }, 1000);
}

displayDayTime();







for (i = 9; i < 18; i++) {

}

// TO DO's
// Create timeblocks with hr, texarea, save button
// Make textareas writtable, storable
// Save planning to localStorage when button pressed