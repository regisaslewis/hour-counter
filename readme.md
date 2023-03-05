Current bugs/issues: 
1) Clicking multiple entries either in View Complete Database or View by Date(s) edits all entries that have been clicked.
    - Fixed, but now placeholder text doesn't display new data for some reason without closing and reloading the database.
    - Found an UUUUUGGGGGLLLLLYYYY (blinking) workaround, but it works.
2) Need an option to allow the "Post" button to revert to normal function by user input.
    - Added a delay for it to return to functionality, so it'll avoid multi-posting.
3) Sorting by ID in the database, instead of date/time, seems like it will lead to a messy database if things are added in out of order.
4) Entries outside of actual dates are still permissable in Post and Edit datebox and Edit timebox fields.
    - I think I fixed it?  I can't reproduce the issue.
    - Bleh, non-numbers and negative numbers are still allowed, maybe switch to what can be posted instead of what cannot.
    - Switched it.  Nothing but numbers in the correct range work now.