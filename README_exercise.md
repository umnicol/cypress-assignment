# OLA 5 - Last assignment - Cypres

For your last assignment, you're to write an end-2-end test using cypress.

I've created a version of the Wash World assignment you can use for the assignment.
You can find it deployed here:
https://wash-world-nextjs.vercel.app/

You can also write the test for you own Wash world implementation.

The test should go through the full flow from location selection to starting a wash.

The test(s) should cover and assert these areas:

1. For each page transition, validate the correct title is present.
2. For each of the selectable pages, validate the amount of buttons.
3. Validate the location under maintenance cannot be selected.
4. For the countdown, intercept the POST-call and mock it with a shorter timer.
