//Show the creation and usage of symbol with code

/* A "symbol" represents a unique identifier
Symbol.for method searches for existing symbols in a runtime-wide symbol registry returns the same. If not found, creates a new Symbol
Symbol.keyFor method retrieves the name of the symbol */

// new symbol
let symId = Symbol('id');
console.log(symId);

// global symbol
let symUsername = Symbol.for('username');
console.log(symUsername);

// get name by symbol
Symbol.keyFor(symUsername); // username
console.log(Symbol.keyFor(symUsername));
