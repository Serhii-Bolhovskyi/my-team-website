# Demo

# Myteam multipage website - practice frontend skills
![Project layout](/images/preview.jpg)

## Welcome! :wave:

That project is the best way to practice your frontend skills.

This site was based on [Top 20 Front-end Developer Projects of 2024 ](https://www.knowledgehut.com/blog/web-development/front-end-web-development-projects). Where you can find project for your level knowledge.

In order to do this challenge, you need to have a solid understanding of HTML and CSS, also a basic understanding of JavaScript.

## Tech Stack and Features required for the project

User can be able to do following:
+ View the best layout for each page based on the size of their device's screen.
+ For all interactive elements on the site, see hover states.
+ When you click the + icon on the About page, you'll see the correct content for each team member.
+ When you submit the contact form, you'll get an error message if: 
    - If the `Name`, `Email Address`, or `Message` fields are blank, the message "This field is required" should appear.
    - "Please use a valid email address" should appear if the `Email Address` is not formatted correctly.

My stack for this project: `HTML`, `CSS`, `JS` and `TailwindCss`, which i learned recently.

All needed image you can find in folder `images`.

# How to create an environment with Tailwind CLI

So, if you also want to use TailwindCss framework in your projects, it's tutorial for you.

1. Create a folder and open it in VScode;

2. Open your `TERMINAL` and write:
     ```npm init -y``` and press enter. This should create `package.json` file.

3. The next thing we gonna do is install `tailwindcss` in `TERMINAL`:
     ```npm i -D tailwindcss```. This should create `node_modules` folder and also `package-lock.json`;

4. The next: 
    ```npx tailwindcss init```. We should get file `tailwind.config.js`;

5. In your `tailwind.config.js` write this:
    ```module.exports = {
        content: ["./*.html"],
        theme: {
            extend: {},
        },
        plugins: [],}
    ```

6. Create a file `input.css`. Add the @tailwind directives for each of Tailwind’s layers to your main CSS file:
   ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
   ```

7. In `package.json` in area `scripts`, we creat scripts for build our CSS:
    ```
    "scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/style.css",
    "watch": "tailwindcss -i ./input.css -o ./css/style.css --watch"
    },
    ```
8. In `TERMINAL` run:
    ```npm run build```. This should create a folder `css` with file inside `style.css`

9. In `index.html` file pase: ```<link rel="stylesheet" href="css/style.css">```

10. And the last thing we gonna do, run our script in order to automatically rebuild after we saved changes:
```npm run watch```