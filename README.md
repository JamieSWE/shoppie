# The Shoppies

###### Developed by: Jamie Shaw

##### This small application was developed to be a part of my application for **Shopify's Frontend Internship - Summer 2021**.

![Image of website](https://github.com/DevJam876/shoppie/blob/mobile-responsive/resources/Shoppie_Screenshot.PNG)

[Live Demo](https://epic-boyd-6cbf81.netlify.app/)

### Overview of Technologies Used

This website was developed using _HTML_, _CSS_ and _Vanilla JavaScript_. To make the website somewhat modular and easier to maintain, _CSS Variables_ were used where necessary to enable easier and quicker UI changes and _JavaScript Modules_ were used so that the code for each major function could be placed in its own file. _LocalStorage_ was used to persist a user's nomination list even after they closed the browser window. Finally, a simple _Animation_ was created to give a fade-in effect whenever a new movie was added to the nomination list.

### Overview of Website

Upon navigating to the website, the user types the title of a movie that they'd like to nominate for an award. If movies with the exact or similar titles are found, then the user will be able to nominate from the results displayed. Otherwise, an appropriate error message will be displayed.

A user can nominate a maximum of five movies. After five movies have been nominated, a message indicating the same will be on display until at least one of the previously nominated movies are removed from the nomination list.
