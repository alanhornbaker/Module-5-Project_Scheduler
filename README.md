# Module-5-Project_Scheduler

## Description

The motivation for this project was the need to plan out your workday to improve time management and general productivity. It solves the problem of getting distracted and/or spending way more time than you meant on one task that you had previously only delegated a little time to.

## User Story & Acceptance Criteria

User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with time blocks for standard business hours

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

WHEN I click into a time block
THEN I can enter an event

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist

## What I learned, Where I Struggled

In this project, I learned how to use day.js to retreive the current date and time. Then I learned how to insert that information into the DOM/html and get it to display on the webpage.

In general, I learned a lot about how jquery/day.js interact and funciton with the DOM/html, and how to get them to work together; how to reference the right spots/parts of code between the two documents.

One thing I struggled with was being unsure about the language syntax, and how to write interactions between the Dom and the the js. For example, in section 2 of the js file, I'm pretty sure I have the right psuedo-code explaining how I want to append the div class depending on how the id value compares with currentHour. However, I'm struggling with the syntax to actually append that to execute correctly.

Similarly, there must be some bug in the syntax of section 3 of the js script, with the click events and saving to local storage.

## TODO for the Future

1. Finish section 2 of the js: functional past/present/future
2. Finish section 3 of the js: click events and saving input to local storage
