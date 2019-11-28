'use strict';

//global variables for pictures
var itemOne = document.getElementById('item1');
var itemTwo = document.getElementById('item2');
var itemThree = document.getElementById('item3');
var itemArray = [];

function Item(src, name) {
    this.src = `./images/${src}.jpg`;
    this.title = name;
    this.alt = name;

    itemArray.push(this);
}

function randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateImages() {
    var index = randomIndex(itemArray.length - 1);

    itemOne.src = itemArray[index].src;
    itemOne.title = itemArray[index].title;
    itemOne.alt = itemArray[index].alt;

    var indexTwo = randomIndex(itemArray.length - 1);

    itemTwo.src = itemArray[indexTwo].src;
    itemTwo.title = itemArray[indexTwo].title;
    itemThree.alt = itemArray[indexTwo].alt;

    var indexThree = randomIndex(itemArray.length - 1);

    itemThree.src = itemArray[indexThree].src;
    itemThree.title = itemArray[indexThree].title;
    itemThree.alt = itemArray[indexThree].alt;

    console.log(index, indexTwo, indexThree);

    while (indexTwo === index) {
        indexTwo = randomIndex(itemArray.length - 1);
    }
}

function createOnPageLoad() {
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
};

createOnPageLoad();
generateImages ()
console.table(itemArray);





