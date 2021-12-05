console.log("Hello World!")

var timeBlocks = $('#timeblocks');
var currentHour = parseInt(moment().format("H"));
var currentDay = $('#currentDay');
var saveIcon = `<i class="fas fa-save"></i>`

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

// Retireve/render data previously saved to localStorage
$('.description').each(function() {
    var storedTasks = localStorage.getItem($(this).parent().attr('id'));
    $(this).val(storedTasks);
});

// Store textarea data to localStorage on click
var saveButton = $('.saveBtn');

saveButton.on("click", function() {
    var dayHr = $(this).parent().attr('id');
    var toDo = $(this).siblings('.description').val();
    localStorage.setItem(dayHr, toDo);
});