# check-point-in-rectangle
Checks if point is in rectangle or not.
This is based on the concept explained by [Martin Thoma](http://martin-thoma.com/how-to-check-if-a-point-is-inside-a-rectangle/)
## installation

```
npm install check-point-in-rectangle
```

## usage
```javascript
var checkPointIn = require('check-point-in-rectangle');
checkPointIn(point, rectangle [,precision]) 
```
**point** array of x and y coordinates  
**rectangle** array of four corner points  
**precision** is used in algorithm to compare the area of rectangle and sum of triangles formed by point with rectangle, default is 6      
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
