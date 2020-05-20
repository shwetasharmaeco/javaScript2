"use strict";


// 1. countWords
function countWords(phrase) {
  const object = {};
  const use = phrase.split(" ");
  for (const word of use) {
  	if (word in object) {
  		object[word] +=1;
  	}
  	else {
  		object[word] = 1;
  	}
  }
  return object;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
	const melon_prices = {
        2.50: ['Cantaloupe', 'Honeydew'],
        2.95: ['Watermelon'],
        3.25: ['Musk', 'Crenshaw'],
        14.25: ['Christmas']
    }

 	if (price in melon_prices) {
 		return melon_prices[price];
 	}
 	

}
