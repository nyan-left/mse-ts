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

#### Calculating MSE

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
