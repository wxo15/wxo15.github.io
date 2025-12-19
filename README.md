# Portfolio Website

This is a personal web-app built using ReactJs.

[Link](https://www.wxo15.github.io)

![screenshot](public/images/website.gif)

## Credit

Theme: Adapted from [Ceevee 2.0](https://www.styleshout.com/free-templates/ceevee/)

Background: [liuzishan](https://www.freepik.com/liuzishan)

## Current sections

- Header/Navigation Bar
- Hero
- About
- Career
- Education
- Projects
- Certificates/Courses
- Footer

# How to replicate

Clone the repository. Change the data in the JSON files located in `./src/components/raw` to yours. Some of the details would still need to be changed within the JavaScript files located in `./src/components`, but this will be improved in the future.

To add Google Analytics tag, make a file called `./public/google_analytics.js` and put the following code in with your tag. Otherwise, remove the Google Analytics import in the `<head>` tags in `./public/index.html`.

```
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-XXXXXXXXX-X'); // your tag here
```

## How to push to github-pages after changes

Run `npm install` if you haven't. And then run `npm run deploy`.

## prettify

Run `npx prettier --write "**/*"`.
