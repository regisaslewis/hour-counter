Stuff for the Blog:

This is a tool I built to help me stay on top of my schoolwork by providing some documentation of the amount of time I've spent working so far.

I like to keep things organized.  Before I even started classes, when I was teaching myself a little coding online and with some books, I started writing down my hours, so I could get a feel for a good pace -- not so heavy that I would burn myself out, not so light that daily progress couldn't be felt.

Prior to building the site, I was writing down my hours in a little .txt file (then a Google Doc) and rounding the times off to the nearest 15 minutes, so that I could easily divide hours into quarters and add up my total time spent working. Doing things this way felt like I was fudging the numbers, so I started thinking about what it meant for 15 minutes to equal .25 hours.  

I was still very early in my understanding of Javascript at the time - I hadn't really done much work with the DOM or event listeners.  So, initially, I was using Replit to mess around with the math to see if I could get a working equation that translated minutes into decimals so that 60 minutes equalled 1, 30 equalled 0.5, and so on.

This was just me basically using JavaScript as a calculator for basic arithmetic.  It felt good to be using the tools, but felt like I was using them *wrong* more or less.

So I started building a function to do the math for me with times as parameters.  The first "working" function that converted a time to a decimal was this one: 

function minutesToDecimals(hour, minutes) {  
  minutes *= (5 / 3);
  return `${hour}.${minutes}`
}

This worked fine for a while.  I quickly learned it worked well to separate the time into hours and minutes.  Hours could remain a whole number.  If I worked from 9:00 to 11:00, that's 2 hours, no additional math needed.  It was the minutes that needed to be converted to decimals.  So 100/60 , with a common denominator of 20, reduced down to 5/3.  I'd multiply the minutes by five-thirds  This is the same as multiplying the minute value by 5, then dividing that product by 3.  For example, 15 * 5 = 75, 75 / 3 = 25.  One quarter hour has been translated to twenty-five.  The function then places it as a decimal.  25 becomes .25 after the whole number of the hours.

>>>>>

Okay, this is simple math, but I got something working: a function with parameters standing in for my total hours worked as a whole number, followed by a decimal amount that equalled a percentage of an hour.

The first problem with my function was that what I was returning was a string.  This was necessary as I was taking two whole numbers and placing a decimal between them.  So, when the multiplication of the minutes value ended in a decimal, I would end up with something like 2.8.3333333334, which isn't a valid number.

I could have solved this by multiplying the value of minutes by .01, but I didn't think of that at the time and didn't really have anyone to bounce this code off of.  I was working alone, more or less overwhelmed, trying to make simple things perform.  I just tried to figure out what I could with my current understanding of coding.

function minutesToDecimals(hour, minutes) {  
  minutes *= (5 / 3);    
  if (minutes <= 9) {
    return `${hour}.0${minutes.toFixed(0)}`;
  }
  return `${hour}.${minutes.toFixed(0)}`;
}
===================================================================

Current bugs/issues: 
1) Clicking multiple entries either in View Complete Database or View by Date(s) edits all entries that have been clicked.
    - Fixed, but now placeholder text doesn't display new data for some reason without closing and reloading the database.
    - Found an UUUUUGGGGGLLLLLYYYY (blinking) workaround, but it works.
2) Need an option to allow the "Post" button to revert to normal function by user input.
    - Added a delay for it to return to functionality, so it'll avoid multi-posting.
3) Sorting by ID in the database, instead of date/time, seems like it will lead to a messy database if things are added in out of order.
    -Not sure this is actually an issue, since searching is done by dates and not id# or anything like that.  Only the full view of the database will potentially look disorganized.  Would be an issue if the display was broken into weeks (which is a good idea, but outside the current scope of the project).
4) Entries outside of actual dates are still permissable in Post and Edit datebox and Edit timebox fields.
    - I think I fixed it?  I can't reproduce the issue.
    - Bleh, non-numbers and negative numbers are still allowed, maybe switch to what can be posted instead of what cannot.
    - Switched it.  Now, nothing but numbers in the correct range work.  Looking good.