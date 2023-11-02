In package.json in dependencies we can see react and react-dom, react is used for to create react components, react-dom is used for to add react components to the page.

The main files that are the part of our react-project is in our src folder.

Inside this folder we have:

1. index.js - The entry point for our application, where all other modules will be imported and used.
2. index.css - Contains CSS styles for the entire app.
3. App.css - CSS file to style the app component.
4. App.js - This is the root component of our React Application. It contains the entire structure of our web page.
5. App.test.js - Testing module for testing the components.
6. reportWebVitals.js - Module responsible for sending metrics data to a remote analytics endpoint.

React.StrictMode IS FOR HIGHLIGHTING ANY POTENTIAL PROBLEMS IN YOUR APP.

# Defining a component

Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript. This worked great when interaction was a nice-to-have on the web. Now it is expected for many sites and all apps.

React puts interactivity first while still using the same technology: a React component is a JavaScript function that you can sprinkle with markup.
e.g.

export default function Profile() {
return (
<img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
)
}

This is an example of defining a functional component called "Profile". It returns JSX code which represents HTML elements.

### Pitfall
React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

Without parentheses, any code on the lines after return will be ignored!

Components can render other components, but you must never nest their definitions:

When a child component needs some data from a parent, pass it by props instead of nesting definitions.

# The Rules of JSX 
1. Return a single root element 
To return multiple elements from a component, wrap them with a single parent tag.
If you don’t want to add an extra <div> to your markup, you can write <> and </> instead:
This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.

## Why do multiple JSX tags need to be wrapped? 
JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

2. Close all the tags 
JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

3. camelCase all most of the things! 
JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead, named after the corresponding DOM property
For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.

