# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### Screenshot

#### Mobile view

![](/screenshot-mobuile.png)

#### Tablet Landscape view

![](/screenshot-tablet.png)

### Links

- Solution URL: https://github.com/FJSolutions/fm-tip-calculator
- Live Site URL: https://fbj-tip-calculator.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Flexbox & CSS Grid
- [Alpine.js](https://alpinejs.dev/) - JS library
- [LightningCSS](https://lightningcss.dev/) - For styles
- [Vite](https://vitest.dev/)

### What I learned

This exercise challenged my ability to semantically represent the content of the project without resorting to using display-only elements. 
I had t rework a couple of things a couple of times to get it as semantic as I eventually settled on. 
But I'm glad that I started with the markup, otherwise keeping it semantic would have been infinitely more difficult. 

When I saw the project design I immediately decided I was going to use it as an opportunity to try out [Alpine.js](https://alpinejs.dev/).
This proved to be a valuable choice which had surprising challenges. The basic usage was almost easier than I expected, but when I tried
to write some tests to validate the data and functional portion of the app I ran into the real challenge! 

Should have started with TDD! That is, after doing the semantic HTML markup, I should have put together the testing environment and moved
forward from there. After all, this is the heart of TDD. But I didn't, and so I hit a significant learning curve. I had not realised that
`alpinejs` can only be tested through the frontend and so I would have to learn all about frontend testing libraries as I have only ever 
done backend testing before. In the end, after writing a few tests, I gave up on a full test suite until I have had a chance to invest in
learning the basic setup and assertion skills needed for frontend testing.

I sed `span` elements as text dividers where `p` tags violated the HTML spec (ie. inside a `label`). 
Also, putting the `h1` and an `article` inside the `main` tag was pleasing both semantically and for styling purposes.

```html
<main x-data="tipCalculator" x-cloak>
  <h1>SPLI<br>TTER</h1>
  <article>
    <section class="tip-options">
      <label for="amount" class="amount-overlay">
        <span>Bill</span>
        <input type="number" id="amount" min="0" step="0.01" x-bind:value="getAmount"
               @change="setAmount">
        <img src="/images/icon-dollar.svg" alt="total bill" width="10" height="16">
      </label>
      ...
```

I continue to enjoy the use of `grid-template-areas` for managing responsive layouts. 
For instance the change between the following two snippets. 

```css
/* Tablet & bigger screens */
@media screen and (min-width: 48em) {
  article {
    grid-template-areas: "options results";
    ...
  }
}

/* Mobile screens */
@media screen and (width <= 48em) {
  article {
    grid-template-areas: "options" "results";
    ...
  }
}
```

Writing the data part of the `alpinejs` in its own file will make testing easier into the future and was easier to setup
than having too much 'spaghetti code' mised into the `html`.  

```js
export const alpineData = Alpine.reactive({
  ...
})
```

### Continued development

Having an intermediate (Tablet portrait) layout would be a good next step.

### AI Collaboration

I only used external AI to verify my design decisions and and answer questions rather than try and have it write code for me. 

## Author

- Frontend Mentor - [Francis Judge](https://www.frontendmentor.io/profile/FJSolutions)
