'use strict';

//global variables for items
var itemOne = document.getElementById('item1');
var itemTwo = document.getElementById('item2');
var itemThree = document.getElementById('item3');
var productContainer = document.getElementById('product-container');
var resultsSection = document.getElementById('list');
var itemArray = [];
var voteRounds = 25;
var titleContainer = document.getElementById('titles');
var chartContainer = document.getElementById('chart-container');
var clickNumber = 24;
var clickedArray = [];
var viewedArray = [];
var nameArray = [];


//constructor function for items
function Item(src, name) {
  this.src = `./images/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.clicked = 0;
  this.viewed = 0;

  itemArray.push(this);
}

//helper function
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//function that holds information for all the items
function createItemSet() {
  var storeThis = localStorage.getItem('box');
  if (storeThis) {
    itemArray = JSON.parse(storeThis);
  } else {
    new Item ('bag', 'R2-D2 Bag');
    new Item ('banana', 'Banana Slicer');
    new Item ('bathroom', 'iPad and Toilet Paper Holder');
    new Item ('boots', 'Toeless Rain Boots');
    new Item ('breakfast', 'Breakfast Station');
    new Item ('bubblegum', 'Meatball Bubblegum');
    new Item ('chair', 'Rounded Chair');
    new Item ('cthulhu', 'Cthulhu Figurine');
    new Item ('dog-duck', 'Duck Muzzle For Dogs');
    new Item ('dragon', 'Canned Dragon Meat');
    new Item ('pen', 'Silverware Pen Tops');
    new Item ('pet-sweep', 'Pet Sweeper');
    new Item ('scissors', 'Pizza Scissors');
    new Item ('shark', 'Shark Sleeping Bag');
    new Item ('sweep', 'Baby Sweeper');
    new Item ('tauntaun', 'Tauntaun Sleeping Bag');
    new Item ('unicorn', 'Canned Unicorn Meat');
    new Item ('usb', 'Tentacle USB');
    new Item ('water-can', 'Self-Watering Watering Can');
    new Item ('wine-glass', 'Impossible Wine Glass');
  }
}

//function to generate the 3 images of the items
function generateItems() {

  var indexOne = randomIndex(itemArray.length);

  itemOne.src = itemArray[indexOne].src;
  itemOne.title = itemArray[indexOne].title;
  itemOne.alt = itemArray[indexOne].alt;
  itemArray[indexOne].viewed++;

  var indexTwo = randomIndex(itemArray.length);
  while (indexOne === indexTwo) {
    indexTwo = randomIndex(itemArray.length);
  }

  itemTwo.src = itemArray[indexTwo].src;
  itemTwo.title = itemArray[indexTwo].title;
  itemTwo.alt = itemArray[indexTwo].alt;
  itemArray[indexTwo].viewed++;

  var indexThree = randomIndex(itemArray.length);
  while (indexThree === indexTwo || indexThree === indexOne) {
    indexThree = randomIndex(itemArray.length);
  }

  itemThree.src = itemArray[indexThree].src;
  itemThree.title = itemArray[indexThree].title;
  itemThree.alt = itemArray[indexThree].alt;
  itemArray[indexThree].viewed++;

  console.table(itemArray);
}

createItemSet();
generateItems();
productContainer.addEventListener('click', handleClick);

//function to create an array for clicks, views, and names of items
function makeCVNArray() {
  for (var i = 0; i < itemArray.length; i++) {
    clickedArray.push(itemArray[i].clicked);
    viewedArray.push(itemArray[i].viewed);
    nameArray.push(itemArray[i].title);
  }
}

//show element
function show(elem) {
  elem.style.display = 'block';
}

//hide element
function hide(elem) {
  elem.style.display = 'none';
}

//function for results of voting
function analysis() {
  var ulEl = document.createElement('ul');
  for (var i = 0; i < itemArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${itemArray[i].title}: ${itemArray[i].clicked} clicks & ${itemArray[i].viewed} views`;
    ulEl.appendChild(liEl);
  }
  resultsSection.appendChild(ulEl);
}

//function to allow clicks/votes to register as well as to show results when finished
function handleClick(event) {
  voteRounds--;
  if (voteRounds === 0) {
    productContainer.removeEventListener('click', handleClick);
    console.log('Voting is finished!');
    analysis();
    hide(productContainer);
  } else {
    console.log(event.target.title);
    var vote = event.target.title;
    console.log(vote, ' was clicked');
    for (var i = 0; i < itemArray.length; i++) {
      if (vote === itemArray[i].title) {
        itemArray[i].clicked++;
      }
    } clickNumber--;
    if (clickNumber === 0) {
      hide(productContainer);
      makeCVNArray(itemArray);
      show(chartContainer);
      makeChart();
      //more logic to add local storage
      localStorage.setItem('box', JSON.stringify(itemArray));
    }
    generateItems();
  }
}

//logic to render chart for voting results
function makeChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [
        {
          label: 'Number of Clicks',
          data: clickedArray,
          backgroundColor: [
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)',
            'rgba(38, 4, 61, .1)'
          ],
          borderColor: [
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)',
            'rgba(38, 4, 61, 1)'
          ],
          borderWidth: 2.5
        },
        {
          label: 'Number of Views',
          data: viewedArray,
          backgroundColor: [
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)'
          ],
          borderColor: [
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)'
          ],
          borderWidth: 2.5
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}

