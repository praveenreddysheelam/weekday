# create react app 
     ```js
      npx create-react-app weekday 
     ```
# setup redux
    ```js
    --npm install react-redux 
    --npm install @reduxjs/toolkit
   ```
- Install and init tailwind css

```js
npm install -D tailwindcss
npx tailwindcss init
```

- Configure tailwind css in your project

  `npx tailwindcss init` command will create a file `tailwind.config.js` in your project's root directory.
  Open `tailwind.config.js` and replace all content with below code.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Now you created a react app with tailwind css successfully. Now run the below command on your terminal to start your local development server.

```js
npm start
```
# How to run this run this project 
    - Clone a repository from github(gh repo clone praveenreddysheelam/weekday)
    - npm start to run this project
# Development 
    -Header(Based on api selecting filters )
      -Role (frontend,backend,techlead,andriod,ios)--> drop down with multiple item selection
      -Location (remote ,chennai delhi ncr,mumbai)--> drop down with multiple item selection
      -Experience 
      -min Base Salary
      -No of Employees (data is not provided in the given sample api)
    -Body
      -Job list 
        - list of Job cards 
           -company logo (Not provided in api instead i have week day logo found on chrome to have good UI)
           -Company name (it is not not present )
           -Role
           -Location 
           -Salary Range in USD 
           -Description about Company 
           -Minimum Experience 
           -Easy Apply Button
           -Referral BUtton 
-- Use Redux Store also instead of react hooks 
      -- As per given assignment application is of less complexity so react hooks give better performance comparitively .

