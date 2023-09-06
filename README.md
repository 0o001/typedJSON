# typedJSON
JSON objects without prototypechain

```js
let jsonString = '{ "myNumber":1, "myString":"1", "myArray": [1,2,3] }';

let parseTypedObject = JSON.parseTyped(jsonString);
console.log(parseTypedObject);
//output: {myNumber: Number, myString: String, myArray: Array(3)}
console.log(parseTypedObject.myNumber);
//output: Number (1)
console.log(parseTypedObject.myNumber.toString()); //Because no prototype chain
//output: Uncaught TypeError TypeError: parseTypedObject.myNumber.toString is not a function

//vs.

let normalJSON = JSON.parse(jsonString);
console.log(normalJSON);
//output: {myNumber: 1, myString: '1', myArray: Array(3)}
console.log(normalJSON.myNumber);
//output: 1
console.log(normalJSON.myNumber.toString());
//output: '1'

//For call
Number.prototype.valueOf.call(parseTypedObject.myNumber);
//output: 1

let typedJSONString = JSON.stringifyTyped(parseTypedObject);
console.log(typedJSONString);
//output: {"myNumber":1,"myString":"1","myArray":[1,2,3]}
```
