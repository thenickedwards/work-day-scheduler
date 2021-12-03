console.log ("Hello World!")

var timeBlocks = $('#timeblocks');
var currentHour;

var currentDay = $('#currentDay');




// Display current day and time
function displayDayTime() {
    setInterval(function() {
        currentDay = moment ();
        $('#currentDay').text(currentDay.format("[Right now it's:] dddd, MMMM Do, YYYY h:mm:ss a"));
    }, 1000);
}

displayDayTime();





// Create hour of day, text area for tasks, and save button (adjusts for AM/PM)
function createPlanner () {
    for (i = 9; i < 18; i++) {

        // if (i > 12) {
        //     var hourRow = `
        //         <tr id="${"hour-"+i}" class= "row time-block">
        //         <td><div class="hour">${i-12 + " PM"}</div></td>
        //         <td><textarea name="" id="" class="description"></textarea></td>
        //         <td><button type="button" class="btn btn-primary saveBtn">💾</button></td>
        //         </tr>`

        //     $('#timeblocks').append(hourRow)
        // } else {
        //     var hourRow = `
        //         <tr id="${"hour-"+i}" class= "row time-block">
        //         <td><div class="hour">${i + " AM"}</div></td>
        //         <td><textarea name="" id="" class="description"></textarea></td>
        //         <td><button type="button" class="btn btn-primary saveBtn">💾</button></td>
        //         </tr>`

        //     $('#timeblocks').append(hourRow)

        if (i > 12) {
            var hourRow = `
                <div id="${"hour-"+i}" class= "row time-block">
                    <div class="hour">${i-12 + " PM"}</div>
                    <textarea name="" id="" class="description"></textarea>
                    <button type="button" class="btn btn-primary saveBtn">💾</button>
                </div>`

            $('#timeblocks').append(hourRow)
        } else {
            var hourRow = `
                <div id="${"hour-"+i}" class= "row time-block">
                    <div class="hour">${i + " AM"}</div>
                    <textarea name="" id="" class="description"></textarea>
                    <button type="button" class="btn btn-primary saveBtn">💾</button>
                </div>`

            $('#timeblocks').append(hourRow)

        }
    }
}

createPlanner();

// TO DO's
// Create timeblocks with hr, texarea, save button
// Make textareas writtable, storable
// Save planning to localStorage when button pressed