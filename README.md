 <h1 align="center">Mean Squared Error</h1>
<p align="center">
Mean Squared Error estimation function + type definitions.<br />
  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e258221518869aa1c6561bb75b99476c4734108e" />
</p>


## Installing

```bash
$ npm install sme-ts
```


## Importing the package

#### Using import
```ts
import mse from 'mse-ts';
```

#### Using require

```js
const mse = require('mse-ts');
```

## Usage

#### Calculating MSE - Example 1

```ts
import mse from 'mse-ts';

const y_true = [3, -0.5, 2, 7];
const y_pred = [2.5, 0.0, 2, 8];

const meanSquaredError = mse(y_true, y_pred);
console.log(meanSquaredError)
```

output

```shell
0.375
```

#### Calculating MSE - Example 2
<!-- This example is from https://github.com/bytespider/mse -->

```ts
const y_true = [
  188, 100, 114, 171, 171, 173, 230, 149,
  191,  81,  61,  62, 127, 217,  62,  81,
  178, 159, 245,  18,   9,  86, 201, 166,
  122, 210,   4, 182,  15,  18, 135, 203,
  222, 134, 154,  21,  71, 217,  48, 153,
  113, 234, 207, 119,  51,  61, 149, 222,
  186,  38, 158,  79, 185,   1, 118, 222,
  22, 137, 110, 206,  94, 120, 163, 241
];
const y_pred = [
  188, 100, 114, 171, 171, 173, 230, 149,
  191,  81,  61,  62, 123, 217,  62,  81,
  178, 159, 245,  18,   9,  86, 201, 166,
  122, 210,   4, 200,  15,  18, 135, 203,
  222, 134, 154,  21,  71, 217,  48, 153,
  113, 234, 207, 119,  51,  61, 149, 222,
  186,  38, 158,  79, 185,   1, 118, 222,
  22, 137, 110, 206,  94, 120, 163, 241
];
const meanSquaredError = mse(y_true, y_pred);

if (meanSquaredError <> 0) {
    console.log('data sets are different by ' + meanSquaredError);
}

```

output

```shell
'data sets are different by 5.3125'
```


#### Steps

You may provide a custom step value

```ts
import mse from 'mse-ts';

const y_true = [3, -0.5, 2, 7];
const y_pred = [2.5, 0.0, 2, 8];

const meanSquaredError = mse(y_true, y_pred, { step: 2});
console.log(meanSquaredError)
```

output

```shell
0.0625
```


## Caveats

- The length of `y_true` should always be higher than or equal to `y_pred`. Non-compliance will result in an `yPred at index i is undefined` error
- Passing in empty arrays will return `NaN`




## More info
Find out more about the applications of MSE over on Wikipedia: https://en.wikipedia.org/wiki/Mean_squared_error


## license

MIT
