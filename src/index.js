// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
// const header = document.getElementByID('header')
// const header = document.getElementsByTagName('header')
const header = document.querySelector('header#header')
const logoTitle = document.querySelector('#logoTitle')
const firstCard = document.querySelector('.card:nth-of-type(1)')
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')
const titleFirstCard = firstCard.querySelector('.card-title')
const subtitleFirstCard = firstCard.querySelector('h3')
const textFirstCard = firstCard.querySelector('p')
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = header.querySelectorAll('nav a')
console.log(links)
// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent))
// C- Turn the collection of links into a real array
const linksRealArray = Array.from(links)
console.log(linksRealArray)
// D- Use .filter to find the anchor tag with the textContent of "About"
// const aboutNavItem = linksRealArray.filter(link => link.textContent === 'About')[0]
const aboutNavItem = linksRealArray.find(link => link.textContent === 'About')
console.log(aboutNavItem)


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
