```
npm install copy-data --save
```

Example
```javascript
const copy = require('copy-data');
const obj = {
  coffee: ['iced', 'double', 'soy', 'vanilla'],
  nachos: true,
  pizza: 5,
  salad: null,
  sushi: 'always'
};

const objCopy = copyObject(obj);
console.log(obj === objCopy); // false
```

Included methods:
```javascript
copyArray(item);
copyFunction(item);
copyObject(item);
copyDeepObject(item);
copyString(item);
// Still renders true, but I think it is because it checks value instead of memory location
```
