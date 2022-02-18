import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

/*

You're going to create a code snippet generator. You might be familiar or have used some sort of 
web dev tools that speed up your UI  development, such as color scheme pickers. For this assignment, 
you're going to create a CSS gradient code snippet generator that lets you create a gradient with 
multiple colors, and then generates a cross-browser compatible CSS code. 

The generator must: 
1. Accept color inputs from the user (2+)
2. Immediately displays a preview of the gradient 
3. Generates a cross browser CSS code snippet into a text box

Extra credit: 
1. Create a "randomize" feature that randomly generates a gradient 
2. Create a "copy to clipboard" button that copies the code snippet
3. Create a slider that lets you place how much space a color takes up
4. Consider using a custom hook for each color input
*/ 