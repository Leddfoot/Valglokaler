# Valglokaler
Note: This project is still WIP!! Datahotellet is down so I am taking this time to add this repository.

This application is designed to retrieve information from DIFI's datahotellet. Users can find their and view a sorted list of local voting stations by narrowing down the fylke and kommune that they live in (via dynamic dropboxes). This is currently written in "pure vanilla javascript" because the application currently needs no extra frameworks/libraries. Some may be added before completion, but this is likely dependent on when the datahotellet comes back online and how much time is available.

#Installation and scripts
Command Line-
first: npm install (Must have Node to run the development and production servers)

for development use: npm run dev-server

to build production version use: npm run build

the standard npm package is installed to increase quality. To run use npm test (note no tests are written yet!)
This is set to automatically correct JS code in most cases. This is not correcting errors, it is just following the standard group's vision of "clean code." (Note that currently standard is flagging some "defined but never used problems" that will be corrected in future commits.
