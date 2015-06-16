# check-point-in-rectangle
Checks if point is in rectangle or not.
This is based on the concept explained by [Martin Thoma](http://martin-thoma.com/how-to-check-if-a-point-is-inside-a-rectangle/)
## installation

```
npm install check-point-in-rectangle
```

## usage
```javascript
var checkPoint = require('check-point-in-rectangle');
checkPoint(point, rectangle) == true
```
### example
````javascript
var checkPoint = require('check-point-in-rectangle');
if (checkPoint([5,5],[[0,0], [10,0], [10,10], [0,10]]) == true) {
  console.log('Point is inside the rectangle');
}
```
  
## developing
Once you run
 
```npm isntall```

then for running test 

```npm run test```

to create build

```npm run build```

## license
This project is licensed under the terms of the MIT license.
