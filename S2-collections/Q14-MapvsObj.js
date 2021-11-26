//Show how map is different from object to store key value pairs with coding example

/* Map does not contain any keys by default unlike objects which has keys from its prototype
Map's keys can be any value (including functions, objects, or any primitive) unlike object where keys are only strings
The keys in Map are ordered in a simple, straightforward way
The number of items in a Map is easily retrieved from its size property
Map is an iterable object */

map.set(1, 'Mapped to a number'); // primitive number as key
map.set('1', 'Mapped to a string'); // string value as key
map.set({}, 'Mapped to a object'); // object as key
map.set([], 'Mapped to an array'); // array as key
map.set(() => {}, 'Mapped to a function'); // function as key
