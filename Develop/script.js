// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var unix = dayjs().unix();

  //In line 5 I am trying to set the unix timestamp to a variable that I can call on for various purposes, including:

  //1. Displaying the current date in the currentDay element in the html.  Here I am trying to call the unix variable, have day.js format into an answer, and then display that answer in the currentDay element.
  var unixFormatDate = dayjs.unix(unix).format("M/D/YYYY");
  $("#currentDay").text(unixFormatDate);

  //2. Calling the unix variable to define the current hour.
  //   var unixFormatTime = dayjs.unix(unix).format("h");
  //   console.log(unixFormatTime);

  //Testing the variable to see if "h" changes with the change of the hour.  It does, so now the variable unixFormatTime can be used to define the past, present, and future classes.

  var currentHour = dayjs().hour();
  //console.log(currentHour);
  //Deciding to use currentHour instead of my unix-driven variable b/c it displays the result in 24-hour formot.

  //2.2: Use the unixFormstTime or currentHour variables to apply the past, present, or future class to the time blocks. I think I need to use an if statement to compare the id of each time block to the unixFormatTime value.

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //   if () {

  //   }

  //If currentHour > div id, class = "row time-block past"
  //If currentHour === div id, class = "row time-block present"
  //if currentHour < div id, class = "row time-block future"

  var divId = $(".time-block").each(function (index, element) {
    if (currentHour > parseInt(element.id)) {
      element.classList = "row time-block past";
    } else if (currentHour === parseInt(element.id)) {
      element.classList = "row time-block present";
    } else {
      element.classList = "row time-block future";
    }
  });

  // if (currentHour.isEqual(Id)) {
  //   set class = "row time-block present";

  //// if (currentHour.isGreater(divId)) {
  //   set class = "row time-block past";

  // if (currentHour.isLess(divId)) {
  //   set class = "row time-block future";

  //3.  Click Events and Saving Events in Local Storage

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var saveBtnEl = $("saveBtn");

  //saveBtnEl.on("click", function () {});

  saveBtnEl.click(function () {
    var inputValue = $("#textarea").val();
    localStorage.setItem("inputValue", inputValue);
  });
});
