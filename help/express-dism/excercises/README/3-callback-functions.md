# Exercise 3

The main point of this exercise is to be comfortable with the concept of callback functions in JavaScript.

## Prerequisites

-   Understanding the concept of callback functions

## Instructions

You just joined a team that is currently working on a project.

Nabil, your boss has tasked you to pick up from the previous developer's work.

They require you to modify the half-created "delay" function that is found in `delay.js`.

Nabil asks you to implement the concept of the callback function such that when calling the delay function, you can pass in a callback function that will be called when the delay is finished.

Here is what is expected:

```js
delay(() => {
    console.log("I am delayed!");
}, 1000);

// Output (after 1 second):
// I am delayed!
```

> "The team is counting on you! Good luck!"

\- Nabil
