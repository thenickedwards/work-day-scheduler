console.log("Hello World!")

var timeBlocks = $('#timeblocks');
var currentHour = parseInt(moment().format("H"));
var currentDay = $('#currentDay');
var saveIcon = `<i class="fas fa-save"></i>`
var saveButton = $('.saveBtn');

// Display current day and time
function displayDayTime() {
    setInterval(function () {
        currentDay = moment();
        $('#currentDay').text(currentDay.format("[Right now it's:] dddd, MMMM Do, YYYY h:mm:ss a"));
    }, 1000);
}

displayDayTime();

// Create hour of day (adjusts for AM/PM), text area for tasks, and save button
function createPlanner() {
    for (i = 9; i < 18; i++) {
        if (i > 12) {
            var hourRow = `
                <div id="${i}" class= "row time-block">
                    <div class="hour col-1">${i - 12 + " PM"}</div>
                    <textarea name="" id="" class="description col-10"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn">${saveIcon}</button>
                </div>`
            
            $('#timeblocks').append(hourRow)
        } else {
            var hourRow = `
                <div id="${i}" class= "row time-block">
                    <div class="hour col-1">${i + " AM"}</div>
                    <textarea name="" id="" class="description col-10"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn">${saveIcon}</button>
                </div>`

            $('#timeblocks').append(hourRow)

        }
    }
}

createPlanner();

// If hour is current hour, highlight
$('.time-block').each(function () {
    if ($(this).attr("id") > currentHour) {
        $(this).addClass("future")
    } else if ($(this).attr("id") < currentHour) {
        $(this).addClass("past")
    } else {
        $(this).addClass("present")
    }
})

// Add event listener or onclick to save then save to localStorage
$('.description').each(function() {
    localStorage.getItem($(this).parent().attr('id'));
})


saveButton.on("click", function () {
    var toDo = $(this).sublings('.description').val()
    var dayHr = $(this).parent().attr('id')
    localStorage.setItem(dayHr, toDo)
});



// TO DO's
// Create timeblocks with hr, texarea, save button
// Make textareas writtable, storable
// Save planning to localStorage when button pressed